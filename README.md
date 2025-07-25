# SATechHub - Learning Management System

A modern, comprehensive learning management system built with React, TypeScript, and Firebase.

## Features

### User Authentication
- Email/password authentication
- Google OAuth integration
- Role-based access control (Student, Teacher, Admin)

### Student Features
- Course enrollment and progress tracking
- Interactive dashboard with statistics
- Project submission system
- Real-time chat with teachers and peers
- Achievement badges and progress tracking

### Teacher Features
- Course creation and management
- LMS dashboard with auto-grading capabilities
- Student progress monitoring
- Real-time communication tools
- Performance analytics

### Admin Features
- User management and moderation
- Content moderation tools
- System monitoring and analytics
- Platform administration

## Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Backend:** Firebase (Authentication, Firestore, Storage)
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Build Tool:** Vite

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Firebase:
   - Create a Firebase project
   - Enable Authentication (Email/Password and Google)
   - Set up Firestore Database
   - Update `src/firebase/config.ts` with your Firebase configuration

4. Start the development server:
   ```bash
   npm run dev
   ```

## Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable the following services:
   - Authentication (Email/Password and Google providers)
   - Firestore Database
   - Storage

4. Update the Firebase configuration in `src/firebase/config.ts`

## Project Structure

```
src/
├── components/
│   ├── auth/          # Authentication components
│   ├── student/       # Student-specific components
│   ├── teacher/       # Teacher-specific components
│   ├── admin/         # Admin-specific components
│   └── shared/        # Shared components
├── contexts/          # React contexts
├── firebase/          # Firebase configuration
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License