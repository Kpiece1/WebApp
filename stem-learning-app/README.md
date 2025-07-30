# STEM-Learn: Interactive STEM Education Platform

A modern, responsive web application for STEM education that makes learning programming, mathematics, and robotics engaging and fun for young learners.

## 🚀 Features

### Landing Page
- **Hero Section**: Eye-catching gradient text animation with "Coding Math: Where Numbers Meet Robots" headline
- **Interactive CTAs**: "Try Free Demo" and "Learn More" buttons with hover animations
- **Course Categories**: Featured cards showcasing Coding Math, Robotics, and Python Playground
- **Responsive Design**: Mobile-first approach supporting devices from 320px width

### Dashboard
- **Personalized Welcome**: Dynamic greeting with user avatar and progress tracking
- **Learning Modules**: Interactive cards showing progress bars, next lessons, and completion status
- **Statistics Overview**: Learning streak, total progress, badges earned, and weekly hours
- **Achievement System**: Badge collection with visual progress indicators

### Authentication
- **Modern Login/Signup**: Clean forms with validation and social login options
- **Password Security**: Show/hide password toggles and confirmation validation
- **Social Integration**: Google and GitHub authentication placeholders

### Design System
- **Color Palette**: Gradient theme using indigo (#6366F1), purple (#8B5CF6), and pink (#EC4899)
- **Typography**: Google Fonts - Rubik for headings, Inter for body text
- **Animations**: Framer Motion powered smooth transitions and hover effects
- **Dark Mode**: Full dark mode support with system preference detection

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS 3 with custom design tokens
- **Animations**: Framer Motion for smooth interactions
- **Icons**: React Icons (Font Awesome)
- **TypeScript**: Full type safety and developer experience
- **Responsive**: Mobile-first design with custom breakpoints

## 📁 Project Structure

```
stem-learning-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── auth/              # Authentication pages
│   │   │   ├── login/         # Login page
│   │   │   └── signup/        # Signup page
│   │   ├── dashboard/         # Protected dashboard
│   │   ├── globals.css        # Global styles and animations
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Landing page
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── Navbar.jsx     # Navigation with user menu
│   │   │   └── Footer.jsx     # Site footer
│   │   └── ui/                # Reusable UI components
│   │       ├── GradientButton.jsx   # Animated button component
│   │       ├── CategoryCard.jsx     # Course category cards
│   │       └── DashboardCard.jsx    # Learning module cards
│   └── data/                  # Placeholder data
│       ├── categories.json    # Course categories
│       └── dashboard-items.json     # User progress data
├── tailwind.config.ts         # Tailwind configuration
└── package.json
```

## 🎨 Design Features

### Custom Animations
- **Gradient Text**: Animated gradient background for headlines
- **Card Hover Effects**: Smooth scale and shadow transitions
- **Progress Bars**: Animated fill effects with delays
- **Page Transitions**: Staggered animations for content loading

### Responsive Breakpoints
- **Mobile**: 320px+ (1 column layout)
- **Tablet**: 768px+ (2 column layout)
- **Desktop**: 1024px+ (3 column layout)
- **Large**: 1280px+ (optimized spacing)

### Accessibility
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader friendly navigation
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color combinations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd stem-learning-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages Overview

### Landing Page (`/`)
- Hero section with animated gradient text
- Featured course categories
- Benefits and features showcase
- Call-to-action sections

### Dashboard (`/dashboard`)
- User welcome section with avatar
- Learning statistics overview
- Interactive course progress cards
- Achievement badges display

### Authentication (`/auth/login`, `/auth/signup`)
- Modern form design with validation
- Social login integration
- Password security features
- Responsive mobile layout

## 🎯 Key Components

### GradientButton
Reusable button component with multiple variants:
- `primary`: Gradient background with animations
- `secondary`: Outlined style with hover effects
- `outline`: Border-only design

### CategoryCard
Course category display with:
- Icon and gradient backgrounds
- Progress indicators
- Difficulty levels
- Interactive hover effects

### DashboardCard
Learning module cards featuring:
- Progress bars with animations
- Next lesson previews
- Completion statistics
- Action buttons

## 🌟 Features Implemented

- ✅ Responsive design (320px to desktop)
- ✅ Dark mode with system preference
- ✅ Smooth animations and transitions
- ✅ Interactive UI components
- ✅ TypeScript for type safety
- ✅ Modern authentication flows
- ✅ Progress tracking visualization
- ✅ Mobile-first approach
- ✅ Accessibility standards
- ✅ SEO-friendly structure

## 🔮 Future Enhancements

- [ ] Backend integration with authentication
- [ ] Real progress tracking and data persistence
- [ ] Interactive coding playground
- [ ] Video lesson integration
- [ ] Real-time collaboration features
- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Gamification elements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first styling approach
- **Framer Motion** for smooth animations
- **React Icons** for the comprehensive icon library

---

**Built with ❤️ for young innovators and STEM enthusiasts**
