import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import ChatMessage from "../components/ChatMessage";

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I'm StudyMate AI. Ask me any academic doubt!",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    if (input.toLowerCase().startsWith("@summarizeai")) {
      const textToSummarize = input.replace("@summarizeai", "").trim();

      if (!textToSummarize) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Please provide text after @summarizeai",
          },
        ]);
        return;
      }

      await callSummarizeAPI(textToSummarize);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "AI service unavailable" },
      ]);
    }
  };

  const callSummarizeAPI = async (text) => {
    const res = await fetch("http://localhost:5000/api/ai/summarize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: text }),
    });

    const data = await res.json();

    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: data.summary },
    ]);
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-50 min-h-screen ml-64">
        <DashboardNavbar title="AI Chat" />

        <div className="p-8 h-[calc(100vh-4rem)] flex flex-col">
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            StudyMate AI
          </h2>

          <div className="flex-1 card p-4 overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <ChatMessage
                key={index}
                sender={msg.sender}
                text={msg.text}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask your doubt..."
              className="input-field flex-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} className="btn-primary">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
