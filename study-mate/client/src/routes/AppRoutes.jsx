import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import DoubtsFeed from "../pages/DoubtsFeed";
import NotesLibrary from "../pages/NotesLibrary";
import Notes from "../pages/Notes";
import PrivateRoute from "./PrivateRoute";
import AIChat from "../pages/AIChat";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />

    <Route
      path="/dashboard"
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    />

    <Route
      path="/doubts"
      element={
        <PrivateRoute>
          <DoubtsFeed />
        </PrivateRoute>
      }
    />

    <Route
      path="/notes"
      element={
        <PrivateRoute>
          <NotesLibrary />
        </PrivateRoute>
      }
    />

    <Route
      path="/upload-notes"
      element={
        <PrivateRoute>
          <Notes />
        </PrivateRoute>
      }
    />
    <Route
        path="/ai-chat"
        element={
            <PrivateRoute>
            <AIChat />
            </PrivateRoute>
        }
        />

  </Routes>
);

export default AppRoutes;
