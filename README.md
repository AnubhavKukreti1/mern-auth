🚀 MERN Auth — Full Stack Authentication System

<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=28&pause=1000&color=36BCF7&center=true&vCenter=true&width=650&lines=Welcome+to+MERN+Auth;Secure+Authentication+System;Built+with+MERN+Stack;Login+%7C+Register+%7C+JWT+Auth" alt="Typing SVG" />

<p>
A full-stack authentication application built using the MERN stack,
featuring secure JWT authentication, protected routes, cookie-based sessions,
and Cloudinary integration.
</p>

!MongoDB !Express !React !Node

!License !Status

</div>

✨ Overview

MERN Auth is a full-stack authentication project designed to provide a secure and scalable authentication experience.

The application uses JWT-based authentication with HTTP-only cookies, allowing users to securely authenticate and access protected resources.

It is built with a separate frontend and backend architecture, making development and deployment easier.

🌟 Features
🔐 User registration and login.
🔑 JWT-based authentication.
🍪 Secure HTTP-only cookie authentication.
🛡️ Protected routes and authorization.
☁️ Cloudinary integration.
🔄 Persistent authentication sessions.
🌍 Separate development and production configurations.
🚀 Frontend deployment on Vercel.
⚡ Backend deployment on Render.
🔒 Cross-origin cookie support for production.
🛠️ Tech Stack
Technology	Purpose
React.js	Frontend UI
Vite	Frontend tooling
Node.js	Backend runtime
Express.js	REST API
MongoDB	Database
JWT	Authentication
Cloudinary	Cloud media management
Axios / Fetch	API communication
CSS	Styling
Vercel	Frontend deployment
Render	Backend deployment
📁 Project Structure
text
mern-auth/
│
├── backend/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── ...
│   │
│   ├── middleware/
│   │   └── ...
│   │
│   ├── models/
│   │   └── ...
│   │
│   ├── routes/
│   │   └── ...
│   │
│   ├── utils/
│   │   └── ...
│   │
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   │
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

Note: This is a suggested documentation structure. Adjust the folder and file names to match your actual repository.
⚙️ Installation & Setup
1. Clone the repository
bash
git clone https://github.com/YOUR_USERNAME/mern-auth.git

cd mern-auth

2. Backend setup

Navigate to the backend directory:

bash
cd backend
npm install


Create your environment file:

bash
cp .env.example .env


Configure the required environment variables in backend/.env.

Example:

env
PORT=8000
NODE_ENV=development

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret


Start the backend:

bash
npm run dev


Backend runs at:

text
http://localhost:8000

3. Frontend setup

Open another terminal:

bash
cd frontend
npm install


Configure frontend/.env.development:

env
VITE_API_URL=http://localhost:8000


Start the frontend:

bash
npm run dev


Frontend runs at:

text
http://localhost:5173

🔐 Environment Configuration

The project uses separate frontend environment configurations for development and production.

File	Purpose
frontend/.env.development	Local development
frontend/.env.production	Production build
backend/.env	Backend environment variables
backend/.env.example	Backend configuration template

Important: Never commit your backend .env file, JWT secrets, database credentials, or Cloudinary API secret.

VITE_API_URL is public frontend configuration and should only contain the API base URL.

🌐 Deployment Guide
Frontend — Vercel
Push your project to GitHub.
Import the frontend project into Vercel.
Configure the frontend root directory as frontend.
Add the production environment variable:
env
VITE_API_URL=YOUR_RENDER_BACKEND_URL

Deploy the application.
Backend — Render
Create a new Web Service on Render.
Connect your GitHub repository.
Configure:
Setting	Value
Root Directory	backend
Build Command	npm install
Start Command	npm start
Add the following environment variables:
env
NODE_ENV=production

PRODUCTION_FRONTEND_URL=https://mern-auth-pqchqu1sr-anubhav-kukreti-s-projects.vercel.app

PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

Deploy the backend.
🍪 Production Cookie Configuration

The backend supports cross-origin authentication between the Vercel frontend and Render backend.

On Render, JWT cookies use:

SameSite=None
Secure=true
HTTP-only cookies

The backend also allows matching Vercel preview URLs for this project.

Note: Ensure your backend CORS configuration allows the deployed frontend origin and credentials.

🔄 Authentication Flow
mermaid
flowchart TD
    A[User Opens Application] --> B{Authenticated?}
    B -->|No| C[Login / Register]
    B -->|Yes| D[Access Protected Dashboard]
    C --> E[Frontend Sends API Request]
    E --> F[Express Backend]
    F --> G[Validate User Credentials]
    G --> H[Generate JWT]
    H --> I[Set HTTP-only Cookie]
    I --> D
    D --> J[Protected API Request]
    J --> K[Verify JWT Cookie]
    K --> L{Valid Token?}
    L -->|Yes| M[Allow Access]
    L -->|No| N[Reject / Redirect to Login]

📡 API Documentation

The backend exposes authentication-related API endpoints.

Document your actual endpoints here:

Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Authenticate user
POST	/api/auth/logout	Logout user
GET	/api/auth/user	Get authenticated user

Update these routes according to your actual backend implementation.

📸 Screenshots

Add screenshots of your application here.

md
![Login Page](./screenshots/login.png)
![Register Page](./screenshots/register.png)
![Dashboard](./screenshots/dashboard.png)

🚀 Future Improvements
Email verification.
Forgot password functionality.
Password reset functionality.
Google OAuth authentication.
Two-factor authentication.
User profile management.
Rate limiting and additional security improvements.
🤝 Contributing

Contributions, issues, and feature requests are welcome!

Fork the repository.
Create a feature branch.
Commit your changes.
Push to your branch.
Open a Pull Request.
👨‍💻 Author

Anubhav Kukreti

GitHub: @anubhav-kukreti

<div align="center">

⭐ Show Some Support!

If you like this project, consider giving it a ⭐ on GitHub.

Built with ❤️ using the MERN Stack

</div>
