# LuaLearn - Internal Developer Documentation

## Architecture Overview

### Core Technologies
- React 18.3.1 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Fengari-web for Lua execution in browser
- React Router for navigation
- CodeMirror for code editing
- Lucide React for icons

### Project Structure

```
src/
├── components/      # Reusable UI components
├── context/        # React context providers
├── data/           # Course content and static data
├── pages/          # Route-specific page components
└── main.tsx        # Application entry point
```

## Core Components

### ThemeContext (`src/context/ThemeContext.tsx`)
- Manages application-wide dark/light theme
- Persists theme preference in localStorage
- Syncs with system preferences by default
- Exposes `useTheme` hook for theme management

### Layout (`src/components/Layout.tsx`)
- Main application layout wrapper
- Manages responsive sidebar state
- Conditionally renders sidebar based on route
- Props:
  - `children`: ReactNode

### LuaEditor (`src/components/LuaEditor.tsx`)
- CodeMirror-based code editor
- Supports syntax highlighting
- Theme-aware styling
- Props:
  - `code`: string - Current code content
  - `setCode`: (code: string) => void - Code update handler

### Navbar (`src/components/Navbar.tsx`)
- Top navigation bar
- Theme toggle
- Mobile menu controls
- Search functionality
- Props:
  - `toggleSidebar`: () => void - Sidebar toggle handler

### Sidebar (`src/components/Sidebar.tsx`)
- Course navigation menu
- Progress tracking
- Responsive design
- Props:
  - `isOpen`: boolean - Sidebar visibility state
  - `closeSidebar`: () => void - Close handler

## Page Components

### HomePage (`src/pages/HomePage.tsx`)
- Landing page with course overview
- Features section
- Course module previews
- Testimonials section
- CTA sections

### CoursePage (`src/pages/CoursePage.tsx`)
- Module overview
- Learning objectives
- Lesson listing
- Progress tracking

### LessonPage (`src/pages/LessonPage.tsx`)
- Interactive lesson content
- Code editor integration
- Practice exercises
- Navigation between lessons
- Progress tracking

### NotFoundPage (`src/pages/NotFoundPage.tsx`)
- 404 error handling
- Navigation back to home

## Course Data Structure (`src/data/courseData.ts`)

### Module Structure
```typescript
interface Module {
  id: string;
  title: string;
  description: string;
  estimatedHours: number;
  learningObjectives: string[];
  lessons: Lesson[];
}
```

### Lesson Structure
```typescript
interface Lesson {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  content: string;
  keyConcepts: string[];
  initialCode: string;
  hints?: string[];
  challengeTitle?: string;
  challengeDescription?: string;
  challengeInitialCode?: string;
}
```

## Core Mechanics

### Theme Management
- Theme detection and switching
- System preference synchronization
- Persistent storage
- CSS class toggling

### Code Execution
- Fengari-web integration for Lua execution
- Sandboxed environment
- Error handling
- Output capture

### Progress Tracking
- Lesson completion status
- Module progress calculation
- Persistent storage (to be implemented)

### Navigation
- Dynamic routing
- Module/lesson sequencing
- Progress-aware navigation
- Breadcrumb generation

## Development Guidelines

### Adding New Lessons
1. Update `courseData.ts`
2. Follow existing lesson structure
3. Include all required fields
4. Add appropriate initial code
5. Update learning objectives

### Modifying Components
1. Maintain TypeScript types
2. Follow existing styling patterns
3. Keep theme-awareness
4. Test responsive behavior

### Code Style
- Use TypeScript strictly
- Follow React hooks guidelines
- Maintain component isolation
- Document complex logic
- Use meaningful variable names

### Performance Considerations
- Lazy load course content
- Optimize image assets
- Minimize bundle size
- Cache course data
- Use React.memo where appropriate

## Future Improvements

### Authentication
- User registration/login
- Progress persistence
- Social authentication
- Profile management

### Course Management
- Admin interface
- Content editor
- Course analytics
- User progress tracking

### Interactive Features
- Real-time collaboration
- Code sharing
- Community features
- Discussion forums

### Technical Enhancements
- Full Lua language support
- Advanced code editor features
- Performance optimizations
- Offline support

## Deployment

### Build Process
```bash
npm run build
```
- Outputs to `dist/`
- Optimizes assets
- Generates sourcemaps
- Bundles dependencies

### Environment Variables
- `VITE_APP_TITLE`: Application title
- Additional vars for future auth/API integration

### Production Considerations
- Enable service workers
- Configure caching
- Set up monitoring
- Implement error tracking

## Testing (To Be Implemented)

### Unit Tests
- Component testing
- Utility function testing
- Context testing
- Route testing

### Integration Tests
- User flows
- Course navigation
- Code execution
- Theme switching

### E2E Tests
- Full user journeys
- Cross-browser testing
- Mobile testing
- Performance testing

## Security Considerations

### Code Execution
- Sandbox Lua execution
- Prevent infinite loops
- Resource usage limits
- Input validation

### Data Protection
- Secure storage
- XSS prevention
- CSRF protection
- Input sanitization

## Maintenance

### Dependencies
- Regular updates
- Security audits
- Compatibility checks
- Performance monitoring

### Monitoring
- Error tracking
- Usage analytics
- Performance metrics
- User feedback

## Support

### Common Issues
- Code editor setup
- Theme switching
- Course navigation
- Content loading

### Debugging
- Browser console
- Network requests
- State management
- Route transitions