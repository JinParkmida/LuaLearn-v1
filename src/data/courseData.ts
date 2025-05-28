// Enhanced Lua course data structure based on Lua Programming 4th Edition
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
              <section class="space-y-6">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">What is Lua?</h2>
                <p class="text-lg text-gray-700 dark:text-gray-300">
                  Lua is a powerful, efficient, lightweight, embeddable scripting language. Created in 1993 at PUC-Rio, it has become one of the leading scripting languages worldwide.
                </p>

                <div class="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6">
                  <h3 class="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Key Features</h3>
                  <ul class="space-y-3 list-disc pl-6 text-blue-900 dark:text-blue-200">
                    <li>Lightweight and fast: Typically under 500KB with all standard libraries</li>
                    <li>Simple yet powerful syntax with proper lexical scoping</li>
                    <li>Extensible through metatables and metamethods</li>
                    <li>Automatic memory management with incremental garbage collection</li>
                    <li>First-class functions and proper tail calls</li>
                  </ul>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Real-World Applications</h3>
                    <ul class="space-y-3">
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">🎮</span>
                        <div>
                          <strong class="block text-gray-900 dark:text-white">Game Development</strong>
                          <span class="text-gray-600 dark:text-gray-400">Used in World of Warcraft, Roblox, and more</span>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">🤖</span>
                        <div>
                          <strong class="block text-gray-900 dark:text-white">Embedded Systems</strong>
                          <span class="text-gray-600 dark:text-gray-400">IoT devices and hardware control</span>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">🌐</span>
                        <div>
                          <strong class="block text-gray-900 dark:text-white">Web Services</strong>
                          <span class="text-gray-600 dark:text-gray-400">OpenResty, Redis scripting</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Why Choose Lua?</h3>
                    <ul class="space-y-3">
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">📚</span>
                        <div>
                          <strong class="block text-gray-900 dark:text-white">Easy to Learn</strong>
                          <span class="text-gray-600 dark:text-gray-400">Clean syntax and minimal concepts</span>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">⚡️</span>
                        <div>
                          <strong class="block text-gray-900 dark:text-white">High Performance</strong>
                          <span class="text-gray-600 dark:text-gray-400">One of the fastest interpreted languages</span>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">🔄</span>
                        <div>
                          <strong class="block text-gray-900 dark:text-white">Versatile</strong>
                          <span class="text-gray-600 dark:text-gray-400">Embeddable in any C/C++ application</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mt-8">
                  <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Your First Lua Program</h3>
                  <p class="text-gray-700 dark:text-gray-300 mb-4">
                    Let's write our first Lua program! We'll use the print() function to display text on the screen.
                  </p>
                  <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
print("Hello, World!")
print("Welcome to Lua Programming!")

-- This is a comment
local message = "Lua is awesome!"
print(message)</pre>
                </div>
              </section>
            </div>
          `,
          challenge: {
            title: "Your First Lua Program",
            description: "Write a program that prints a personalized greeting",
            initialCode: `-- Create a greeting program that:
-- 1. Creates a variable with your name
-- 2. Prints "Hello, [your name]!"
-- 3. Prints a second line with "Welcome to Lua Programming!"

`,
            solution: `local name = "Lua Learner"
print("Hello, " .. name .. "!")
print("Welcome to Lua Programming!")`,
            hints: [
              "Use local to declare your variable",
              "Use .. to concatenate strings in Lua",
              "Don't forget the quotes around string values"
            ]
          }
        },
        {
          id: "environment-setup",
          title: "Setting Up Your Environment",
          description: "Configure your development environment for Lua programming",
          emoji: "⚙️",
          xp: 25,
          completed: false,
          content: `
            <div class="space-y-8">
              <section class="space-y-6">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Development Environment Setup</h2>
                
                <div class="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6">
                  <h3 class="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300">What You'll Need</h3>
                  <ul class="space-y-3 list-disc pl-6 text-blue-900 dark:text-blue-200">
                    <li>Lua interpreter (version 5.4 recommended)</li>
                    <li>A text editor or IDE</li>
                    <li>Terminal or command prompt</li>
                  </ul>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Windows</h3>
                    <ol class="space-y-2 list-decimal pl-4">
                      <li>Download LuaForWindows</li>
                      <li>Run the installer</li>
                      <li>Add Lua to PATH</li>
                    </ol>
                  </div>

                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">macOS</h3>
                    <ol class="space-y-2 list-decimal pl-4">
                      <li>Install Homebrew</li>
                      <li>Run: brew install lua</li>
                      <li>Verify: lua -v</li>
                    </ol>
                  </div>

                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Linux</h3>
                    <ol class="space-y-2 list-decimal pl-4">
                      <li>apt-get install lua5.4</li>
                      <li>Or: yum install lua</li>
                      <li>Verify: lua -v</li>
                    </ol>
                  </div>
                </div>

                <div class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
                  <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Recommended Editors</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 class="font-semibold text-gray-900 dark:text-white">Visual Studio Code</h4>
                      <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        <li>Install Lua extension</li>
                        <li>Great debugging support</li>
                        <li>Integrated terminal</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 dark:text-white">ZeroBrane Studio</h4>
                      <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        <li>Lua-specific IDE</li>
                        <li>Built-in debugger</li>
                        <li>Code completion</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          `,
          challenge: {
            title: "Verify Your Setup",
            description: "Create and run a simple Lua script to verify your installation",
            initialCode: `-- Write code to:
