import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import NoteCard from "../components/NoteCard";
import { useNotes } from "../context/NotesContext";

const NotesLibrary = () => {
  const { notes } = useNotes();

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-50 min-h-screen ml-64">
        <DashboardNavbar title="Notes Library" />

        <div className="p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Notes Library
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesLibrary;
