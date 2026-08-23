# Cyber Security Lab 🛡️

A comprehensive, modern cybersecurity education and technology platform designed for students, instructors, mentors, and administrators.

## Platform Overview

Cyber Security Lab combines:
- 📚 **Structured Learning** - Courses across beginner, intermediate, and advanced topics
- 🧪 **Practical Labs** - Isolated, safe cybersecurity lab environments
- 🏆 **Competitions** - CTF challenges, tournaments, and leaderboards
- 🤖 **AI Assistant** - Personalized learning companion
- 👥 **Community** - Discussion boards, mentorship, events
- 📊 **Analytics** - Comprehensive dashboards for all roles
- 🗺️ **GIS/GPS** - Geographic mapping and device tracking
- 📱 **Device Management** - Authorized device dashboards

## Technology Stack

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Zustand** - State management
- **Socket.io** - Real-time features
- **Leaflet** - Map integration
- **Recharts** - Data visualization
- **Framer Motion** - Animations

### Backend (Planned)
- **Node.js/Express** - REST API
- **PostgreSQL** - Database
- **WebSockets** - Real-time communication
- **Docker** - Container isolation for labs

## Project Structure

```
cyber-security-lab/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable React components
│   ├── pages/              # Page components
│   ├── lib/                # Utilities and helpers
│   ├── types/              # TypeScript types
│   ├── hooks/              # Custom React hooks
│   ├── store/              # Zustand stores
│   └── api/                # API client functions
├── public/                 # Static assets
├── docs/                   # Documentation
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/samueltech21/cyber-security-lab.git
cd cyber-security-lab

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Features

### 🎓 Student Platform
- Dashboard with XP, level, and progress tracking
- Course enrollment and learning paths
- Lab access and automated grading
- Quiz and exam management
- Achievement and certificate system
- Leaderboards and tournaments
- AI assistant for learning support

### 👨‍🏫 Instructor Dashboard
- Create and manage courses
- Design lessons and quizzes
- Track student progress
- Grade submissions
- Course analytics

### 🧑‍💻 Mentor Dashboard
- Student mentoring sessions
- Career guidance
- Progress tracking
- Feedback and study plans

### ⚙️ Admin Dashboard
- User management
- Platform configuration
- Analytics and monitoring
- Security settings
- System logs

### 👔 CEO/Executive Dashboard
- Business analytics
- Revenue tracking
- User growth metrics
- Platform health monitoring

## Cybersecurity Topics

### Beginner
- Computer fundamentals
- Internet fundamentals
- Networking basics
- Linux fundamentals
- Cybersecurity fundamentals
- Programming fundamentals

### Intermediate
- Network security
- Web security
- Digital forensics
- Security operations
- Authentication & Cryptography
- Secure programming

### Advanced
- Ethical hacking
- Penetration testing
- Threat intelligence
- Incident response
- Malware analysis
- Cloud security
- Security architecture

## Lab Environments

- **Linux Lab** - Command-line, permissions, shell scripting
- **Networking Lab** - TCP/IP, DNS, routing, firewalls
- **Web Security Lab** - XSS, SQL injection, CSRF
- **Digital Forensics** - Evidence analysis, log parsing
- **Incident Response** - Simulated breach scenarios
- **Capture the Flag** - Security challenges

## Real-time Features

- Live notifications
- Messaging system
- Collaborative study sessions
- Tournament updates
- Device status monitoring

## Security & Privacy

- Role-based access control (RBAC)
- Secure authentication
- Encrypted data storage
- Session management
- Audit logging
- Privacy controls
- Consent management

## Development Roadmap

- [x] Project setup and structure
- [ ] Authentication system
- [ ] Homepage and landing page
- [ ] Student dashboard
- [ ] Course management
- [ ] Lab environment
- [ ] AI assistant integration
- [ ] Community features
- [ ] Tournament system
- [ ] Admin dashboards
- [ ] Analytics system
- [ ] GIS/GPS features
- [ ] Device management
- [ ] Payment integration

## Contributing

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

## License

MIT License - See LICENSE file

## Support

For support, email support@cybersecuritylab.com or create an issue on GitHub.

---

**Built with ❤️ for cybersecurity education**
