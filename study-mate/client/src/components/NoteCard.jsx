import { useState } from "react";

const NoteCard = ({ note }) => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const summarizeNote = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/ai/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: note.description,
        }),
      });

      const data = await response.json();
      setSummary(data.summary);
    } catch (error) {
      setSummary("Unable to summarize at the moment.");
    }

    setLoading(false);
  };

  return (
    <div className="card p-5">
      <h3 className="text-lg font-semibold text-purple-600">
        {note.title}
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        Subject: {note.subject}
      </p>

      <p className="text-gray-700 mt-2">
        {note.description}
      </p>

      <button onClick={summarizeNote} className="btn-primary mt-3 text-sm">
        {loading ? "Summarizing..." : "Summarize with AI"}
      </button>

      {summary && (
        <div className="mt-3 bg-purple-50 p-3 rounded-lg text-sm border border-purple-200">
          <strong className="text-purple-700">AI Summary:</strong>
          <pre className="whitespace-pre-wrap mt-1 text-gray-700">{summary}</pre>
        </div>
      )}
    </div>
  );
};

export default NoteCard;
