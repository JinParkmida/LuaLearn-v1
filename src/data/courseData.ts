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
          content: `<div className="space-y-8">
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What is Lua?</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Lua is a powerful, efficient, lightweight, embeddable scripting language. Created in 1993 at PUC-Rio, it has become one of the leading scripting languages worldwide, particularly in game development and embedded systems.
              </p>
            </section>
          </div>`,
          challenge: {
            title: "Your First Lua Program",
            description: "Write a program that demonstrates basic Lua syntax",
            initialCode: `-- Create a program that:
-- 1. Declares a variable with your name
-- 2. Creates a greeting message using string concatenation
-- 3. Performs a simple calculation
-- 4. Prints both the greeting and calculation result

-- Write your code below:`,
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
        }
      ]
    }
  ]
};