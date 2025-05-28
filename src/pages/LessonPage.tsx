import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, BookOpen, Code, HelpCircle } from 'lucide-react';
import LuaEditor from '../components/LuaEditor';
import { courseData } from '../data/courseData';

const LessonPage = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  
  // Find current lesson and its module
  const currentModule = courseData.modules.find(module => 
    module.lessons.some(lesson => lesson.id === lessonId)
  );
  
  const currentLesson = currentModule?.lessons.find(lesson => lesson.id === lessonId);

  if (!currentLesson || !currentModule) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Lesson Not Found</h1>
        <Link 
          to="/"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  const lessonIndex = currentModule.lessons.findIndex(lesson => lesson.id === lessonId);
  const nextLesson = currentModule.lessons[lessonIndex + 1];
  const prevLesson = currentModule.lessons[lessonIndex - 1];

  const [code, setCode] = useState(currentLesson.challenge?.initialCode || '');
  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      // In a real implementation, this would use Fengari to run Lua code
      setOutput('Code execution simulation:\n' + code);
    } catch (error) {
      setOutput('Error: ' + error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Navigation breadcrumb */}
      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span>{currentModule.title}</span>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span>{currentLesson.title}</span>
      </div>

      {/* Lesson header */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{currentLesson.emoji}</span>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {currentLesson.title}
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {currentLesson.description}
        </p>
      </div>

      {/* Lesson content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <div 
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: currentLesson.content }}
          />
        </div>
      </div>

      {/* Interactive coding section */}
      {currentLesson.challenge && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700 p-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {currentLesson.challenge.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {currentLesson.challenge.description}
            </p>
          </div>
          
          <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden">
              <LuaEditor code={code} setCode={setCode} />
              <div className="p-2 bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
                <button
                  onClick={() => setCode(currentLesson.challenge?.initialCode || '')}
                  className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Reset
                </button>
                <button
                  onClick={runCode}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Run Code
                </button>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-white">
              <div className="text-gray-400 mb-2">Output:</div>
              <pre className="whitespace-pre-wrap">{output || 'Run your code to see the output'}</pre>
            </div>
          </div>

          {currentLesson.challenge.hints && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Hints:</h3>
              <div className="space-y-2">
                {currentLesson.challenge.hints.map((hint, index) => (
                  <details key={index} className="text-gray-600 dark:text-gray-400">
                    <summary className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                      Hint #{index + 1}
                    </summary>
                    <p className="mt-2 pl-4">{hint}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
        {prevLesson ? (
          <Link
            to={`/lesson/${prevLesson.id}`}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous Lesson</span>
          </Link>
        ) : (
          <div />
        )}
        
        {nextLesson ? (
          <Link
            to={`/lesson/${nextLesson.id}`}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <span>Next Lesson</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        ) : (
          <Link
            to={`/module/${currentModule.id}/complete`}
            className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-500"
          >
            <span>Complete Module</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default LessonPage;