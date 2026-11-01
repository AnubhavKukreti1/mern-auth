# mern-auth

## Application Preview

### Login Experience

<img src="./screenshots/login.png" width="90%" alt="Login page preview" />

### Registration Experience

<img src="./screenshots/registration.png" width="90%" alt="Registration page preview" />

### Dashboard

<img src="./screenshots/dashboard.png" width="90%" alt="Dashboard preview" />

## Environment configuration

The frontend uses `frontend/.env.development` for local development and
`frontend/.env.production` for production builds. Vite selects the matching
file automatically; `VITE_API_URL` is intentionally public frontend
configuration, not a secret.

For local development, run the backend on port `8000` and the Vite frontend on
port `5173`. Copy `backend/.env.example` to `backend/.env` and set the database,
JWT, and Cloudinary values for your environment.

For Render, use `backend` as the service root directory and `npm start` as the
start command. Set `NODE_ENV=production` and configure
`PRODUCTION_FRONTEND_URL=https://mern-auth-pqchqu1sr-anubhav-kukreti-s-projects.vercel.app`,
and the required backend secrets in the Render environment. The backend also
allows Vercel preview URLs matching this project's
`mern-auth-*-anubhav-kukreti-s-projects.vercel.app` hostname pattern.
JWT cookies use `SameSite=None; Secure` on Render so browsers can send them
between the Vercel frontend and Render API.
