const ChatMessage = ({ sender, text }) => {
  const isUser = sender === "user";

  return (
    <div className={`flex mb-3 ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs p-3 rounded-lg ${
          isUser
            ? "bg-purple-600 text-white"
            : "bg-gray-100 text-gray-800 border border-gray-200"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
