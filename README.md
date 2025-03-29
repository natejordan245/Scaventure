# Scaventure

An interactive web application that transforms traditional scavenger hunts into engaging group experiences. The app combines location-based challenges, team dynamics, and gamification to create memorable adventures in various cities.

## Current Implementation Status

### Frontend (Client)
- ✅ Basic project structure with Vite + React + TypeScript
- ✅ Redux store setup with user slice
- ✅ React Router navigation
- ✅ Tailwind CSS styling
- ✅ Basic page components:
  - Home page with welcome message
  - Login page with form and API integration
  - Register page with form and API integration
  - Hunts page with placeholder content
  - Teams page with placeholder content
  - Profile page with user info and logout
- ✅ Authentication flow:
  - Login form with email/password
  - Registration form with username/email/password
  - Automatic navigation to home after successful auth
  - Logout functionality
- ✅ Responsive layout with navigation bar
- ✅ Basic error handling for API calls

### Backend (Server)
- ✅ Express server setup
- ✅ Basic API endpoints:
  - POST /api/users/register
  - POST /api/users/login
  - GET /api/users
- ✅ JWT authentication
- ✅ Local JSON file storage for users
- ✅ Password hashing with bcrypt
- ✅ CORS enabled for frontend communication

## Project Structure
```
scaventure/
├── client/                      # Frontend React application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   └── Layout.tsx     # Main layout with navigation
│   │   ├── pages/             # Page components
│   │   │   ├── Home.tsx       # Landing page
│   │   │   ├── Login.tsx      # Login form
│   │   │   ├── Register.tsx   # Registration form
│   │   │   ├── Hunts.tsx      # Available hunts
│   │   │   ├── Teams.tsx      # Team management
│   │   │   └── Profile.tsx    # User profile
│   │   ├── slices/            # Redux slices
│   │   │   └── userSlice.ts   # User state management
│   │   ├── store.ts           # Redux store configuration
│   │   ├── App.tsx            # Main app component
│   │   └── main.tsx           # Entry point
│   └── package.json           # Frontend dependencies
│
├── server/                     # Backend Express server
│   ├── src/
│   │   ├── data/             # JSON data storage
│   │   └── utils/            # Server utilities
│   ├── server.js             # Main server file
│   └── package.json          # Backend dependencies
│
└── package.json               # Root project management
```

## User Flow

1. Website Launch & Landing Page
   - Display Scaventure logo, business name, and slogan
   - Smooth animations introducing app purpose
   - Call-to-action to start hunting

2. Location Selection
   - Initial view: Provo City as default location
   - Full-width city image background
   - Primary action: "Choose Hunt" button
   - Future expansion: City carousel for navigation

3. Hunt Selection
   - Card-based interface (similar to Duolingo)
   - Each card displays:
     * Themed hunt title
     * Representative image
     * Rating (1-5 stars)
     * Difficulty level (color-coded: red=hard, yellow=medium, green=easy)
     * Duration (45 minutes)
   - Initial offering: 2 themed hunts
   - Responsive grid layout for larger screens

4. Hunt Details
   - Hero image (group activity or AI-generated theme image)
   - Storyline description
   - Key information bullet points:
     * Store visits and challenges
     * Timing details
     * Walking distance
     * Food involvement
   - Interactive map preview
   - Pricing:
     * Group hunt: $49.99
     * Per person: $7-$16 (based on group size)
   - "Start Group Hunt" button

5. Payment Process
   - Stripe integration
   - Card payment with save functionality
   - Group size selection
   - Team name input
   - Mobile-optimized payment form

6. Group Formation
   - QR code display (using web QR generator)
   - Shareable join link
   - Number code display
   - Real-time member list
   - Group leader controls

7. Hunt Experience
   a. Map View
      - Interactive map using OpenStreetMap
      - Browser geolocation for current position
      - "First Clue" button
   
   b. Clue Display
      - Expandable card interface
      - Story-integrated riddles/clues
      - Location guidance
      - Mobile-friendly toggle between full/compact view

   c. Challenge System
      - Browser geolocation verification
      - Player randomization
      - Interactive challenge selector
      - Challenge types:
        * Trivia questions (with hint option)
        * Photo challenges (using device camera)
        * Discount code redemption
        * Puzzles
        * Group voting activities
      - Point system:
        * Individual points
        * Group points
      - Progress tracking
      - Mobile-optimized controls

8. Hunt Completion
   - Celebration screen with:
     * Final scores
     * Time taken
     * Records
     * Confetti animation
   - Share results button

9. Experience Sharing
   - Photo gallery
   - Social media integration
   - Additional features:
     * Events calendar
     * Special holiday hunts
     * Custom hunt creation
     * Special event packages
   - Navigation options:
     * Start new hunt
     * Return to hunt selection

## Development Schedule

1. Project Setup (Day 1) ✅
   - ✅ Initialize web project structure
     * Set up Vite + React
     * Configure TypeScript
     * Set up routing
     * Configure build tools
   - ✅ Set up Express server
     * Basic server setup
     * CORS configuration
     * Basic middleware
   - ✅ Configure development environment
     * Set up hot reloading
     * Configure development server
     * Set up browser debugging
   - ✅ Create initial package.json files
     * Update dependencies for web
     * Add web-specific scripts
     * Configure build process
   - ✅ Set up Git repository
     * Update .gitignore for web
     * Configure deployment settings
     * Set up CI/CD

