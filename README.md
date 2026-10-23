# 🚗 AutoLoc — Car Rental Website

A responsive car rental website developed using HTML, CSS, and JavaScript. AutoLoc allows users to explore available vehicles, estimate rental costs, and contact the agency through a simple and user-friendly interface.

## 📌 Project Overview

AutoLoc is a front-end web development project designed to simplify the car rental experience. It provides a clean interface with a burgundy-themed design and interactive features for browsing cars and submitting forms.

## ✨ Features

- **Home Page:** Introduction to the agency and navigation between pages.
- **Car Catalogue:** Displays available vehicles, categories, fuel types, and daily rental prices.
- **Search and Sorting:** Interactive catalogue using DataTables.
- **Rental Quote Calculator:** Estimates the rental cost based on the selected vehicle and rental duration.
- **Contact Form:** Validates user information before displaying a confirmation message.
- **Enhanced Selection:** Select2 integration for a better vehicle-selection experience.
- **Responsive Design:** Adapts to desktop and mobile screens.
- **Burgundy Theme:** Consistent styling across the website.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- jQuery
- DataTables
- Select2

## 📂 Project Structure

```text
AutoLoc/
├── index.html
├── index2.html
├── catalogue.html
├── devis.html
├── contact.html
├── style.css
├── style2.css
├── script.js
├── script2.js
└── data/
    └── vehicles.csv
```

*Note: The structure above represents the intended project organization. Adjust it to match the files actually present in your repository.*

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
```

### 2. Open the project

Open the project folder in Visual Studio Code.

### 3. Run the website

Open `index.html` or `index2.html` in your browser. You can also use the **Live Server** extension in Visual Studio Code for local development.

> **Note:** jQuery, DataTables, and Select2 are loaded through CDN links, so an internet connection is required for these features.

## 🧮 Rental Price Calculation

The estimated rental cost is calculated using the following formula:

**Total Price = Daily Rental Price × Number of Days**

The displayed amount is an estimate and does not represent a confirmed booking.

## 📬 Contact

For questions, suggestions, or improvements, feel free to open an issue in this repository.

## 📄 License

This project was developed for educational purposes.
