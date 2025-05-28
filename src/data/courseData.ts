// Enhanced Lua course data structure with comprehensive curriculum
export const courseData = {
  title: "Lua Programming",
  description: "Master Lua through interactive lessons and real-world projects",
  modules: [
    {
      id: "getting-started",
      title: "Getting Started with Lua",
      description: "Begin your journey into Lua programming",
      emoji: "🚀",
      estimatedHours: 2,
      xp: 100,
      progress: 0,
      learningObjectives: [
        "Understand Lua's design philosophy and features",
        "Set up your development environment",
        "Write and run your first Lua program",
        "Learn about variables and basic data types"
      ],
      lessons: [
        {
          id: "introduction",
          title: "Introduction to Lua",
          description: "Discover what makes Lua special and why it's widely used",
          emoji: "👋",
          xp: 25,
          completed: false,
          content: `
            <div class="space-y-8">
              <div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-8 shadow-lg">
                <h1 class="text-3xl font-bold mb-4">Welcome to Lua! 👋</h1>
                <p class="text-xl opacity-90">Discover a powerful, efficient, and elegant programming language!</p>
              </div>

              <section class="space-y-6">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">What is Lua?</h2>
                <p class="text-lg text-gray-700 dark:text-gray-300">
                  Lua is a powerful, efficient, lightweight, embeddable scripting language. Created in 1993, it's designed to be simple yet flexible, making it perfect for both beginners and experts.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Key Features</h3>
                    <ul class="space-y-3">
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">⚡️</span>
                        <span>Fast execution and small footprint</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">🔧</span>
                        <span>Simple yet powerful syntax</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">🔄</span>
                        <span>Automatic memory management</span>
                      </li>
                    </ul>
                  </div>

                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Applications</h3>
                    <ul class="space-y-3">
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">🎮</span>
                        <span>Game Development</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">🤖</span>
                        <span>Embedded Systems</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">🌐</span>
                        <span>Web Applications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          `,
          challenge: {
            title: "Your First Lua Program",
            description: "Write a simple program to display text",
            initialCode: "-- Write your first Lua program\n-- Use print() to display a message\n\n",
            solution: 'print("Hello from Lua!")',
            hints: [
              "The print() function outputs text to the screen",
              "Text strings must be enclosed in quotes",
              'Try: print("Your message here")'
            ]
          }
        }
      ]
    },
    {
      id: "language-fundamentals",
      title: "Language Fundamentals",
      description: "Master the core concepts of Lua programming",
      emoji: "📚",
      estimatedHours: 4,
      xp: 150,
      progress: 0,
      learningObjectives: [
        "Understand Lua's eight basic types",
        "Work with variables and scope",
        "Master operators and expressions",
        "Learn about control structures"
      ],
      lessons: [
        {
          id: "types-and-values",
          title: "Types and Values",
          description: "Learn about Lua's basic types and how to work with them",
          emoji: "🔤",
          xp: 35,
          completed: false,
          content: `
            <div class="space-y-8">
              <section class="space-y-6">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Basic Types in Lua</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">nil</h3>
                    <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
local x = nil  -- represents absence of value</pre>
                  </div>
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">boolean</h3>
                    <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
local isValid = true
local isDone = false</pre>
                  </div>
                </div>
              </section>
            </div>
          `,
          challenge: {
            title: "Type Explorer",
            description: "Practice working with different data types",
            initialCode: "-- Create variables of different types\n-- and print their types\n\n",
            solution: `local num = 42
local text = "Hello"
local flag = true
print(type(num), type(text), type(flag))`,
            hints: [
              "Use the type() function to check types",
              "Try different kinds of values",
              "Remember to use local for variables"
            ]
          }
        }
      ]
    },
    {
      id: "functions",
      title: "Functions and Scope",
      description: "Learn how to create and use functions effectively",
      emoji: "⚙️",
      estimatedHours: 3,
      xp: 125,
      progress: 0,
      learningObjectives: [
        "Understand function declaration and calls",
        "Work with parameters and return values",
        "Master local and global scope",
        "Learn about closures and upvalues"
      ],
      lessons: [
        {
          id: "function-basics",
          title: "Function Basics",
          description: "Learn how to create and use functions",
          emoji: "🔧",
          xp: 30,
          completed: false,
          content: `
            <div class="space-y-8">
              <section class="space-y-6">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Creating Functions</h2>
                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
function greet(name)
    return "Hello, " .. name .. "!"
end

local message = greet("Lua Learner")
print(message)</pre>
                </div>
              </section>
            </div>
          `,
          challenge: {
            title: "Function Creator",
            description: "Create a function that calculates the average of two numbers",
            initialCode: "-- Create a function called average\n-- that takes two parameters\n\n",
            solution: `function average(a, b)
    return (a + b) / 2
end

print(average(10, 20))`,
            hints: [
              "Use the function keyword",
              "Parameters go in parentheses",
              "Don't forget to return the result"
            ]
          }
        }
      ]
    }
  ]
};