2. Basic Infrastructure (Day 2) ✅
   - ✅ Set up data files
     * Create users.json structure
     * Add web-specific data fields
     * Configure data validation
   - ✅ Set up Express server
     * Add basic endpoints
     * Update error handling
   - ✅ Configure React Router
     * Set up route structure
     * Create layout components
     * Implement navigation
   - ✅ Create basic UI components
     * Design system setup
     * Responsive components
     * Mobile-first layout
   - ✅ Set up Redux store
     * Implement user state
     * Add web-specific actions
     * Configure persistence

3. Authentication System (Day 3) ✅
   - ✅ Create login page
   - ✅ Create registration page
   - ✅ Implement JWT system
   - ✅ Add auth middleware
   - ✅ Test auth flow
   - ⏳ Add social login options

4. Hunt Selection System (Day 4) ⏳
   - ⏳ Create hunt list page
   - ⏳ Implement hunt cards
   - ⏳ Create hunt details page
   - ⏳ Add filtering system
   - ⏳ Implement search
   - ⏳ Add sorting options

5. Payment Integration (Day 5) ⏳
   - ⏳ Set up Stripe integration
   - ⏳ Create payment form
   - ⏳ Implement group pricing
   - ⏳ Add receipt generation
   - ⏳ Set up webhooks
   - ⏳ Test payment flow

6. Team Management (Day 6) ⏳
   - ⏳ Create team interface
   - ⏳ Implement QR generation
   - ⏳ Add team join system
   - ⏳ Create member list
   - ⏳ Add leader controls
   - ⏳ Implement real-time updates

7. Hunt Experience (Day 7) ⏳
   - ⏳ Create map interface
   - ⏳ Implement location tracking
   - ⏳ Add clue display
   - ⏳ Create challenge interface
   - ⏳ Add progress tracking
   - ⏳ Implement scoring

8. Challenge System (Day 8) ⏳
   - ⏳ Create challenge types
   - ⏳ Implement trivia system
   - ⏳ Add photo challenges
   - ⏳ Create QR verification
   - ⏳ Add voting system
   - ⏳ Implement rewards

9. Real-time Features (Day 9) ⏳
   - ⏳ Set up WebSocket server
   - ⏳ Implement team updates
   - ⏳ Add progress sync
   - ⏳ Create notifications
   - ⏳ Add chat system
   - ⏳ Test real-time features

10. Map Integration (Day 10) ⏳
    - ⏳ Set up OpenStreetMap
    - ⏳ Create location markers
    - ⏳ Implement geofencing
    - ⏳ Add route display
    - ⏳ Create location verification
    - ⏳ Test map features

11. UI/UX Polish (Day 11) ⏳
    - ⏳ Add loading states
    - ⏳ Implement error handling
    - ⏳ Create animations
    - ⏳ Add transitions
    - ⏳ Implement responsive design
    - ⏳ Test on different devices

12. Testing & Bug Fixes (Day 12) ⏳
    - ⏳ Run integration tests
    - ⏳ Fix identified bugs
    - ⏳ Optimize performance
    - ⏳ Add error logging
    - ⏳ Create backup system
    - ⏳ Final testing

13. Documentation (Day 13) ⏳
    - ⏳ Update README
    - ⏳ Add code comments
    - ⏳ Create API docs
    - ⏳ Document data structures
    - ⏳ Add setup instructions
    - ⏳ Create user guide

14. Final Polish (Day 14) ⏳
    - ⏳ Code cleanup
    - ⏳ Performance optimization
    - ⏳ Security review
    - ⏳ Final testing
    - ⏳ Create deployment package
    - ⏳ Prepare for demo

## Next Steps

### Frontend Tasks
1. Hunt Management
   - [ ] Create hunt creation interface
   - [ ] Implement hunt details view
   - [ ] Add hunt search and filtering
   - [ ] Create hunt card component

2. Team Features
   - [ ] Implement team creation
   - [ ] Add team member management
   - [ ] Create team chat system
   - [ ] Add team leader controls

3. User Experience
   - [ ] Add loading states
   - [ ] Implement error messages
   - [ ] Add form validation
   - [ ] Create success notifications

4. Map Integration
   - [ ] Set up OpenStreetMap
   - [ ] Add location markers
   - [ ] Implement geofencing
   - [ ] Create route display

### Backend Tasks
1. Data Management
   - [ ] Create hunts.json structure
   - [ ] Create teams.json structure
   - [ ] Add data validation
   - [ ] Implement data backup

2. API Endpoints
   - [ ] Add hunt CRUD operations
   - [ ] Add team management endpoints
   - [ ] Implement hunt progress tracking
   - [ ] Add user profile updates

3. Authentication
   - [ ] Add password reset
   - [ ] Implement email verification
   - [ ] Add social login options
   - [ ] Create session management

4. Real-time Features
   - [ ] Set up WebSocket server
   - [ ] Add team updates
   - [ ] Implement chat system
   - [ ] Add progress sync

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Modern web browser

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/scaventure.git
cd scaventure
```

2. Install all dependencies:
```bash
npm run install-all
```

### Running the Application
1. Start both client and server:
```bash
npm run dev
```

This will start:
- Frontend at http://localhost:5173
- Backend at http://localhost:3000

### Testing
1. Create a new account using the registration form
2. Log in with your credentials
3. Explore the available hunts
4. Create or join a team
5. View your profile

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.