import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = ({ title = "Dashboard" }) => {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center bg-white px-8 py-4 shadow-sm border-b border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardNavbar;
