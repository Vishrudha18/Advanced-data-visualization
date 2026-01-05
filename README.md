# 📊 Advanced Data Visualization Tool

A modern, frontend-only **Advanced Data Visualization Tool** built using **HTML, CSS, and JavaScript**.  
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

### 🔐 Authentication (Client-side)
- Register & Login functionality
- Session handling using `localStorage`
- Logout available across all pages
- Backend-ready authentication structure

---

## 🛠️ Tech Stack

- **HTML5** – Structure
- **CSS3** – Styling, glassmorphism, responsive design
- **JavaScript (Vanilla)** – Application logic
- **Chart.js** – Data visualization
- **Browser localStorage** – Persistence (dashboards & authentication)

---

## 🗂️ Project Structure

Advanced-Data-Visualization/
│
├── index.html
│
├── pages/
│   ├── home.html
│   ├── features.html
│   ├── dashboards.html
│   ├── upload.html
│   ├── visualize.html
│   ├── register.html
│   └── about.html
│
├── css/
│   ├── main.css
│   ├── theme.css
│   └── pages.css
│
├── js/
│   ├── app.js
│   ├── auth.js
│   ├── upload.js
│   ├── dataLoader.js
│   ├── chartManager.js
│   ├── aggregator.js
│   ├── metadata.js
│   ├── dashboardStorage.js
│   └── dashboardsPage.js
│
├── data/
│   └── sample.csv
│
├── .gitignore
└── README.md

## 🔐 How Authentication Works (No Backend)

- User data is stored in browser localStorage
- Registration stores { email, password }
- Login validates credentials from stored users
- Session is maintained using currentUser
- Logout clears session data

## 📌 How Dashboards Work

- Only chart configuration metadata is saved
- Stored information:

  **Chart type**
  **X-axis and Y-axis**
  **Dataset name**

- Raw datasets are not stored

**Dashboard Restore Flow:**

- Open a saved dashboard
- Re-upload the dataset
- Chart configuration is automatically restored

## 🔮 Future Enhancements

- Backend integration (Node.js + Database)
- Secure authentication with hashed passwords
- Persistent dataset storage
- Dashboard sharing
- Advanced analytics & filters
