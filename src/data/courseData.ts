// Comprehensive Lua course data structure
export const courseData = {
  title: "Lua Programming for Beginners",
  description: "A comprehensive guide to learning Lua from scratch",
  modules: [
    {
      id: "introduction",
      title: "Introduction to Lua",
      description: "Get started with the basics of Lua programming language",
      estimatedHours: 2,
      learningObjectives: [
        "Understand what Lua is and its history",
        "Learn about Lua's design philosophy",
        "Set up a Lua development environment",
        "Write and run your first Lua program"
      ],
      lessons: [
        {
          id: "what-is-lua",
          title: "What is Lua?",
          description: "An introduction to the Lua programming language and its history",
          completed: false,
          content: `
            <h2>What is Lua?</h2>
            <p>Lua is a powerful, efficient, lightweight, embeddable scripting language. It supports procedural programming, object-oriented programming, functional programming, data-driven programming, and data description.</p>
            
            <h3>History and Development</h3>
            <p>Lua was created in 1993 by Roberto Ierusalimschy, Waldemar Celes, and Luiz Henrique de Figueiredo at PUC-Rio, the Pontifical Catholic University of Rio de Janeiro in Brazil. The name "Lua" means "moon" in Portuguese.</p>
            
            <h3>Key Features</h3>
            <ul>
              <li><strong>Lightweight:</strong> The complete Lua interpreter and all standard libraries typically compile to less than 500KB.</li>
              <li><strong>Efficient:</strong> Lua has one of the fastest execution speeds among interpreted languages.</li>
              <li><strong>Portable:</strong> Runs on all platforms that have a standard C compiler.</li>
              <li><strong>Embeddable:</strong> Easily integrates with applications, especially games.</li>
              <li><strong>Simple and Flexible:</strong> Clean syntax with powerful meta-features.</li>
            </ul>
            
            <h3>Where is Lua Used?</h3>
            <p>Lua finds applications in various domains:</p>
            <ul>
              <li><strong>Game Development:</strong> Used in games like World of Warcraft, Roblox, and Adobe Lightroom</li>
              <li><strong>Embedded Systems:</strong> Popular in IoT devices and embedded applications</li>
              <li><strong>Scientific Computing:</strong> Used in research and data analysis</li>
              <li><strong>Web Development:</strong> Powers parts of Nginx and Apache</li>
              <li><strong>Mobile Applications:</strong> Used in mobile app development</li>
            </ul>
            
            <h3>Why Learn Lua?</h3>
            <ul>
              <li>Easy to learn, especially for beginners</li>
              <li>Clean, readable syntax</li>
              <li>Powerful features in a small package</li>
              <li>Large community and extensive documentation</li>
              <li>High demand in game development</li>
            </ul>
          `,
          keyConcepts: [
            "Lua is a lightweight, efficient programming language",
            "Created in 1993 at PUC-Rio in Brazil",
            "Widely used in game development and embedded systems",
            "Known for its simplicity and flexibility",
            "Excellent first programming language"
          ],
          initialCode: "-- Your first Lua program\nprint('Hello from Lua!')\n\n-- Let's do some simple math\nlocal number = 42\nprint('The answer is: ' .. number)\n\n-- Basic string manipulation\nlocal name = 'Lua Learner'\nprint('Welcome, ' .. name .. '!')"
        },
        {
          id: "setup-environment",
          title: "Setting Up Your Environment",
          description: "Learn how to set up Lua on your computer and use the online editor",
          completed: false,
          content: `
            <h2>Setting Up Your Lua Environment</h2>
            <p>While we provide an online editor for immediate practice, understanding how to set up Lua locally is important for real development.</p>
            
            <h3>Using the Online Editor</h3>
            <p>Our interactive editor provides:</p>
            <ul>
              <li>Instant code execution</li>
              <li>Syntax highlighting</li>
              <li>Error reporting</li>
              <li>Code sharing capabilities</li>
            </ul>
            
            <h3>Local Installation</h3>
            <p>To install Lua locally:</p>
            <ul>
              <li><strong>Windows:</strong> Download from LuaBinaries or use Windows Subsystem for Linux</li>
              <li><strong>macOS:</strong> Use Homebrew: brew install lua</li>
              <li><strong>Linux:</strong> Use package manager: apt-get install lua5.4 (Ubuntu/Debian)</li>
            </ul>
            
            <h3>Verifying Installation</h3>
            <p>After installation, open a terminal and type:</p>
            <pre><code>lua -v</code></pre>
            <p>This should display the Lua version number.</p>
            
            <h3>Text Editors and IDEs</h3>
            <p>Recommended editors for Lua development:</p>
            <ul>
              <li>Visual Studio Code with Lua extension</li>
              <li>ZeroBrane Studio (Lua-specific IDE)</li>
              <li>Sublime Text with Lua package</li>
              <li>Notepad++ with Lua syntax highlighting</li>
            </ul>
          `,
          keyConcepts: [
            "Understanding the online editor features",
            "Installing Lua on different operating systems",
            "Verifying Lua installation",
            "Choosing appropriate development tools"
          ],
          initialCode: "-- Let's verify our Lua environment\n\n-- Print Lua version\nprint(_VERSION)\n\n-- Basic arithmetic to test execution\nlocal a = 10\nlocal b = 20\nprint('Sum:', a + b)\n\n-- String manipulation test\nlocal message = 'Environment setup successful!'\nprint(message)"
        }
      ]
    },
    {
      id: "fundamentals",
      title: "Lua Fundamentals",
      description: "Master the core concepts of Lua programming",
      estimatedHours: 4,
      learningObjectives: [
        "Understand Lua's lexical conventions",
        "Learn about variables and data types",
        "Master control structures",
        "Work with functions and scope"
      ],
      lessons: [
        {
          id: "lexical-conventions",
          title: "Lexical Conventions",
          description: "Learn about Lua's basic syntax rules and structure",
          completed: false,
          content: `
            <h2>Lexical Conventions in Lua</h2>
            
            <h3>Comments</h3>
            <p>Lua supports single-line and multi-line comments:</p>
            <pre><code>-- This is a single-line comment

--[[
  This is a
  multi-line comment
]]</code></pre>

            <h3>Identifiers</h3>
            <p>Valid identifier names in Lua:</p>
            <ul>
              <li>Start with a letter or underscore</li>
              <li>Can contain letters, digits, and underscores</li>
              <li>Are case-sensitive</li>
              <li>Cannot be reserved words</li>
            </ul>

            <h3>Reserved Words</h3>
            <p>Lua's reserved words:</p>
            <pre><code>and       break     do        else      elseif
end       false     for       function  goto
if        in        local     nil       not
or        repeat    return    then      true
until     while</code></pre>

            <h3>Chunks</h3>
            <p>A chunk is a sequence of statements that Lua executes. Each source file is a chunk, and each string of code you execute is a chunk.</p>
          `,
          keyConcepts: [
            "Understanding Lua comments",
            "Proper naming conventions",
            "Reserved words in Lua",
            "Code organization in chunks"
          ],
          initialCode: "-- Let's practice with comments and printing\n\n-- Single-line comment\nprint('Hello')\n\n--[[\n  Multi-line\n  comment\n]]\nprint('World')\n\n-- Working with identifiers\nlocal userName = 'John'  -- Valid identifier\nlocal user_age = 25     -- Also valid\n\nprint(userName, user_age)"
        }
      ]
    }
  ]
};