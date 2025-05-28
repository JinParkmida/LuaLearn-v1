// Enhanced Lua course data structure with modern, engaging format
export const courseData = {
  title: "Lua Programming",
  description: "Master Lua through interactive lessons and real-world projects",
  modules: [
    {
      id: "getting-started",
      title: "Getting Started",
      description: "Begin your journey into Lua programming",
      emoji: "🚀",
      estimatedHours: 2,
      xp: 100,
      progress: 0,
      learningObjectives: [
        "Understand what makes Lua special",
        "Write your first Lua program",
        "Master basic syntax and concepts"
      ],
      lessons: [
        {
          id: "welcome-to-lua",
          title: "Welcome to Lua",
          description: "Your first steps into the world of Lua programming",
          emoji: "👋",
          xp: 25,
          completed: false,
          content: `
            <div class="space-y-8">
              <div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-8 shadow-lg">
                <h1 class="text-3xl font-bold mb-4">Welcome to Lua! 👋</h1>
                <p class="text-xl opacity-90">Ready to start your coding journey? Let's dive into what makes Lua amazing!</p>
              </div>

              <div class="space-y-6">
                <section>
                  <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What is Lua? 🤔</h2>
                  <p class="text-lg text-gray-700 dark:text-gray-300">
                    Lua is like a Swiss Army knife in the programming world - small, powerful, and incredibly versatile! 
                    Created in 1993, it's now used everywhere from game development to smart devices.
                  </p>
                </section>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Why Lua is Awesome</h3>
                    <ul class="space-y-3">
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">🚀</span>
                        <span>Super fast and lightweight</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">🎮</span>
                        <span>Powers many popular games</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">📱</span>
                        <span>Great for mobile apps</span>
                      </li>
                    </ul>
                  </div>

                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">Who Uses Lua?</h3>
                    <ul class="space-y-3">
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">🎯</span>
                        <span>Roblox developers</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">⚔️</span>
                        <span>World of Warcraft modders</span>
                      </li>
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">🤖</span>
                        <span>IoT developers</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 border-l-4 border-blue-500">
                  <h3 class="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Fun Fact! 🌙</h3>
                  <p class="text-blue-700 dark:text-blue-200">
                    "Lua" means "moon" in Portuguese! The name was chosen because it was designed to illuminate and extend other programs, just like the moon reflects the sun's light.
                  </p>
                </div>
              </div>
            </div>
          `,
          challenge: {
            title: "Your First Lua Program",
            description: "Let's write a program that greets the world!",
            initialCode: "-- Write your first Lua program!\n-- Hint: Use print() to display text\n\n",
            solution: 'print("Hello, Lua!")',
            hints: [
              "The print() function displays text on the screen",
              "Text strings in Lua need to be wrapped in quotes",
              'Try: print("Hello, Lua!")'
            ],
            validation: {
              criteria: [
                "Uses print function",
                "Outputs a greeting"
              ]
            }
          },
          practice: {
            title: "Practice Time!",
            description: "Try these fun exercises to reinforce what you've learned",
            exercises: [
              {
                title: "Greeting Machine",
                description: "Create different greetings using print()",
                initialCode: "-- Create three different greetings\n\n",
                hints: ["Try using different messages", "You can print multiple lines"]
              }
            ]
          }
        },
        {
          id: "lua-basics",
          title: "Lua Basics",
          description: "Learn the fundamental building blocks of Lua",
          emoji: "🔨",
          xp: 35,
          completed: false,
          content: `
            <div class="space-y-8">
              <div class="bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-xl p-8 shadow-lg">
                <h1 class="text-3xl font-bold mb-4">Lua Basics 🔨</h1>
                <p class="text-xl opacity-90">Let's learn the building blocks of Lua programming!</p>
              </div>

              <div class="space-y-6">
                <section>
                  <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Variables and Data Types</h2>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                      <h3 class="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">Numbers</h3>
                      <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
age = 25
score = 99.5</pre>
                    </div>
                    <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                      <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Strings</h3>
                      <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
name = "Luna"
message = 'Hello!'</pre>
                    </div>
                  </div>
                </section>

                <div class="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-6 border-l-4 border-purple-500">
                  <h3 class="text-xl font-semibold mb-4 text-purple-800 dark:text-purple-300">Pro Tip! 💡</h3>
                  <p class="text-purple-700 dark:text-purple-200">
                    In Lua, variables are global by default. Use the 'local' keyword to create variables that are only accessible in their own scope!
                  </p>
                </div>
              </div>
            </div>
          `,
          challenge: {
            title: "Variable Master",
            description: "Create and use different types of variables",
            initialCode: "-- Create variables for:\n-- 1. Your age\n-- 2. Your name\n-- 3. Print them both!\n\n",
            solution: 'local age = 25\nlocal name = "Coder"\nprint("Name:", name, "Age:", age)',
            hints: [
              "Remember to use local for variables",
              "Strings need quotes, numbers don't",
              "print() can take multiple arguments"
            ]
          }
        }
      ]
    },
    {
      id: "control-flow",
      title: "Control Flow",
      description: "Master decision-making in your programs",
      emoji: "🔄",
      estimatedHours: 3,
      xp: 150,
      progress: 0,
      learningObjectives: [
        "Understand if statements",
        "Work with loops",
        "Handle conditions"
      ],
      lessons: [
        {
          id: "if-statements",
          title: "Making Decisions",
          description: "Learn how to make your programs smart with if statements",
          emoji: "🤔",
          xp: 40,
          completed: false,
          content: `
            <div class="space-y-8">
              <div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-8 shadow-lg">
                <h1 class="text-3xl font-bold mb-4">Making Decisions 🤔</h1>
                <p class="text-xl opacity-90">Time to make your programs smart!</p>
              </div>

              <div class="space-y-6">
                <section>
                  <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">If Statements</h2>
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
if score >= 90 then
    print("A grade!")
elseif score >= 80 then
    print("B grade!")
else
    print("Keep practicing!")
end</pre>
                  </div>
                </section>
              </div>
            </div>
          `,
          challenge: {
            title: "Grade Calculator",
            description: "Create a program that assigns letter grades based on scores",
            initialCode: "-- Create a grade calculator\n-- Use if statements to assign A, B, C, D, or F\n\n",
            hints: [
              "Start with the highest grade first",
              "Use >= for comparisons",
              "Don't forget the end keyword"
            ]
          }
        }
      ]
    }
  ]
};