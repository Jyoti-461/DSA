📘 Smart Online Examination & Cheating Analytics System
📌 Project Overview

The Smart Online Examination & Cheating Analytics System is a MERN stack–based application that conducts online exams while monitoring student behavior to detect potential cheating.
It uses Data Structure concepts such as hash maps, counters, and sliding window techniques to analyze activities like tab switching and rapid answer submissions and generates a cheating risk report for administrators.

🛠️ Technologies Used
Frontend

React.js

JavaScript (ES6)

HTML5, CSS3

Axios

Chart.js (for analytics visualization)

Backend

Node.js

Express.js

MongoDB

Mongoose

Data Structure Concepts

Hash Maps

Arrays & Lists

Sliding Window Technique

Counters / Frequency Analysis

📂 Project Structure
DSA-MERN-Project/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── dsa/
│   │   ├── slidingWindow.js
│   │   └── riskCalculator.js
│   ├── models/
│   │   ├── ActivityLog.js
│   │   ├── Question.js
│   │   ├── Response.js
│   │   ├── RiskReport.js
│   │   └── Student.js
│   ├── routes/
│   │   ├── studentRoutes.js
│   │   ├── examRoutes.js
│   │   └── adminRoutes.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   └── package.json
│
└── README.md

⚙️ Environment Setup & Requirements
System Requirements

Windows 10 / 11

Minimum 8 GB RAM (recommended)

Internet connection

Software Requirements

Node.js (v16 or above)
👉 https://nodejs.org/

MongoDB Compass
👉 https://www.mongodb.com/try/download/compass

Code Editor (VS Code recommended)

🔧 Installation Steps
1️⃣ Clone or Download the Project
git clone <project-repository-url>


OR
Download and extract the ZIP file.

2️⃣ Backend Setup
cd backend
npm install


This installs:

express

mongoose

cors

nodemon (if used)

3️⃣ Frontend Setup
cd frontend
npm install


This installs:

react

axios

react-router-dom

chart.js

react-chartjs-2

▶️ Running the Project
Step 1: Start MongoDB

Open MongoDB Compass

Connect to:

mongodb://localhost:27017

Step 2: Start Backend Server
cd backend
node server.js


Output:

Server running on port 5000
MongoDB connected

Step 3: Start Frontend Server
cd frontend
npm start


Frontend runs at:

http://localhost:3000

🧪 Application Flow

Student starts the online exam

Timer begins for each question

System tracks:

Tab switching

Rapid answers

Responses and activities are stored in MongoDB

After exam completion:

System calculates risk score

Redirects to Admin Dashboard

Admin views:

Cheating indicators

Risk score and risk level

Analytics charts

📊 Admin Dashboard Features

Tab Switch Count

Rapid Answer Count

Average Response Time

Cheating Risk Score

Risk Level (LOW / MEDIUM / HIGH)

Graphical analytics using charts

🎯 Key Features

Real-time cheating detection

Session-based exam tracking using examId

Data structure–based analysis

Clean and user-friendly UI

Secure backend with MongoDB

🎓 Academic Relevance

This project demonstrates:

Practical use of Data Structures

Full-stack web development

Real-time monitoring systems

Analytical decision-making using algorithms

📌 Future Enhancements

Webcam-based proctoring

AI-based behavior analysis

Question randomization

Multiple exam support