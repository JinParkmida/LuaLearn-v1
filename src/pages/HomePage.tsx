import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, BookOpen, Terminal, Trophy } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Learn Lua Programming
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Master the fundamentals of Lua through interactive lessons and hands-on projects
          </p>
          <Link
            to="/courses"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
          >
            Start Learning
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
            <Code2 className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Interactive Coding</h3>
            <p className="text-gray-400">
              Write and execute Lua code directly in your browser with real-time feedback
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
            <BookOpen className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Structured Learning</h3>
            <p className="text-gray-400">
              Follow a carefully designed curriculum that builds your skills step by step
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
            <Terminal className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Practical Projects</h3>
            <p className="text-gray-400">
              Apply your knowledge by building real-world projects and applications
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition duration-300">
            <Trophy className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
            <p className="text-gray-400">
              Earn achievements and track your learning progress as you advance
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-gray-200 mb-6">
            Join thousands of learners mastering Lua programming today
          </p>
          <Link
            to="/courses"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition duration-300"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;