// Enhanced Lua course data structure based on Lua Programming 4th Edition and Reference Manual
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
                  Lua is a powerful, efficient, lightweight, embeddable scripting language. Created in 1993 at PUC-Rio, it has become one of the leading scripting languages worldwide, particularly in game development and embedded systems.
                </p>

                <div class="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6">
                  <h3 class="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Key Features</h3>
                  <ul class="space-y-3 list-disc pl-6 text-blue-900 dark:text-blue-200">
                    <li>Lightweight and fast: The complete Lua interpreter is typically under 500KB</li>
                    <li>Simple yet powerful syntax with proper lexical scoping</li>
                    <li>Dynamic typing with automatic memory management</li>
                    <li>Incremental garbage collection</li>
                    <li>First-class functions and proper tail calls</li>
                    <li>Metatables for operator overloading and object-oriented programming</li>
                    <li>Built-in coroutines for cooperative multitasking</li>
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
                          <span class="text-gray-600 dark:text-gray-400">World of Warcraft, Roblox, Adobe Lightroom</span>
                        </div>
                      </li>
                      <li class="flex items-start">
                        <span class="text-2xl mr-3">🤖</span>
                        <div>
                          <strong class="block text-gray-900 dark:text-white">Embedded Systems</strong>
                          <span class="text-gray-600 dark:text-gray-400">IoT devices, Networking equipment</span>
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
                          <span class="text-gray-600 dark:text-gray-400">Clean syntax with minimal concepts</span>
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

                <div class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
                  <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Your First Lua Program</h3>
                  <p class="text-gray-700 dark:text-gray-300 mb-4">
                    Let's write our first Lua program! We'll use the print() function to display text and explore basic syntax.
                  </p>
                  <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
-- This is a comment in Lua
print("Hello, World!")  -- Basic output

-- Variables and basic operations
local message = "Welcome to Lua!"
print(message)

-- Simple arithmetic
local x = 10
local y = 20
print("Sum:", x + y)  -- prints: Sum: 30</pre>
                </div>
              </section>
            </div>
          `,
          challenge: {
            title: "Your First Lua Program",
            description: "Write a program that demonstrates basic Lua syntax",
            initialCode: `-- Create a program that:
-- 1. Declares a variable with your name
-- 2. Creates a greeting message using string concatenation
-- 3. Performs a simple calculation
-- 4. Prints both the greeting and calculation result

-- Write your code below:

`,
            solution: `-- Solution
local name = "Lua Learner"
local greeting = "Hello, " .. name .. "!"
local result = 25 * 2

