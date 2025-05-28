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
    },
    {
      id: "numbers",
      title: "Numbers",
      description: "Explore Lua's numeric types, arithmetic, and conversions.",
      emoji: "🔢",
      estimatedHours: 3,
      xp: 150,
      progress: 0,
      learningObjectives: [
        "Understand Lua's number representation (integers and floats).",
        "Master arithmetic, relational, and mathematical operations.",
        "Learn about number representation limits and conversions."
      ],
      lessons: [
        {
          id: "numerals-arithmetic",
          title: "Numerals and Basic Arithmetic",
          description: "Learn how to write numeric constants and perform basic calculations.",
          emoji: "➕",
          xp: 30,
          completed: false,
          content: `
            <div class="space-y-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Numerals</h2>
              <p class="text-gray-700 dark:text-gray-300">
                Lua supports both integer and floating-point numbers. Numeric constants can be written with an optional decimal part and an optional decimal exponent. Hexadecimal constants are prefixed with <code>0x</code>.
              </p>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
-- Decimal numerals
print(4)        -- Integer
print(0.4)      -- Float
print(4.57e-3)  -- Scientific notation

-- Hexadecimal numerals (Lua 5.3+)
print(0xff)     -- 255
print(0x1A3)    -- 419
print(0x0.2)    -- 0.125 (hexadecimal float)
print(0x1p-1)   -- 0.5 (hexadecimal float with binary exponent)
              </pre>
              <p class="text-gray-700 dark:text-gray-300">
                Both integer and float values have the type "number".
              </p>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
print(type(3))    -- Output: number
print(type(3.5))  -- Output: number
print(type(3.0))  -- Output: number
              </pre>

              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Arithmetic Operators</h2>
              <p class="text-gray-700 dark:text-gray-300">
                Lua provides a standard set of arithmetic operators.
              </p>
              <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li><code>+</code> (addition)</li>
                <li><code>-</code> (subtraction)</li>
                <li><code>*</code> (multiplication)</li>
                <li><code>/</code> (division - always float result)</li>
                <li><code>//</code> (floor division - rounds towards negative infinity, integer result if both operands are integers)</li>
                <li><code>%</code> (modulo)</li>
                <li><code>^</code> (exponentiation)</li>
              </ul>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
print(13 + 15)      -- Output: 28
print(13.0 + 25)    -- Output: 38.0
print(3 / 2)        -- Output: 1.5
print(3 // 2)       -- Output: 1 (integer result)
print(-9 // 2)      -- Output: -5
print(math.pi % 0.01) -- Output: 0.0015926535897931
print(2 ^ 3)        -- Output: 8.0
              </pre>
            </div>
          `,
          challenge: {
            title: "Number Explorer",
            description: "Experiment with different numeral formats and arithmetic operators.",
            initialCode: `-- 1. Try to print an invalid hexadecimal numeral. What error do you get?
-- print(0xABFG)

-- 2. Predict the output of the following loop:
-- for i = -10, 10 do
--   print(i, i % 3)
-- end

-- Write your code below:
`,
            solution: `-- 1. Output: stdin:1: invalid escape sequence near '0xABFG' (or similar syntax error)

-- 2. Output:
-- -10	-1
-- -9	0
-- -8	1
-- -7	-1
-- -6	0
-- -5	1
-- -4	-1
-- -3	0
-- -2	1
-- -1	-1
-- 0	0
-- 1	1
-- 2	-1
-- 3	0
-- 4	1
-- 5	-1
-- 6	0
-- 7	1
-- 8	-1
-- 9	0
-- 10	1
`,
            hints: [
              "Hexadecimal numerals only use digits 0-9 and letters A-F.",
              "The modulo operator (%) in Lua behaves consistently for negative numbers, always having the same sign as the second argument."
            ]
          }
        },
        {
          id: "relational-math",
          title: "Relational Operators and Math Library",
          description: "Understand comparison operators and use Lua's built-in math functions.",
          emoji: "🧮",
          xp: 30,
          completed: false,
          content: `
            <div class="space-y-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Relational Operators</h2>
              <p class="text-gray-700 dark:text-gray-300">
                Lua provides standard relational operators for comparison. All these operators always produce a Boolean value (<code>true</code> or <code>false</code>).
              </p>
              <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li><code>&lt;</code> (less than)</li>
                <li><code>&gt;</code> (greater than)</li>
                <li><code>&lt;=</code> (less than or equal to)</li>
                <li><code>&gt;=</code> (greater than or equal to)</li>
                <li><code>==</code> (equality)</li>
                <li><code>~=</code> (inequality)</li>
              </ul>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
print(10 > 5)     -- Output: true
print(1 == 1.0)   -- Output: true (compares mathematical values)
print("hello" == "world") -- Output: false
print(5 ~= 10)    -- Output: true
              </pre>
              <p class="text-gray-700 dark:text-gray-300">
                Comparison of numbers disregards their subtypes (integer or float); what matters is their mathematical value.
              </p>

              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">The Mathematical Library</h2>
              <p class="text-gray-700 dark:text-gray-300">
                Lua's standard <code>math</code> library provides a rich set of mathematical functions and constants.
              </p>
              <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Constants: <code>math.pi</code>, <code>math.huge</code> (represents infinity)</li>
                <li>Trigonometric functions: <code>math.sin()</code>, <code>math.cos()</code>, <code>math.tan()</code>, etc. (work in radians)</li>
                <li>Min/Max: <code>math.max()</code>, <code>math.min()</code></li>
                <li>Random numbers: <code>math.random()</code> (generates pseudo-random numbers), <code>math.randomseed()</code> (sets the seed)</li>
                <li>Rounding functions: <code>math.floor()</code> (rounds towards negative infinity), <code>math.ceil()</code> (rounds towards positive infinity), <code>math.modf()</code> (returns integer and fractional parts)</li>
              </ul>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
print(math.sin(math.pi / 2)) -- Output: 1.0
print(math.max(10, 7, 20))   -- Output: 20
print(math.random(1, 6))     -- Random integer between 1 and 6
print(math.floor(3.3))       -- Output: 3
print(math.ceil(-3.3))       -- Output: -3
local int_part, frac_part = math.modf(5.7)
print(int_part, frac_part)   -- Output: 5	0.7
              </pre>
            </div>
          `,
          challenge: {
            title: "Calculate Cone Volume",
            description: "Write a function to compute the volume of a right circular cone, given its height and the angle between a generatrix and the axis.",
            initialCode: `-- Formula for cone volume: (1/3) * pi * r^2 * h
-- where r is the radius of the base, and h is the height.
-- You are given height (h) and angle (alpha) in radians.
-- Hint: r = h * tan(alpha)

function cone_volume(height, angle_rad)
  -- Write your code here
end

-- Test cases
print(cone_volume(3, math.pi / 4)) -- Expected: approx 9.42
print(cone_volume(5, math.pi / 6)) -- Expected: approx 14.54
`,
            solution: `function cone_volume(height, angle_rad)
  local radius = height * math.tan(angle_rad)
  local volume = (1/3) * math.pi * (radius^2) * height
  return volume
end`,
            hints: [
              "Use `math.tan()` to find the radius from the height and angle.",
              "Remember `math.pi` for the value of Pi.",
              "The formula for the volume of a cone is `(1/3) * pi * r^2 * h`."
            ]
          }
        },
        {
          id: "representation-conversions",
          title: "Number Representation and Conversions",
          description: "Dive into how Lua handles numbers internally and how to convert between types.",
          emoji: "🔄",
          xp: 30,
          completed: false,
          content: `
            <div class="space-y-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Number Representation Limits</h2>
              <p class="text-gray-700 dark:text-gray-300">
                Lua 5.3+ uses 64-bit integers and double-precision floating-point numbers (floats).
                Integers can represent values up to <code>2^63 - 1</code> (<code>math.maxinteger</code>) and down to <code>-2^63</code> (<code>math.mininteger</code>).
                When integer operations exceed these limits, the result "wraps around".
              </p>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
print(math.maxinteger)      -- Output: 9223372036854775807
print(math.mininteger)      -- Output: -9223372036854775808
print(math.maxinteger + 1)  -- Output: -9223372036854775808 (wraps around to mininteger)
print(math.mininteger - 1)  -- Output: 9223372036854775807 (wraps around to maxinteger)
              </pre>
              <p class="text-gray-700 dark:text-gray-300">
                Double-precision floats can represent numbers with roughly 16 significant decimal digits, in a range from <code>-10^308</code> to <code>10^308</code>.
                Floats can represent integers exactly up to <code>2^53</code>. Beyond this, precision may be lost.
              </p>

              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Type Conversions</h2>
              <p class="text-gray-700 dark:text-gray-300">
                Lua provides functions for explicit conversion between numbers and strings.
              </p>
              <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li><code>tonumber(s, [base])</code>: Converts a string to a number. Returns <code>nil</code> if conversion is not possible.</li>
                <li><code>tostring(n)</code>: Converts a number to a string.</li>
                <li><code>math.tointeger(n)</code>: Converts a number to an integer if possible, otherwise returns <code>nil</code>.</li>
              </ul>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
print(tonumber("123"))        -- Output: 123
print(tonumber("FF", 16))     -- Output: 255
print(tonumber("hello"))      -- Output: nil
print(tostring(42))           -- Output: "42"
print(math.tointeger(3.0))    -- Output: 3
print(math.tointeger(3.14))   -- Output: nil
              </pre>
            </div>
          `,
          challenge: {
            title: "Integer Overflow Challenge",
            description: "Explain the output of the following expressions related to integer overflow.",
            initialCode: `-- Predict and explain the output of these expressions:
print(math.maxinteger * 2)
print(math.mininteger * 2)
print(math.maxinteger * math.maxinteger)
print(math.mininteger * math.mininteger)
`,
            solution: `-- Explanation:
-- Lua's integer arithmetic uses 64-bit signed integers and wraps around on overflow.

-- print(math.maxinteger * 2)
-- math.maxinteger is 2^63 - 1. Multiplying by 2 gives 2^64 - 2.
-- In 64-bit two's complement, 2^64 wraps around to 0. So, 2^64 - 2 becomes -2.
-- Output: -2

-- print(math.mininteger * 2)
-- math.mininteger is -2^63. Multiplying by 2 gives -2^64.
-- In 64-bit two's complement, -2^64 wraps around to 0.
-- Output: 0

-- print(math.maxinteger * math.maxinteger)
-- (2^63 - 1) * (2^63 - 1) = 2^126 - 2^64 + 1.
-- Since 2^126 and 2^64 are multiples of 2^64, the result modulo 2^64 is 1.
-- Output: 1

-- print(math.mininteger * math.mininteger)
-- (-2^63) * (-2^63) = 2^126.
-- The result modulo 2^64 is 0.
-- Output: 0
`,
            hints: [
              "Lua's integers are 64-bit signed integers.",
              "Integer arithmetic in Lua wraps around on overflow, following two's complement rules.",
              "Consider the values modulo 2^64."
            ]
          }
        }
      ]
    },
    {
      id: "strings",
      title: "Strings",
      description: "Learn about string literals, manipulation, and Unicode support in Lua.",
      emoji: "💬",
      estimatedHours: 3,
      xp: 150,
      progress: 0,
      learningObjectives: [
        "Understand string immutability and concatenation.",
        "Master string library functions for common operations.",
        "Explore multi-line strings and Unicode handling with UTF-8."
      ],
      lessons: [
        {
          id: "literals-concatenation",
          title: "String Literals and Concatenation",
          description: "Define strings using various methods and combine them.",
          emoji: "📝",
          xp: 30,
          completed: false,
          content: `
            <div class="space-y-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">String Literals</h2>
              <p class="text-gray-700 dark:text-gray-300">
                Strings in Lua are immutable sequences of bytes. They can be delimited by single or double matching quotes.
              </p>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
local single_quotes = 'Hello, Lua!'
local double_quotes = "Welcome to Lua!"
print(single_quotes, double_quotes)
              </pre>
              <p class="text-gray-700 dark:text-gray-300">
                Lua supports C-like escape sequences for special characters:
              </p>
              <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li><code>\\a</code> (bell), <code>\\b</code> (back space), <code>\\f</code> (form feed), <code>\\n</code> (newline), <code>\\r</code> (carriage return), <code>\\t</code> (horizontal tab), <code>\\v</code> (vertical tab)</li>
                <li><code>\\\\</code> (backslash), <code>\\"</code> (double quote), <code>\\'</code> (single quote)</li>
                <li><code>\\ddd</code> (character by decimal value, up to 3 digits), <code>\\xhh</code> (character by hexadecimal value, 2 digits)</li>
                <li><code>\\u{h...h}</code> (UTF-8 character by hexadecimal Unicode value, Lua 5.3+)</li>
              </ul>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
print("Line1\\nLine2") -- Newline
print("\\x41\\x42\\x43") -- ABC (hexadecimal)
print("\\u{20AC}")     -- € (Euro sign, UTF-8)
              </pre>

              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Long Strings</h2>
              <p class="text-gray-700 dark:text-gray-300">
                Multi-line strings can be delimited by matching double square brackets <code>[[...]]</code>. They do not interpret escape sequences and ignore a leading newline.
                You can add equals signs between the brackets (e.g., <code>[===[...]===]</code>) to handle nested brackets.
              </p>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
local long_string = [[
  This is a multi-line string.
  It can contain "quotes" and 'quotes' easily.
  No escape sequences are interpreted here.
]]
print(long_string)
              </pre>

              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">String Concatenation and Length</h2>
              <p class="text-gray-700 dark:text-gray-300">
                The concatenation operator is <code>..</code> (two dots). If any operand is a number, Lua converts it to a string.
                The length operator <code>#</code> returns the length of a string in bytes.
              </p>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
local name = "Lua"
local greeting = "Hello, " .. name .. "!"
print(greeting)   -- Output: Hello, Lua!
print("Result is " .. 123) -- Output: Result is 123

print(#greeting)  -- Output: 11 (length in bytes)
              </pre>
            </div>
          `,
          challenge: {
            title: "Embed XML Fragment",
            description: "Embed the following XML fragment as a string in a Lua program using at least two different ways:\n\n<code><![CDATA[\nHello world\n]]></code>",
            initialCode: `-- Method 1: Using long string literal
local xml_fragment_1 = [[
  -- Your code here
]]
print(xml_fragment_1)

-- Method 2: Using escaped string literal
local xml_fragment_2 = "-- Your code here"
print(xml_fragment_2)
`,
            solution: `-- Method 1: Using long string literal
local xml_fragment_1 = [[
<![CDATA[
Hello world
]]>
]]

-- Method 2: Using escaped string literal
local xml_fragment_2 = "<![CDATA[\\nHello world\\n]]>"
`,
            hints: [
              "For multi-line content without interpreting escapes, long string literals are ideal.",
              "For single-line strings, you might need to escape special characters like newlines (`\\n`) and quotes (`\\"`)."
            ]
          }
        },
        {
          id: "string-library",
          title: "String Library Functions",
          description: "Utilize Lua's powerful string library for common text manipulations.",
          emoji: "✂️",
          xp: 30,
          completed: false,
          content: `
            ]
            <div class="space-y-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Basic String Functions</h2>
              <p class="text-gray-700 dark:text-gray-300">
                The <code>string</code> library provides functions for common string operations.
              </p>
              <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li><code>string.len(s)</code>: Returns the length of string <code>s</code> (same as <code>#s</code>).</li>
                )
                <li><code>string.rep(s, n)</code>: Returns string <code>s</code> repeated <code>n</code> times.</li>
                <li><code>string.reverse(s)</code>: Returns a reversed copy of string <code>s</code>.</li>
                <li><code>string.lower(s)</code> / <code>string.upper(s)</code>: Returns a copy with letters converted to lower/upper case.</li>
                <li><code>string.sub(s, i, j)</code>: Extracts a substring from index <code>i</code> to <code>j</code> (inclusive). Negative indices count from the end.</li>
                <li><code>string.char(n1, n2, ...)</code>: Converts numeric values to characters.</li>
                <li><code>string.byte(s, i, j)</code>: Returns the numeric representation of characters from index <code>i</code> to <code>j</code>.</li>
              </ul>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
          }
        }
      ]
    }
  ]
}
print(string.rep("abc", 3))    -- Output: abcabcabc
print(string.reverse("A Long Line!")) -- Output: !eniL gnoL A
print(string.lower("A Long Line!")) -- Output: a long line! 
print(string.upper("A Long Line!")) -- Output: A LONG LINE! 
              </pre>

              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">String Formatting</h2>
              <p class="text-gray-700 dark:text-gray-300">
                <code>string.format(formatstring, ...)</code> is a powerful tool for formatting strings, similar to C's <code>printf</code>.
              </p>
              <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li><code>%d</code>: decimal integer</li>
                <li><code>%f</code>: floating-point number</li>
                <li><code>%s</code>: string</li>
                <li><code>%.Nf</code>: float with N decimal digits</li>
                <li><code>%0Nd</code>: decimal with zero padding, N digits</li>
              </ul>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
