<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&weight=700&size=32&duration=3000&pause=800&color=38BDF8&center=true&vCenter=true&width=850&height=70&lines=Welcome+to+MERN+Auth+%F0%9F%91%8B;Secure+Authentication+Platform;Built+with+MongoDB+%7C+Express+%7C+React;Designed+for+Security+%26+Scalability" alt="Animated MERN Auth Banner" />

<br/>

A modern, secure and scalable authentication system built with the MERN stack.

JWT Authentication • HTTP-only Cookies • Protected Routes • Cloudinary Integration

<br/>

<a href="YOUR_LIVE_DEMO_URL">
<img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Project-38BDF8?style=for-the-badge" alt="Live Demo"/>
</a>
<a href="YOUR_GITHUB_REPOSITORY_URL">
<img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub"/>
</a>

<br/><br/>

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>

<br/>

<img src="https://img.shields.io/badge/Authentication-JWT-blue?style=flat-square"/>
<img src="https://img.shields.io/badge/Security-HTTP--Only_Cookies-success?style=flat-square"/>
<img src="https://img.shields.io/badge/Deployment-Vercel_%2B_Render-purple?style=flat-square"/>

</div>

✨ About The Project

MERN Auth is a full-stack authentication platform developed using MongoDB, Express.js, React.js and Node.js.

The project provides a secure authentication architecture using JSON Web Tokens (JWT), HTTP-only cookies and protected routes.

Designed with separate frontend and backend environments, it supports both local development and cloud deployment.

The goal is to create a reliable authentication foundation with a clean architecture, secure session handling and a smooth user experience.

🌟 Key Features

<table>
<tr>
<td width="50%">

🔐 Secure Authentication
User registration and login
JWT-based authentication
HTTP-only cookie sessions
Secure token validation

</td>
<td width="50%">

🛡️ Application Security
Protected routes
Authentication middleware
Cross-origin cookie support
Secure production cookies

</td>
</tr>
<tr>
<td width="50%">

☁️ Cloud Integration
Cloudinary integration
Cloud-based media management
Environment-based configuration

</td>
<td width="50%">

⚡ Modern Architecture
React + Vite frontend
Express REST API
MongoDB database
Separate frontend/backend deployment

</td>
</tr>
</table>

🧰 Technology Stack

<div align="center">

Frontend

<img src="https://skillicons.dev/icons?i=react,vite,js,html,css" alt="Frontend technologies"/>

Backend & Database

<img src="https://skillicons.dev/icons?i=nodejs,express,mongodb" alt="Backend technologies"/>

Tools & Deployment

<img src="https://skillicons.dev/icons?i=git,github,vercel" alt="Development tools"/>

<br/>

<img src="https://img.shields.io/badge/Render-Backend_Deployment-46E3B7?style=for-the-badge&logo=render&logoColor=black"/>
<img src="https://img.shields.io/badge/Cloudinary-Media_Storage-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white"/>

</div>

🏗️ System Architecture

The application follows a client-server architecture with a dedicated frontend, backend API and database.

```mermaid
flowchart TB
    U(["👤 User"])
    FE["⚛️ React + Vite Frontend"]
    API["🚀 Express.js REST API"]
    AUTH["🔐 JWT Authentication"]
    DB[("🍃 MongoDB Database")]
    CLOUD["☁️ Cloudinary"]

    U <--> FE
    FE <-->|HTTP Requests| API
    API <--> AUTH
    API <--> DB
    API <--> CLOUD

    style U fill:#172554,stroke:#38bdf8,color:#fff
    style FE fill:#312e81,stroke:#818cf8,color:#fff
    style API fill:#064e3b,stroke:#34d399,color:#fff
    style AUTH fill:#713f12,stroke:#facc15,color:#fff
    style DB fill:#14532d,stroke:#4ade80,color:#fff
    style CLOUD fill:#312e81,stroke:#818cf8,color:#fff
```

📂 Project Structure
```text
mern-auth/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   │
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env.development
│   ├── .env.production
│   ├── index.html
│   └── package.json
│
└── README.md
 ```


🔄 Authentication Workflow
```mermaid
flowchart TD
    A(["👤 User"]) --> B["Open Application"]
    B --> C{"Authenticated?"}

    C -->|No| D["Login / Register"]
    C -->|Yes| E["Protected Dashboard"]

    D --> F["Frontend API Request"]
    F --> G["Express Backend"]
    G --> H["Validate Credentials"]
    H --> I["Generate JWT"]
    I --> J["Set HTTP-only Cookie"]

    J --> E

    E --> K["Protected API Request"]
    K --> L["Verify JWT"]
    L --> M{"Token Valid?"}

    M -->|Yes| N(["✅ Access Granted"])
    M -->|No| O(["❌ Access Denied"])

    style N fill:#065f46,stroke:#34d399,color:#fff
    style O fill:#7f1d1d,stroke:#f87171,color:#fff
```
⚙️ Getting Started