print(greeting)
print("Calculation result:", result)`,
            hints: [
              "Use local to declare variables",
              "String concatenation in Lua uses two dots (..)",
              "You can combine strings and numbers in print()",
              "Don't forget to add spaces in your string concatenation"
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
                  <h3 class="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Essential Components</h3>
                  <ul class="space-y-3 list-disc pl-6 text-blue-900 dark:text-blue-200">
                    <li>Lua interpreter (version 5.4 recommended)</li>
                    <li>Text editor or IDE with Lua support</li>
                    <li>Terminal or command prompt access</li>
                    <li>Basic understanding of command-line operations</li>
                  </ul>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Windows Installation</h3>
                    <ol class="space-y-2 list-decimal pl-4">
                      <li>Download LuaForWindows installer</li>
                      <li>Run the installer as administrator</li>
                      <li>Add Lua to system PATH</li>
                      <li>Verify installation: lua -v</li>
                    </ol>
                  </div>

                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">macOS Installation</h3>
                    <ol class="space-y-2 list-decimal pl-4">
                      <li>Install Homebrew if not present</li>
                      <li>Run: brew install lua</li>
                      <li>Verify: lua -v</li>
                      <li>Optional: brew install luarocks</li>
                    </ol>
                  </div>

                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Linux Installation</h3>
                    <ol class="space-y-2 list-decimal pl-4">
                      <li>Ubuntu/Debian: apt-get install lua5.4</li>
                      <li>Fedora: dnf install lua</li>
                      <li>Verify: lua -v</li>
                      <li>Install luarocks package manager</li>
                    </ol>
                  </div>
                </div>

                <div class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
                  <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Development Tools</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 class="font-semibold text-gray-900 dark:text-white">Visual Studio Code Setup</h4>
                      <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        <li>Install "Lua" extension by sumneko</li>
                        <li>Install "Lua Debug" for debugging</li>
                        <li>Configure workspace settings</li>
                        <li>Set up launch.json for debugging</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 dark:text-white">ZeroBrane Studio</h4>
                      <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        <li>Download and install ZeroBrane Studio</li>
                        <li>Configure Lua interpreter path</li>
                        <li>Set up auto-completion</li>
                        <li>Configure debugging options</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-6">
                  <h3 class="text-xl font-semibold mb-4 text-yellow-800 dark:text-yellow-300">Verifying Installation</h3>
                  <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
-- Save this as test.lua
print(_VERSION)
print("Hello from Lua!")

-- Run from terminal:
-- lua test.lua</pre>
                  <p class="mt-4 text-yellow-900 dark:text-yellow-200">
                    If you see the Lua version and greeting message, your installation is working correctly!
                  </p>
                </div>
              </section>
            </div>
          `,
          challenge: {
            title: "Environment Verification",
            description: "Create a test script to verify your Lua installation",
            initialCode: `-- Create a script that:
-- 1. Prints the Lua version
-- 2. Shows the operating system info
-- 3. Performs a simple calculation
-- 4. Demonstrates string manipulation

-- Write your code below:

`,
            solution: `-- Environment test script
print("Lua Version:", _VERSION)
print("OS:", os.getenv("OS") or "Unix-like")

-- Basic calculation
local x = 123.456
print("Rounded number:", math.floor(x))

-- String manipulation
local text = "Hello, Lua!"
print("Uppercase:", string.upper(text))
print("Length:", #text)`,
            hints: [
              "_VERSION contains the Lua version string",
              "os.getenv() can access environment variables",
              "math.floor() rounds down to the nearest integer",
              "string.upper() converts text to uppercase"
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
        "Learn about type coercion and conversion",
        "Master string manipulation and number formatting",
        "Work with nil and boolean values"
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
                  Lua is a dynamically typed language with eight basic types that form the foundation of all data manipulation.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">nil</h3>
                    <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
local x = nil  -- represents absence of value
print(x)       -- prints: nil

-- checking for nil
if x == nil then
  print("x is nil")
end</pre>
                    <p class="mt-3 text-gray-600 dark:text-gray-400">
                      The type nil has only one value: nil. It represents the absence of a useful value and is different from zero or an empty string.
                    </p>
                  </div>

                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">boolean</h3>
                    <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
local isValid = true
local isDone = false

-- logical operations
print(isValid and isDone)  -- false
print(isValid or isDone)   -- true
print(not isValid)         -- false</pre>
                    <p class="mt-3 text-gray-600 dark:text-gray-400">
                      Boolean type has two values: true and false. Note that nil and false are falsy; all other values are truthy.
                    </p>
                  </div>

                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">number</h3>
                    <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
-- integers
local age = 25
local count = -10

-- floating-point
local pi = 3.14159
local temp = -0.5

-- scientific notation
local bigNum = 2.3e5   -- 230000
local smallNum = 1e-10 -- 0.0000000001</pre>
                    <p class="mt-3 text-gray-600 dark:text-gray-400">
                      Numbers in Lua can represent both integers and floating-point values using double precision by default.
                    </p>
                  </div>

                  <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <h3 class="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">string</h3>
                    <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
-- string literals
local single = 'Single quotes'
local double = "Double quotes"

-- multi-line strings
local multi = [[
  Multiple
  lines of
  text
]]

-- string operations
local name = "Lua"
local greeting = "Hello, " .. name
print(#greeting)  -- length: 9</pre>
                    <p class="mt-3 text-gray-600 dark:text-gray-400">
                      Strings are immutable sequences of characters. Lua provides multiple ways to create strings and powerful string manipulation functions.
                    </p>
                  </div>
                </div>

                <div class="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6 mt-8">
                  <h3 class="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-300">Type Checking and Conversion</h3>
                  <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
-- type checking
local value = "test"
print(type(value))  -- "string"

-- type conversion
local numStr = "123"
local num = tonumber(numStr)  -- 123
print(type(num))    -- "number"

local str = tostring(123)     -- "123"
print(type(str))    -- "string"</pre>
                  <p class="mt-4 text-blue-900 dark:text-blue-200">
                    Use type() to check types and conversion functions like tonumber() and tostring() to convert between types.
                  </p>
                </div>
              </section>
            </div>
          `,
          challenge: {
            title: "Type Explorer",
            description: "Create variables of different types and explore their properties",
            initialCode: `-- Create a program that demonstrates:
-- 1. All basic Lua types
-- 2. Type checking
-- 3. Type conversion
-- 4. String operations

-- Write your code below:

`,
            solution: `-- Basic types demonstration
local str = "Hello, Lua!"
local num = 42
local float = 3.14
local bool = true
local empty = nil

-- Print types
print("String type:", type(str))
print("Number type:", type(num))
print("Boolean type:", type(bool))
print("Nil type:", type(empty))

-- Type conversion
local numStr = "123.45"
local converted = tonumber(numStr)
print("Converted number:", converted)
print("Back to string:", tostring(converted))

-- String operations
print("String length:", #str)
print("Uppercase:", string.upper(str))
print("Substring:", string.sub(str, 1, 5))`,
            hints: [
              "Use type() to check variable types",
              "tonumber() converts strings to numbers",
              "tostring() converts values to strings",
              "String functions are in the string library"
            ]
          }
        }
      ]
    }
  ]
};