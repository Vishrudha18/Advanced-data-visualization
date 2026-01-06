# 📊 Advanced Data Visualization Tool

A modern,**Advanced Data Visualization Tool** built using **HTML, CSS, and JavaScript**.  

A **full-stack web application** that enables users to upload datasets, generate interactive visualizations, and securely save dashboards using authentication and MongoDB

This project allows users to **log in, upload data, visualize datasets, and explore interactive dashboards** with a clean and professional UI.

🔗 **Live Demo:**  
 https://vishrudha18.github.io/Advanced-data-visualization/

---

## 🚀 Project Overview

The **Advanced Data Visualization Tool** is a frontend-only analytics application designed to demonstrate how powerful data visualization workflows can be implemented **without any backend**.

It focuses on:
- Clean UI/UX
- Modular JavaScript architecture
- Real-world product behavior
- Scalability for future backend integration

---

## ✨ Features

### 🔐 Authentication
- User Registration & Login
- Password hashing with **bcrypt**
- Secure authentication using **JWT**
- Protected routes for dashboards

### 📁 Data Upload
- Upload **CSV** and **JSON** files
- Drag & drop upload support
- Dataset preview:
  - File name
  - File size
  - Column names

### 📈 Data Visualization
- Interactive charts using **Chart.js**
- Supported chart types:
  - Bar
  - Line
  - Pie
  - Doughnut
  - Radar
  - Polar Area
  - Scatter
  - Bubble
- Dynamic X-axis and Y-axis selection
- Light / Dark theme toggle

### 📊 Dashboards
- Save chart configurations as dashboards
- View dashboards in a gallery
- Open saved dashboards
- Rename dashboards
- Delete dashboards
- Export charts as **PNG images**

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Chart.js

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt

---

## 🗂️ Project Structure

Advanced-data-visualization/
│
├── frontend/
│ ├── css/
│ ├── js/
│ └── pages/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│ └── .env
│
├── .gitignore
└── README.md

---

## ▶️ How to Run the Project

### 1️⃣ Backend Setup
cd backend
npm install
node server.js

#### Expected output:
MongoDB connected
Server running on port 5003

### 2️⃣ Frontend Setup

Open frontend/index.html using Live Server in VS Code
OR

Open index.html directly in the browser

---

## 📌 How Dashboards Work

- Only chart configuration metadata is saved
- Stored information:

  **Chart type**
  **X-axis and Y-axis**
  **Dataset name**

- Raw datasets are not stored

---

## 🧪 How to Verify Backend Connection

- Login successfully
- Save a dashboard
- Check MongoDB for saved dashboard records
- Network tab shows API calls to localhost:5003

---

## 🔮 Future Enhancements

- Dashboard sharing
- Advanced chart customization
- Cloud deployment
- Role-based access control
- Dataset analytics & insights
