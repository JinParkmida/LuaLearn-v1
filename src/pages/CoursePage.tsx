import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Check } from 'lucide-react';
import { courseData } from '../data/courseData';

const CoursePage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseData;
  const currentModule = course.modules.find(m => m.id === courseId) || course.modules[0];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {currentModule.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {currentModule.description}
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <BookOpen size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">{currentModule.lessons.length} Lessons</span>
            </div>
            <div className="flex items-center">
              <Clock size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-gray-700 dark:text-gray-300">Approx. {currentModule.estimatedHours} hours</span>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              What you'll learn in this module:
            </h3>
            <ul className="space-y-3">
              {currentModule.learningObjectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <Check size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Module Lessons
        </h2>
        <div className="space-y-4">
          {currentModule.lessons.map((lesson, index) => (
            <div key={lesson.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
              <Link to={`/lesson/${lesson.id}`} className="block p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        Lesson {index + 1}
                      </span>
                      {lesson.completed && (
                        <span className="ml-3 px-2 py-1 text-xs font-medium text-green-800 bg-green-100 dark:text-green-200 dark:bg-green-900 rounded-full">
                          Completed
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {lesson.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {lesson.description}
                    </p>
                  </div>
                  <div className="ml-4">
                    <ArrowRight size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-12">
        <Link
          to="/"
          className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          Back to Home
        </Link>
        
        <Link
          to={`/lesson/${currentModule.lessons[0].id}`}
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Start First Lesson
        </Link>
      </div>
    </div>
  );
};

export default CoursePage;