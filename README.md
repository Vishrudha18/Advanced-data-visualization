# Advanced Data Visualization Tool

A dataset-agnostic, interactive data visualization web application built using HTML, CSS, JavaScript, and Chart.js.  
The tool dynamically analyzes uploaded datasets and generates charts based on user-selected attributes.



## ✨ Features
- Upload and visualize any CSV dataset
- Automatic column type detection (numeric / categorical)
- Dynamic X-axis and Y-axis selection
- Interactive charts (Bar, Line, Pie)
- Real-time chart updates
- Dark / Light mode with persistence
- Dataset-agnostic design (no hardcoded fields)

## 🛠 Tech Stack
- HTML5
- CSS3
- JavaScript (Vanilla)
- Chart.js
- GitHub Pages (Deployment)

## 🧠 How It Works
1. User uploads a dataset (CSV)
2. Application parses headers and rows dynamically
3. Column types are detected automatically
4. Valid chart controls are enabled
5. Data is aggregated and rendered as charts
6. Charts update instantly on user interaction

## 📂 Project Structure
advanced-data-visualization/
│
├── index.html
├── css/
├── js/
├── data/
└── assets/

## 📸 Screenshots
(Add screenshots here)

# 📊 Advanced Data Visualization Tool

A modern, web-based **Advanced Data Visualization Tool** inspired by **Tableau** and **Power BI**.  
This project enables users to upload datasets, create interactive charts, manage dashboards, and export visualizations — built entirely with **HTML, CSS, and JavaScript**.

---

## 🚀 Live Demo
👉 https://vishrudha18.github.io/Advanced-data-visualization/

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

```text
Advanced-Data-Visualization/
│
├── index.html
│
├── pages/
│   ├── home.html
│   ├── features.html
│   ├── dashboards.html
│   ├── upload.html
│   ├── login.html
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