Get MERN Auth up and running locally by following the installation and configuration steps below.

📋 Prerequisites

Make sure the following tools and services are available before getting started.

Requirement	Description	Link
Node.js	JavaScript runtime	Download
MongoDB	NoSQL database	Get Started
Git	Version control	Download
Cloudinary	Cloud media management	Sign Up
1. 📥 Clone the Repository

Clone the project and navigate to its root directory.

bash
git clone YOUR_GITHUB_REPOSITORY_URL

cd mern-auth

2. 🔧 Backend Configuration

Navigate to the backend directory and install the required dependencies.

bash
cd backend
npm install

Environment Setup

Create a .env file using the provided example configuration.

bash
cp .env.example .env


Configure the following variables in backend/.env:

env
PORT=8000
NODE_ENV=development

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

Start the Backend Server
bash
npm run dev


<details>
<summary><strong>📌 Backend Configuration Details</strong></summary>

Component	Configuration
Runtime	Node.js
Framework	Express.js
Server Port	8000
Database	MongoDB
Authentication	JWT
Media Management	Cloudinary

</details>

3. ⚛️ Frontend Configuration

Open a separate terminal and navigate to the frontend directory.

bash
cd frontend
npm install

Environment Setup

Configure frontend/.env.development:

env
VITE_API_URL=http://localhost:8000

Start the Frontend Server
bash
npm run dev

4. 🌐 Access the Application

Once both servers are running, your application will be available at:

Service	Local URL	Status
⚛️ Frontend	localhost:5173	React + Vite
🚀 Backend	localhost:8000	Express API
🔑 Environment Configuration

MERN Auth uses separate environment configurations for frontend and backend services.

Environment Variables Reference
Variable	Location	Description
VITE_API_URL	Frontend	Backend API base URL
PORT	Backend	Server port
NODE_ENV	Backend	Application environment
MONGODB_URI	Backend	MongoDB connection string
JWT_SECRET	Backend	JWT signing secret
CLOUDINARY_CLOUD_NAME	Backend	Cloudinary account name
CLOUDINARY_API_KEY	Backend	Cloudinary API key
CLOUDINARY_API_SECRET	Backend	Cloudinary API secret
PRODUCTION_FRONTEND_URL	Backend	Production frontend origin
Environment Files
File	Purpose
frontend/.env.development	Local frontend configuration
frontend/.env.production	Production frontend configuration
backend/.env	Backend environment variables
backend/.env.example	Backend environment template
🔒 Security Best Practices
Never commit your actual backend .env file.
Never expose JWT secrets or database credentials in frontend code.
Never expose your Cloudinary API secret.
Remember that Vite variables prefixed with VITE_ are publicly accessible in the browser.
Use strong, unique production secrets.
🏗️ Application Architecture

MERN Auth follows a client-server architecture with independent frontend and backend services.

 ```mermaid
flowchart TB
    USER(["👤 User"])

    subgraph FRONTEND["⚛️ Frontend — Vercel / Localhost"]
        UI["React + Vite"]
        PAGES["Application Pages"]
        API_CLIENT["API Client"]
    end

    subgraph BACKEND["🚀 Backend — Render / Localhost"]
        API["Express REST API"]
        AUTH["JWT Authentication"]
        MIDDLEWARE["Authentication Middleware"]
        CONTROLLER["Controllers"]
    end

    subgraph SERVICES["☁️ External Services"]
        DB[("MongoDB")]
        CLOUD["Cloudinary"]
    end

    USER <--> UI
    UI <--> PAGES
    PAGES <--> API_CLIENT
    API_CLIENT <-->|HTTP + Cookies| API
    API --> AUTH
    AUTH --> MIDDLEWARE
    MIDDLEWARE --> CONTROLLER
    CONTROLLER <--> DB
    CONTROLLER <--> CLOUD

    style USER fill:#172554,stroke:#38bdf8,color:#fff
    style UI fill:#312e81,stroke:#818cf8,color:#fff
    style API fill:#064e3b,stroke:#34d399,color:#fff
    style AUTH fill:#713f12,stroke:#facc15,color:#fff
    style DB fill:#14532d,stroke:#4ade80,color:#fff
    style CLOUD fill:#312e81,stroke:#818cf8,color:#fff
 ```


🔐 How Authentication Works
The user submits login or registration credentials.
The React frontend sends an API request to Express.
The backend validates the submitted credentials.
A JWT is generated after successful authentication.
The JWT is stored in an HTTP-only cookie.
Subsequent protected requests include the authentication cookie.
Authentication middleware verifies the token before granting access.
🌍 Deployment Guide

MERN Auth uses a split deployment architecture, where the frontend and backend are hosted independently.