print(string.format("Name: %s, Age: %d", "Alice", 30)) -- Output: Name: Alice, Age: 30
print(string.format("Pi: %.2f", math.pi)) -- Output: Pi: 3.14
print(string.format("Number: %05d", 42)) -- Output: Number: 00042
              </pre>

              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Pattern Matching (Introduction)</h2>
              <p class="text-gray-700 dark:text-gray-300">
                Lua's <code>string</code> library also includes functions for pattern matching, which are more powerful than simple substring searches.
              </p>
              <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li><code>string.find(s, pattern, [init], [plain])</code>: Searches for a pattern in <code>s</code>.</li>
                <li><code>string.gsub(s, pattern, replacement, [n])</code>: Replaces occurrences of a pattern.</li>
              </ul>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
print(string.find("hello world", "world")) -- Output: 7	11
print(string.gsub("hello world", "l", "X")) -- Output: heXXo worXd	3
              </pre>
            </div>
          `,
          challenge: {
            title: "Insert String into Another",
            description: "Write a function \`insert(s, pos, sub)\` that inserts string \`sub\` into string `s\` at position \`pos`.",
            initialCode: `-- Example: insert("hello world", 7, "small ") should return "hello small world"

function insert(s, pos, sub)
  -- Write your code here
end

-- Test cases
print(insert("hello world", 1, "start: ")) -- Expected: start: hello world
print(insert("hello world", 7, "small ")) -- Expected: hello small world
print(insert("Lua", 4, "Learn")) -- Expected: LuaLearn
`,
            solution: `function insert(s, pos, sub)
  return string.sub(s, 1, pos - 1) .. sub .. string.sub(s, pos)
end`,
            hints: [
              "Use `string.sub()` to get the part of the string before `pos` and the part from `pos` onwards.",
              "Use the concatenation operator `..` to combine the parts with the `sub` string."
            ]
          }
        },
        {
          id: "unicode-utf8",
          title: "Unicode and UTF-8",
          description: "Understand Lua's support for Unicode strings, especially UTF-8.",
          emoji: "🌍",
          xp: 30,
          completed: false,
          content: `
            <div class="space-y-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">UTF-8 Encoding in Lua</h2>
              <p class="text-gray-700 dark:text-gray-300">
                Lua is 8-bit clean, meaning strings can contain any byte value. UTF-8 is the dominant encoding for Unicode on the Web and is well-supported in Lua.
                UTF-8 represents characters using a variable number of bytes. ASCII characters use a single byte.
              </p>
              <p class="text-gray-700 dark:text-gray-300">
                Many <code>string</code> library functions "just work" with UTF-8 strings (e.g., concatenation, comparison). However, functions that assume one character equals one byte (like <code>string.len</code>, <code>string.sub</code>, <code>string.byte</code>, <code>string.char</code>, <code>string.lower</code>, <code>string.upper</code>) operate on bytes, not characters.
              </p>

              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">The <code>utf8</code> Library (Lua 5.3+)</h2>
              <p class="text-gray-700 dark:text-gray-300">
                The <code>utf8</code> library provides functions for proper Unicode character handling.
              </p>
              <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                <li><code>utf8.len(s)</code>: Returns the number of UTF-8 characters (codepoints) in <code>s</code>. Validates the string.</li>
                <li><code>utf8.char(n1, n2, ...)</code>: Converts Unicode codepoints to a UTF-8 string.</li>
                <li><code>utf8.codepoint(s, [i], [j])</code>: Returns the codepoints of characters in <code>s</code> from byte position <code>i</code> to <code>j</code>.</li>
                <li><code>utf8.offset(s, n, [i])</code>: Returns the byte offset of the <code>n</code>-th character from byte position <code>i</code>. Useful for \`string.sub\` with character counts.</li>
                <li><code>utf8.codes(s)</code>: An iterator that returns byte position and codepoint for each character in <code>s</code>.</li>
              </ul>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
local s = "ação"
print(utf8.len(s)) -- Output: 4 (characters)
print(#s)          -- Output: 5 (bytes, 'ç' is 2 bytes)

print(utf8.char(97, 231, 227, 111)) -- Output: ação

local pos, cp = utf8.codepoint(s, 3) -- Codepoint at byte position 3 ('ç')
print(pos, cp) -- Output: 231

local char_offset = utf8.offset(s, 2) -- Byte offset of 2nd char ('ç')
print(char_offset) -- Output: 3
print(string.sub(s, char_offset, char_offset)) -- Output: ç

for byte_pos, codepoint in utf8.codes(s) do
  print(byte_pos, codepoint)
end
-- Output:
-- 1	97
-- 3	231
-- 4	227
-- 6	111
              </pre>
            </div>
          `,
          challenge: {
            title: "Check Palindrome",
            description: "Write a function \`is_palindrome(s)` that checks if a given string \`s` is a palindrome (reads the same forwards and backwards).",
            initialCode: `-- A palindrome is a word, phrase, or sequence that reads the same backwards as forwards.
-- Example: "madam", "racecar"

function is_palindrome(s)
  -- Write your code here
end

-- Test cases
print(is_palindrome("madam"))     -- Expected: true
print(is_palindrome("racecar"))   -- Expected: true
print(is_palindrome("hello"))     -- Expected: false
print(is_palindrome("Ação"))      -- Expected: false (due to byte-based string.reverse)
`,
            solution: `function is_palindrome(s)
  return s == string.reverse(s)
end`,
            hints: [
              "The `string.reverse()` function can be very useful here.",
              "For simple ASCII strings, direct comparison after reversing is sufficient."
            ]
          }
        }
      ]
    },
    {
      id: "tables",
      title: "Tables",
      description: "Master Lua's powerful table data structure",
      emoji: "📊",
      estimatedHours: 4,
      xp: 175,
      progress: 0,
      learningObjectives: [
        "Understand tables as Lua's primary data structure",
        "Learn to use tables as arrays, dictionaries, and objects",
        "Master table traversal and manipulation techniques",
        "Explore the table library functions"
      ],
      lessons: [
        {
          id: "table-indices",
          title: "Table Indices",
          description: "Learn how to index and access data in Lua tables",
          emoji: "🔑",
          xp: 35,
          completed: false,
          content: `
            <div class="space-y-8">
              <section class="space-y-6">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Understanding Table Indices</h2>
                
                <p class="text-lg text-gray-700 dark:text-gray-300">
                  Tables in Lua are the main (in fact, the only) data structuring mechanism. They can be used to represent arrays, sets, records, and many other data structures in a simple, uniform, and efficient way.
                </p>
                
                <p class="text-gray-700 dark:text-gray-300">
                  A table in Lua is essentially an associative array. It can accept not only numbers as indices, but also strings or any other value of the language (except nil).
                </p>

                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Creating and Using Tables</h3>
                  <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
-- Create an empty table
local a = {}

-- Add elements with different types of keys
local k = "x"
a[k] = 10           -- a["x"] = 10
a[20] = "great"     -- a[20] = "great"
a["x"] = a["x"] + 1 -- a["x"] = 11

-- Access elements
print(a["x"])       -- 11
print(a[k])         -- 11
print(a[20])        -- "great"
                  </pre>
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
                    Tables are created using constructor expressions, with the simplest form being <code>{}</code>. You can then add key-value pairs using the square bracket notation.
                  </p>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Tables as References</h3>
                  <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
-- Tables are references
local a = {}
local b = a         -- 'b' refers to the same table as 'a'

a["x"] = 10
print(b["x"])       -- 10 (changes to 'a' affect 'b')

b["x"] = 20
print(a["x"])       -- 20 (changes to 'b' affect 'a')

a = nil             -- 'a' no longer refers to the table
-- 'b' still refers to the table
                  </pre>
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
                    Tables in Lua are objects, not values. When you assign a table to a variable, you're assigning a reference to that table, not copying the table itself.
                  </p>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Using Strings as Keys</h3>
                  <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
-- Table with string keys
local person = {}
person["name"] = "John"
person["age"] = 30

-- Dot notation (syntactic sugar)
person.profession = "Developer"

-- Both notations are equivalent
print(person.name)        -- "John"
print(person["name"])     -- "John"
                  </pre>
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
                    When using strings as keys, Lua provides a convenient dot notation as syntactic sugar. <code>a.name</code> is equivalent to <code>a["name"]</code>.
                  </p>
                </div>

                <div class="bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-6">
                  <h3 class="text-xl font-semibold mb-4 text-yellow-800 dark:text-yellow-300">Common Pitfalls</h3>
                  <p class="text-yellow-700 dark:text-yellow-200 mb-4">
                    Be careful not to confuse <code>a.x</code> with <code>a[x]</code>:
                  </p>
                  <pre class="bg-gray-900 text-gray-100 p-4 rounded-md">
local a = {}
local x = "y"

a[x] = 10       -- a["y"] = 10
print(a[x])     -- 10 (value of a["y"])
print(a.x)      -- nil (value of a["x"], which is undefined)
print(a.y)      -- 10 (value of a["y"])
                  </pre>
                  <p class="mt-3 text-yellow-700 dark:text-yellow-200">
                    <code>a.x</code> refers to <code>a["x"]</code> (a table indexed by the string "x"), while <code>a[x]</code> refers to <code>a[value_of_x]</code> (a table indexed by the value of variable x).
                  </p>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Type Coercion with Indices</h3>
                  <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
local a = {}

-- Different types of keys
a[10] = "number key"
a["10"] = "string key"
a["+10"] = "another string key"

print(a[10])            -- "number key"
print(a["10"])          -- "string key"
print(a["+10"])         -- "another string key"

-- Conversion between types
print(a[tonumber("10")]) -- "number key"
print(a[tonumber("+10")]) -- "number key"
                  </pre>
                  <p class="mt-3 text-gray-600 dark:text-gray-400">
                    Be careful with type coercion. The string "10" and the number 10 are different keys in a table. However, integers and floats with the same value (like 2 and 2.0) refer to the same key.
                  </p>
                </div>
              </section>
            </div>
          `,
          challenge: {
            title: "Table Index Explorer",
            description: "Create a table and experiment with different types of indices to understand how they work.",
            initialCode: `-- Create a table with various types of indices
-- Try to include:
-- 1. Numeric indices (both integer and float)
-- 2. String indices (both with bracket notation and dot notation)
-- 3. A variable as an index
-- 4. Demonstrate the difference between t.x and t[x]

-- Write your code below:

`,
            solution: `-- Table index exploration
local t = {}

-- Numeric indices
t[1] = "First element"
t[2.0] = "Second element"  -- Same as t[2]

-- String indices
t["name"] = "John"
t.age = 30                 -- Same as t["age"]

-- Variable as index
local key = "occupation"
t[key] = "Developer"       -- t["occupation"]

-- Difference between t.x and t[x]
local x = "name"
print("t.x:", t.x)         -- nil (t["x"])
print("t[x]:", t[x])       -- "John" (t["name"])

-- Print all entries
print("\\nAll table entries:")
for k, v in pairs(t) do
  print(k, v)
end`,
            hints: [
              "Remember that t.x is equivalent to t['x'], not t[x]",
              "Integers and floats with the same value (like 2 and 2.0) are treated as the same key",
              "Use the pairs() function to iterate through all key-value pairs in a table",
              "nil cannot be used as a key in a table"
            ]
          }
        }
      ]
    }
  ]
};