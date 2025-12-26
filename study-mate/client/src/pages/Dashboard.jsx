import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardCard from "../components/DashboardCard";
import DoubtCard from "../components/DoubtCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [doubts, setDoubts] = useState([
    {
      id: 1,
      subject: "Data Structures",
      question: "Can someone explain stacks with a real-time example?",
      user: "Student A",
      replies: ["A stack is like a pile of plates - you add and remove from the top!"],
    },
    {
      id: 2,
      subject: "DBMS",
      question: "Difference between normalization and denormalization?",
      user: "Student B",
      replies: [],
    },
    {
      id: 3,
      subject: "Operating Systems",
      question: "What is the difference between process and thread?",
      user: "Student C",
      replies: ["A process has its own memory space, threads share memory within a process."],
    },
  ]);

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
        <DashboardNavbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to StudyMate</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <DashboardCard
              title="Notes Shared"
              count="12"
              description="Total notes uploaded"
            />
            <DashboardCard
              title="Doubts Asked"
              count="8"
              description="Questions posted by you"
            />
            <DashboardCard
              title="AI Queries"
              count="20"
              description="Interactions with AI"
            />
          </div>

          {/* <div className="flex flex-wrap gap-4 mb-10">
            <Link to="/doubts" className="btn-primary">
              Post a Doubt
            </Link>
            <Link to="/upload-notes" className="btn-secondary">
              Upload Notes
            </Link>
            <Link to="/ai-chat" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg transition-colors duration-200 font-medium">
              Ask AI
            </Link>
          </div> */}

          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Doubts from Community</h2>
            <div className="space-y-4">
              {doubts.map((doubt) => (
                <DoubtCard key={doubt.id} doubt={doubt} onReply={addReply} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
