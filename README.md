# ResuMate - AI-Powered Resume Generator

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.x-brightgreen.svg)
![React](https://img.shields.io/badge/React-18-blue.svg)

ResuMate is an intelligent resume generator that leverages AI to create professional, tailored resumes. Built with Spring Boot and React, it offers a seamless experience for creating ATS-friendly resumes with AI-powered content suggestions.

## ✨ Features

- AI-powered resume content generation
- Multiple professional templates
- ATS-friendly formatting
- Real-time preview
- PDF export functionality
- Custom sections and layouts
- AI-based job description analysis
- Keyword optimization suggestions

## 🚀 Tech Stack

### Backend
- Java Spring Boot 3.2.x
- Spring AI with Ollama integration
- Spring Security
- PostgreSQL
- Maven

### Frontend
- React 18
- TailwindCSS
- Axios
- React-PDF

## 📋 Prerequisites

- Java 17 or higher
- Node.js 18.x or higher
- PostgreSQL 14+
- Ollama (for AI features)
- Maven 3.8+

## 🛠️ Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/resumate.git
cd resumate
```

2. Setup Backend
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

3. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

4. Configure Environment Variables
```bash
# Backend (.env)
DB_URL=jdbc:postgresql://localhost:5432/resumate
DB_USERNAME=your_username
DB_PASSWORD=your_password
OLLAMA_API_URL=http://localhost:11434

# Frontend (.env)
VITE_API_URL=http://localhost:8080/api
```

## 🌟 Getting Started

1. Start the backend server (runs on port 8080)
2. Start the frontend development server (runs on port 5173)
3. Navigate to `http://localhost:5173` in your browser
4. Create an account or login
5. Start generating your AI-powered resume!

## 📖 API Documentation

API documentation is available at `http://localhost:8080/swagger-ui.html` when running the backend server.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🔗 Links

- [Documentation](link-to-docs)
- [Issue Tracker](link-to-issues)
- [Project Wiki](link-to-wiki)

## 👥 Authors

- Your Name - [GitHub Profile](your-github-profile)

## 🙏 Acknowledgments

- Spring Boot team for the amazing framework
- React team for the frontend framework
- Ollama team for the AI capabilities
- All contributors who have helped this project grow

## 📧 Contact

For any queries or support, please reach out to:
- Email: your.email@example.com
- Twitter: [@YourTwitterHandle](https://twitter.com/YourTwitterHandle)

---
Made with ❤️ by [Your Name/Team]