🚀 Deployment Architecture
 ``` mermaid
flowchart TB
    USER(["🌐 End User"])

    subgraph VERCEL["⚛️ Vercel"]
        FRONTEND["React + Vite Frontend"]
    end

    subgraph RENDER["🚀 Render"]
        BACKEND["Express.js Backend"]
        AUTH["JWT + Cookie Authentication"]
    end

    subgraph MONGODB["🍃 MongoDB Atlas"]
        DATABASE[("Application Database")]
    end

    subgraph CLOUDINARY["☁️ Cloudinary"]
        MEDIA["Media Storage"]
    end

    USER <-->|HTTPS| FRONTEND
    FRONTEND <-->|API Requests + Credentials| BACKEND
    BACKEND <--> AUTH
    AUTH <--> DATABASE
    BACKEND <--> MEDIA

    style USER fill:#172554,stroke:#38bdf8,color:#fff
    style FRONTEND fill:#312e81,stroke:#818cf8,color:#fff
    style BACKEND fill:#064e3b,stroke:#34d399,color:#fff
    style AUTH fill:#713f12,stroke:#facc15,color:#fff
    style DATABASE fill:#14532d,stroke:#4ade80,color:#fff
    style MEDIA fill:#312e81,stroke:#818cf8,color:#fff
 ```

⚛️ Frontend Deployment — Vercel

Deploy the React frontend using Vercel.

Deployment Steps
Push your project to GitHub.
Open Vercel.
Import your GitHub repository.
Configure the frontend root directory.
Setting	Value
Root Directory	frontend
Framework	Vite
Build Command	npm run build
Output Directory	dist
Production Environment Variable

Add the following variable in Vercel:

env
VITE_API_URL=YOUR_RENDER_BACKEND_URL

Deploy your application.
🚀 Backend Deployment — Render

Deploy the Express backend using Render.

Deployment Steps
Open Render.
Create a new Web Service.
Connect your GitHub repository.
Configure the backend service.
Setting	Value
Root Directory	backend
Runtime	Node.js
Build Command	npm install
Start Command	npm start
Production Environment Variables

Configure the following variables in Render:

env
NODE_ENV=production

PRODUCTION_FRONTEND_URL=https://mern-auth-pqchqu1sr-anubhav-kukreti-s-projects.vercel.app

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

Click Deploy Web Service.
🍪 Production Cookie Configuration

The application supports cross-origin authentication between the Vercel frontend and Render backend.

The production JWT cookie configuration uses:

Cookie Attribute	Value	Purpose
HttpOnly	true	Prevents JavaScript access to the cookie
SameSite	None	Allows cross-site cookie requests
Secure	true	Ensures cookies are sent over HTTPS
Important Deployment Considerations
Configure backend CORS to allow the production frontend origin.
Enable credential support in the CORS configuration.
Include credentials in frontend API requests.
Ensure the frontend uses the correct Render backend URL.
Keep all backend credentials private.

The backend also allows matching Vercel preview URLs under this project's hostname pattern.

📡 API Reference

The following table illustrates the authentication API structure. Confirm the actual endpoints in your backend before publishing.

Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Authenticate a user
POST	/api/auth/logout	Logout the authenticated user
GET	/api/auth/user	Retrieve authenticated user details


📸 Application Preview

<div align="center">

Login Experience

<img src="./screenshots/login.png" width="90%" alt="Login page preview"/>

Registration Experience

<img src="./screenshots/registration.png" width="90%" alt="Registration page preview"/>

Dashboard

<img src="./screenshots/dashboard.png" width="90%" alt="Dashboard preview"/>

</div>

🔮 Future Roadmap
Email verification.
Forgot password functionality.
Password reset functionality.
Google OAuth integration.
Two-factor authentication.
User profile management.
Enhanced API rate limiting.
Automated testing.
🤝 Contributing

Contributions are always welcome!

Fork this repository.
Create a feature branch.
Commit your changes.
Push your branch.
Submit a Pull Request.

If you find a bug or have a feature request, feel free to open an issue.

👨‍💻 Developer

<div align="center">

Anubhav Kukreti

Full-Stack Developer | MERN Stack Enthusiast

<a href="https://github.com/anubhav-kukreti">
<img src="https://img.shields.io/badge/GitHub-Anubhav_Kukreti-181717?style=for-the-badge&logo=github"/>
</a>

<br/><br/>

Building secure and scalable web experiences.

</div>

<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&weight=600&size=22&pause=1000&color=38BDF8&center=true&vCenter=true&width=650&lines=Thanks+for+visiting!+%E2%9C%A8;Star+%E2%AD%90+the+repository;Happy+Coding!+%F0%9F%9A%80" alt="Animated footer"/>

<br/>

⭐ If you found this project useful, consider giving it a star!

**Author -- Anubhav Kukreti**

</div>
