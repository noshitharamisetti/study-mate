import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import { useNotes } from "../context/NotesContext";

const Notes = () => {
  const { addNote } = useNotes();

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const uploadNote = () => {
    if (!title || !subject || !description) return;

    const newNote = {
      id: Date.now(),
      title,
      subject,
      description,
      user: "You",
    };

    addNote(newNote);

    setTitle("");
    setSubject("");
    setDescription("");
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-50 min-h-screen ml-64">
        <DashboardNavbar title="Upload Notes" />

        <div className="p-8 max-w-xl mx-auto">
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              Upload Notes
            </h2>

            <input
              type="text"
              placeholder="Title"
              className="input-field mb-3"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Subject"
              className="input-field mb-3"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <textarea
              placeholder="Description"
              className="input-field mb-3 resize-none"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button onClick={uploadNote} className="btn-primary">
              Upload Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
