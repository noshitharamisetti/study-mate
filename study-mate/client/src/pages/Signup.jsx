import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <form onSubmit={handleSignup} className="card p-8 w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">
          Create Account
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
          Sign Up
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 hover:text-purple-700 font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
