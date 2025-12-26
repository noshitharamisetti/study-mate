import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-purple-700 to-purple-900 text-white p-6 shadow-xl fixed left-0 top-0 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-10 text-white">StudyMate</h2>

      <nav className="space-y-2">
        <Link to="/dashboard" className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
          location.pathname === '/dashboard' ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'
        }`}>
          Dashboard
        </Link>

        <Link to="/doubts" className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
          location.pathname === '/doubts' ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'
        }`}>
          Doubts
        </Link>

        <Link to="/notes" className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
          location.pathname === '/notes' ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'
        }`}>
          Notes Library
        </Link>

        <Link to="/upload-notes" className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
          location.pathname === '/upload-notes' ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'
        }`}>
          Upload Notes
        </Link>
        
        <Link to="/ai-chat" className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
          location.pathname === '/ai-chat' ? 'bg-white/20 font-semibold' : 'hover:bg-white/10'
        }`}>
          AI Chat
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
