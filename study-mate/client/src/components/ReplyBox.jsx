import { useState } from "react";

const ReplyBox = ({ onReply }) => {
  const [reply, setReply] = useState("");

  const handleReply = () => {
    if (reply.trim()) {
      onReply(reply);
      setReply("");
    }
  };

  return (
    <div className="mt-4">
      <textarea
        placeholder="Write your reply..."
        className="input-field resize-none"
        rows="3"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
      />

      <button onClick={handleReply} className="btn-primary mt-2">
        Reply
      </button>
    </div>
  );
};

export default ReplyBox;
