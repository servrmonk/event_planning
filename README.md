Event Planning Application

Project Overview

This Event Planning application is a comprehensive platform designed to facilitate seamless event planning and management. The application provides features for users to create, manage, and track events while maintaining a smooth user experience with its powerful backend and responsive frontend.

Features

User Registration & Authentication: Secure sign-up and login functionality.

Event Creation: Allows users to create and manage events.

Event Tracking: Track events and view details in real-time.

Responsive Design: Optimized for devices of all sizes.

Smooth Navigation: Leveraging react-router-dom for dynamic routing.

User Notifications: Toast notifications for user actions using react-hot-toast.

Scroll Animations: Enhance user experience with smooth scrolling using react-scroll.

Tech Stack

Frontend:

React: Library for building user interfaces.

React Router DOM: For routing between pages.

React Hot Toast: For elegant toast notifications.

React Scroll: For smooth scrolling effects.

Axios: For making HTTP requests.

Vite: Fast and optimized development environment.

Backend:

Node.js: JavaScript runtime environment.

Express.js: Framework for building RESTful APIs.

MongoDB: NoSQL database for storing event data.

Mongoose: Object Data Modeling (ODM) library for MongoDB.

Dotenv: For environment variable management.

Cors: For enabling Cross-Origin Resource Sharing.

Validator: To validate user inputs.

Installation

Prerequisites:

Node.js installed on your system.

MongoDB instance (local or cloud).

Frontend Setup:

Navigate to the client directory:

cd client

Install dependencies:

npm install

Start the development server:

npm run dev

Backend Setup:

Navigate to the server directory:

cd server

Install dependencies:

npm install

Set up the environment variables in a .env file:

PORT=3001
MONGODB_URI=<Your MongoDB URI>

Start the server:

npm run server

Usage

Open the frontend application at http://localhost:5173 (default Vite port).

Use the backend APIs hosted on http://localhost:3001 (or your configured port).

Folder Structure

Frontend

client/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page-level components
│   ├── assets/        # Static assets (images, etc.)
│   └── App.jsx        # Main application file
├── public/            # Public assets
└── package.json       # Frontend dependencies and scripts

Backend

server/
├── src/
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes
│   └── controllers/   # Request handlers
├── .env               # Environment variables
└── package.json       # Backend dependencies and scripts

License

This project is licensed under the ISC License.

