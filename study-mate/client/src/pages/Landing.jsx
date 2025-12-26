import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">
          Learn Smarter with <span className="text-purple-600">StudyMate</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          A social learning platform where students share notes, solve doubts,
          and learn faster with AI-powered assistance.
        </p>

        <Link to="/login" className="btn-primary text-lg">
          Get Started
        </Link>
      </section>

      <section className="py-16 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <FeatureCard
          title="Share Notes"
          description="Upload and access study notes anytime, anywhere."
        />
        <FeatureCard
          title="Ask Doubts"
          description="Post academic doubts and get help from peers."
        />
        <FeatureCard
          title="AI Chatbot"
          description="Get instant explanations, summaries, and study plans."
        />
        <FeatureCard
          title="Smart Learning"
          description="Personalized learning strategies to save time."
        />
      </section>
    </>
  );
};

export default Landing;
