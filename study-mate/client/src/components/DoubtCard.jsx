import { useState } from "react";
import ReplyBox from "./ReplyBox";

const DoubtCard = ({ doubt, onReply }) => {
  const [summary, setSummary] = useState("");

  const summarizeReplies = async () => {
    setSummary("This is the summarized reply...");
  };
  
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-purple-600">
        {doubt.subject}
      </h3>

      <p className="mt-3 text-gray-700">{doubt.question}</p>

      <p className="text-sm text-gray-400 mt-2">
        Posted by {doubt.user}
      </p>

      <div className="mt-4 space-y-2">
        {doubt.replies.map((reply, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-lg text-sm border border-gray-200">
            {reply}
          </div>
        ))}
      </div>
      
      {doubt.replies.length > 0 && (
        <button onClick={summarizeReplies} className="btn-primary mt-3 text-sm">
          Summarize Replies
        </button>
      )}
      
      {summary && (
        <div className="bg-purple-50 p-4 mt-3 rounded-lg border border-purple-200">
          <strong className="text-purple-700">Summary:</strong>
          <pre className="whitespace-pre-wrap mt-2 text-gray-700">{summary}</pre>
        </div>
      )}

      <ReplyBox onReply={(text) => onReply(doubt.id, text)} />
    </div>
  );
};

export default DoubtCard;
