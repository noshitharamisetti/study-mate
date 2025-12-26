import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import DoubtCard from "../components/DoubtCard";

const DoubtsFeed = () => {
  const [doubts, setDoubts] = useState([
    {
      id: 1,
      subject: "Data Structures",
      question: "Can someone explain stacks with a real-time example?",
      user: "Student A",
      replies: [],
    },
    {
      id: 2,
      subject: "DBMS",
      question: "Difference between normalization and denormalization?",
      user: "Student B",
      replies: [],
    },
  ]);

  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");

  const postDoubt = () => {
    if (!subject || !question) return;

    const newDoubt = {
      id: Date.now(),
      subject,
      question,
      user: "You",
      replies: [],
    };

    setDoubts([newDoubt, ...doubts]);
    setSubject("");
    setQuestion("");
  };

  const addReply = (doubtId, replyText) => {
    if (!replyText) return;

    setDoubts(
      doubts.map((doubt) =>
        doubt.id === doubtId
          ? { ...doubt, replies: [...doubt.replies, replyText] }
          : doubt
      )
    );
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-50 min-h-screen ml-64">
        <DashboardNavbar title="Doubts Feed" />

        <div className="p-8 max-w-3xl mx-auto">
          <div className="card p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">
              Post a Doubt
            </h2>

            <input
              type="text"
              placeholder="Subject"
              className="input-field mb-3"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <textarea
              placeholder="Write your doubt here..."
              className="input-field mb-3 resize-none"
              rows="4"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <button onClick={postDoubt} className="btn-primary">
              Post Doubt
            </button>
          </div>

          <div className="space-y-4">
            {doubts.map((doubt) => (
              <DoubtCard key={doubt.id} doubt={doubt} onReply={addReply} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubtsFeed;
