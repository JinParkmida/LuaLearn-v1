import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, BookOpen, PenSquare, Code, HelpCircle, ThumbsUp, ThumbsDown } from 'lucide-react';
import LuaEditor from '../components/LuaEditor';
import { courseData } from '../data/courseData';

const LessonPage: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  
  // Find current lesson and its module
  const currentLesson = courseData.modules
    .flatMap(m => m.lessons)
    .find(l => l.id === lessonId);
  
  const currentModuleIndex = courseData.modules.findIndex(
    m => m.lessons.some(l => l.id === lessonId)
  );
  
  const currentModule = courseData.modules[currentModuleIndex];
  
  if (!currentLesson || !currentModule) {
    return <div>Lesson not found</div>;
  }
  
  // Find lesson index within module
  const lessonIndex = currentModule.lessons.findIndex(l => l.id === lessonId);
  
  // Navigation links
  const previousLesson = lessonIndex > 0 
    ? currentModule.lessons[lessonIndex - 1] 
    : currentModuleIndex > 0 
      ? courseData.modules[currentModuleIndex - 1].lessons.slice(-1)[0]
      : null;
      
  const nextLesson = lessonIndex < currentModule.lessons.length - 1
    ? currentModule.lessons[lessonIndex + 1]
    : currentModuleIndex < courseData.modules.length - 1
      ? courseData.modules[currentModuleIndex + 1].lessons[0]
      : null;
  
  const [activeTab, setActiveTab] = useState<'learn' | 'practice' | 'challenge'>('learn');
  const [code, setCode] = useState<string>(currentLesson.initialCode || '-- Write your Lua code here\n\nprint("Hello World!")');
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  
  const handleRunCode = () => {
    setIsRunning(true);
    // In a real app, this would use the Fengari Lua interpreter
    setOutput('Hello World!\n\nCode executed successfully!');
    setTimeout(() => setIsRunning(false), 500);
  };
  
  return (
    <div className="max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        <ChevronRight size={16} className="mx-2" />
        <Link to={`/course/${currentModule.id}`} className="hover:text-blue-600 dark:hover:text-blue-400">{currentModule.title}</Link>
        <ChevronRight size={16} className="mx-2" />
        <span className="text-gray-700 dark:text-gray-300">{currentLesson.title}</span>
      </div>
      
      {/* Lesson header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {currentLesson.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {currentLesson.description}
        </p>
      </div>
      
      {/* Tabs */}
      <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('learn')}
            className={`py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm ${
              activeTab === 'learn'
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
            }`}
          >
            <BookOpen size={18} className="mr-2" />
            Learn
          </button>
          
          <button
            onClick={() => setActiveTab('practice')}
            className={`py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm ${
              activeTab === 'practice'
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
            }`}
          >
            <PenSquare size={18} className="mr-2" />
            Practice
          </button>
          
          <button
            onClick={() => setActiveTab('challenge')}
            className={`py-4 px-1 inline-flex items-center border-b-2 font-medium text-sm ${
              activeTab === 'challenge'
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600'
            }`}
          >
            <Code size={18} className="mr-2" />
            Challenge
          </button>
        </nav>
      </div>
      
      {/* Tab content */}
      <div className="mb-8">
        {activeTab === 'learn' && (
          <div className="prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: currentLesson.content || '<p>Lesson content goes here.</p>' }} />
            
            {/* Key concepts */}
            <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 dark:border-blue-400 p-4 my-6 rounded-r-md">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Key Concepts</h3>
              <ul className="space-y-1 ml-5 list-disc text-blue-700 dark:text-blue-200">
                {currentLesson.keyConcepts?.map((concept, index) => (
                  <li key={index}>{concept}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {activeTab === 'practice' && (
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-6">
              <div className="border-b border-gray-200 dark:border-gray-700 p-4">
                <h3 className="font-medium text-gray-900 dark:text-white">Try it yourself</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {currentLesson.practiceInstructions || "Practice the concepts you've learned by writing some code."}
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-md overflow-hidden">
                    <LuaEditor code={code} setCode={setCode} />
                    <div className="p-2 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-end">
                      <button
                        onClick={handleRunCode}
                        disabled={isRunning}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                      >
                        {isRunning ? 'Running...' : (
                          <>
                            <Play size={16} className="mr-2" />
                            Run Code
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 text-gray-100 rounded-md overflow-hidden p-4 font-mono text-sm h-60 overflow-y-auto">
                    <div className="mb-2 text-gray-400 border-b border-gray-700 pb-1">Output:</div>
                    {output ? (
                      <pre className="whitespace-pre-wrap">{output}</pre>
                    ) : (
                      <div className="text-gray-500 italic">Run your code to see output here</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
              <div className="border-b border-gray-200 dark:border-gray-700 p-4">
                <h3 className="font-medium text-gray-900 dark:text-white">Hints</h3>
              </div>
              <div className="p-4">
                <div className="space-y-3">
                  {currentLesson.hints?.map((hint, index) => (
                    <details key={index} className="group">
                      <summary className="flex items-center cursor-pointer text-blue-600 dark:text-blue-400 font-medium">
                        <HelpCircle size={16} className="mr-2" />
                        Hint {index + 1}
                      </summary>
                      <p className="mt-2 text-gray-700 dark:text-gray-300 pl-6">
                        {hint}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'challenge' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
            <div className="border-b border-gray-200 dark:border-gray-700 p-4">
              <h3 className="font-medium text-gray-900 dark:text-white">Challenge: {currentLesson.challengeTitle || "Apply Your Knowledge"}</h3>
            </div>
            <div className="p-4">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {currentLesson.challengeDescription || "Test your understanding by solving this challenge."}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-md overflow-hidden">
                  <LuaEditor 
                    code={currentLesson.challengeInitialCode || code} 
                    setCode={setCode} 
                  />
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-between">
                    <button
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
                    >
                      Reset
                    </button>
                    <button
                      onClick={handleRunCode}
                      disabled={isRunning}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                    >
                      {isRunning ? 'Running...' : (
                        <>
                          <Play size={16} className="mr-2" />
                          Test Solution
                        </>
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="bg-gray-900 text-gray-100 rounded-md overflow-hidden p-4 font-mono text-sm h-60 overflow-y-auto">
                  <div className="mb-2 text-gray-400 border-b border-gray-700 pb-1">Output:</div>
                  {output ? (
                    <pre className="whitespace-pre-wrap">{output}</pre>
                  ) : (
                    <div className="text-gray-500 italic">Run your code to see output here</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Feedback */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="p-4">
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">Was this lesson helpful?</h3>
          <div className="flex space-x-2">
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200">
              <ThumbsUp size={16} className="mr-2" />
              Yes
            </button>
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200">
              <ThumbsDown size={16} className="mr-2" />
              No
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <div className="flex justify-between mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
        {previousLesson ? (
          <Link
            to={`/lesson/${previousLesson.id}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
          >
            <ChevronLeft size={16} className="mr-2" />
            Previous Lesson
          </Link>
        ) : (
          <div></div>
        )}
        
        {nextLesson ? (
          <Link
            to={`/lesson/${nextLesson.id}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Next Lesson
            <ChevronRight size={16} className="ml-2" />
          </Link>
        ) : (
          <button
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
          >
            Complete Course
            <ChevronRight size={16} className="ml-2" />
          </button>
        )}
      </div>
    </div>
  );
};

export default LessonPage;