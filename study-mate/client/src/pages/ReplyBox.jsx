import { useState } from "react";

const ReplyBox = ({ onReply }) => {
  const [reply, setReply] = useState("");

  const handleReply = () => {
    if (reply.trim() === "") return;

    onReply(reply);
    setReply("");
  };

  return (
    <div className="mt-4">
      <textarea
        className="w-full border rounded p-2 mb-2"
        placeholder="Write your reply..."
        value={reply}
        onChange={(e) => setReply(e.target.value)}
      />

      <button
        onClick={handleReply}
        className="bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700"
      >
        Reply
      </button>
    </div>
  );
};

export default ReplyBox;
