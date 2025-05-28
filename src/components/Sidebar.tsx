import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home, BookOpen, BookText, Award, Settings, X } from 'lucide-react';
import { courseData } from '../data/courseData';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center">
            <BookOpen size={24} className="text-blue-600 dark:text-blue-400" />
            <span className="ml-2 font-bold text-gray-800 dark:text-white">LuaLearn</span>
          </Link>
          <button 
            onClick={closeSidebar}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white focus:outline-none lg:hidden"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <Link 
                to="/"
                className={`flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${
                  currentPath === '/' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' 
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Home size={18} className="mr-3" />
                <span>Home</span>
              </Link>
            </li>
            
            <li className="mt-6">
              <h3 className="px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Course Content
              </h3>
              <div className="mt-2 space-y-1">
                {courseData.modules.map((module, index) => (
                  <div key={module.id} className="mb-2">
                    <div className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200">
                      <ChevronRight size={16} className="mr-2" />
                      <span className="font-medium">{module.title}</span>
                    </div>
                    <ul className="ml-6 space-y-1">
                      {module.lessons.map((lesson) => (
                        <li key={lesson.id}>
                          <Link
                            to={`/lesson/${lesson.id}`}
                            className={`flex items-center px-4 py-2 text-sm rounded-md transition-colors duration-200 ${
                              currentPath === `/lesson/${lesson.id}`
                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                            }`}
                          >
                            {lesson.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
            
            <li className="mt-6">
              <h3 className="px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Your Progress
              </h3>
              <div className="mt-2 px-4 py-2">
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '35%' }}></div>
                </div>
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-300">
                  35% Complete
                </p>
              </div>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;