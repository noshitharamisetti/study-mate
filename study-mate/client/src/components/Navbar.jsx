import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm border-b border-gray-200">
      <h1 className="text-2xl font-bold text-purple-600">
        StudyMate
      </h1>

      <div className="space-x-6">
        <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">
          Home
        </Link>
        <Link to="/login" className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
