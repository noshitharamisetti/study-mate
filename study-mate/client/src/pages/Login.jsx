import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <form onSubmit={handleLogin} className="card p-8 w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="input-field mb-4"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="input-field mb-6"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn-primary w-full">
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-600 hover:text-purple-700 font-medium">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
