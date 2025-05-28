import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Code, Award, Users, Check } from 'lucide-react';
import { courseData } from '../data/courseData';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Learn Lua Programming <span className="text-blue-600 dark:text-blue-400">From Zero to Hero</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            A comprehensive, beginner-friendly platform to master Lua programming through interactive lessons, exercises, and projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/course/introduction"
              className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 w-full sm:w-auto"
            >
              Start Learning for Free
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 text-lg font-medium text-blue-600 dark:text-blue-400 bg-transparent border border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 w-full sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Learn With Us?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We've designed our platform specifically for beginners, with clear explanations and interactive practice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Beginner Friendly</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Designed for absolute beginners with no prior programming experience required.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Interactive Coding</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Practice Lua directly in your browser with our interactive code editor and real-time feedback.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Project-Based</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn by building real projects and games to reinforce your understanding.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Community Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join our community of learners and get help from experienced developers.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <Check size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Multiple Learning Styles</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Content presented in various formats to accommodate different learning preferences.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Structured Curriculum</h3>
              <p className="text-gray-600 dark:text-gray-300">
                A clear learning path from basic concepts to advanced techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules Preview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What You'll Learn</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our comprehensive curriculum takes you from the basics to advanced Lua programming concepts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseData.modules.slice(0, 4).map((module) => (
              <div key={module.id} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{module.title}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {module.lessons.slice(0, 3).map((lesson) => (
                      <li key={lesson.id} className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{lesson.title}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={`/course/${module.id}`}
                    className="mt-6 inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    Explore Module <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/course"
              className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              View Full Curriculum
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials (Placeholder) */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from students who have transformed their careers by learning Lua with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Student Name</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Game Developer</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "This platform made learning Lua incredibly accessible. I went from knowing nothing about programming to developing my own game mechanics in just a few weeks!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 rounded-2xl text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Lua Journey?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of students learning Lua programming from scratch. No prior experience needed!
          </p>
          <Link
            to="/course/introduction"
            className="px-8 py-4 text-lg font-medium bg-white text-blue-600 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-colors duration-200"
          >
            Start Learning Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;