-- 1. Print the Lua version
-- 2. Perform a simple calculation
-- 3. Print the result

`,
            solution: `print(_VERSION)
local result = 10 + 20
print("Result:", result)`,
            hints: [
              "_VERSION contains the Lua version string",
              "Try a simple arithmetic operation",
              "Use print() to show the results"
            ]
          }
        }
      ]
    },
    {
      id: "types-and-values",
      title: "Types and Values",
      description: "Learn about Lua's basic types and values",
      emoji: "🔤",
      estimatedHours: 3,
      xp: 125,
      progress: 0,
      learningObjectives: [
        "Understand Lua's eight basic types",
        "Learn about type coercion",
        "Work with numbers and strings",
        "Understand nil and boolean values"
      ],
      lessons: [
        {
          id: "basic-types",
          title: "Basic Types in Lua",
          description: "Explore Lua's fundamental data types",
          emoji: "📝",
          xp: 30,
          completed: false,
          content: `
            <div class="space-y-8">
              <section class="space-y-6">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Lua's Basic Types</h2>
                
                <p class="text-lg text-gray-700 dark:text-gray-300">
                  Lua has eight basic types that form the foundation of all data in the language.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">nil</h3>
                    <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
local x = nil  -- represents no value
print(x)  -- prints: nil</pre>
                    <p class="mt-3 text-gray-600 dark:text-gray-400">
                      The type nil has only one value: nil. It represents the absence of a value.
                    </p>
                  </div>

                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">boolean</h3>
                    <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
local isValid = true
local isDone = false
print(isValid and isDone)  -- prints: false</pre>
                    <p class="mt-3 text-gray-600 dark:text-gray-400">
                      Boolean type has two values: true and false. Used for logical operations.
                    </p>
                  </div>

                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">number</h3>
                    <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
local integer = 42
local float = 3.14
local scientific = 2.3e5
print(integer + float)  -- prints: 45.14</pre>
                    <p class="mt-3 text-gray-600 dark:text-gray-400">
                      Represents both integer and floating-point numbers.
                    </p>
                  </div>

                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">string</h3>
                    <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
local single = 'Hello'
local double = "World"
local multi = [[
  Multiple
  lines
]]
print(single .. ' ' .. double)  -- prints: Hello World</pre>
                    <p class="mt-3 text-gray-600 dark:text-gray-400">
                      Immutable sequences of characters. Can use single quotes, double quotes, or long brackets.
                    </p>
                  </div>
                </div>

                <div class="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 mt-8">
                  <h3 class="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Type Checking</h3>
                  <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
local value = "test"
print(type(value))  -- prints: string

local num = 42
print(type(num))   -- prints: number

local bool = false
print(type(bool))  -- prints: boolean</pre>
                  <p class="mt-4 text-blue-900 dark:text-blue-200">
                    Use the type() function to check the type of any value in Lua.
                  </p>
                </div>
              </section>
            </div>
          `,
          challenge: {
            title: "Type Explorer",
            description: "Create variables of different types and explore their properties",
            initialCode: `-- Create variables of different types and print their types
-- 1. Create a number
-- 2. Create a string
-- 3. Create a boolean
-- 4. Print the type of each variable

`,
            solution: `local num = 42
local str = "Hello, Lua!"
local bool = true

print("num is a", type(num))
print("str is a", type(str))
print("bool is a", type(bool))`,
            hints: [
              "Use the type() function to check variable types",
              "Try different kinds of numbers (integers, decimals)",
              "Strings can use single or double quotes"
            ]
          }
        }
      ]
    }
  ]
};