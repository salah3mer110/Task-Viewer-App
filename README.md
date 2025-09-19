# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Task Viewer App

A simple task management web application built with **React.js**, **Tailwind CSS**, and **Axios** for API interactions. Users can view, create, edit, delete, and filter tasks by category. The project focuses on state management, responsive design, and smooth UI interactions.

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```
2. Install dependencies
```
npm install
```

This installs all required packages, including React, Axios, and React Icons.

3. Configure Tailwind CSS

If Tailwind CSS is not yet installed:

```npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add Tailwind directives in your CSS file:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Add to tailwind.config.js
```/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#868e96",
          700: "#495057",
          800: "#343a40", // لونك الأساسي
          900: "#212529",
        },
        secondary: {
          50: "#f9f9fb",
          100: "#f1f3f5",
          200: "#e4e6eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        third: {
          50: "#e6faff",
          100: "#b3f0fa",
          200: "#80e1f5",
          300: "#4dd1ef",
          400: "#26c2e6",
          500: "#1098ad", // الأساسي
          600: "#0d7a8a",
          700: "#095c66",
          800: "#053d44",
          900: "#021f22",
        },
        fourth: {
          50: "#e6f7fb",
          100: "#b3e5f5",
          200: "#80d2ef",
          300: "#4dbfe6",
          400: "#26acd9",
          500: "#1183ad", // الأساسي
          600: "#0d678a",
          700: "#094b66",
          800: "#053044",
          900: "#021622",
        },
        fifth: {
          50: "#f2f4f5",
          100: "#e6e9eb",
          200: "#cfd3d6",
          300: "#b8bcc1",
          400: "#92989e",
          500: "#6c757d",
          600: "#5c636a",
          700: "#495057", // الأساسي
          800: "#343a40",
          900: "#212529",
        },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```
4. Install additional dependencies
```npm install axios react-icons```

5. Start the development server
```npm run dev```

🛠️ Technologies Used

- React.js – Frontend library for building UI

- Context API

- Tailwind CSS – Utility-first CSS framework for styling

- Axios – HTTP client for API requests

- React Icons – Vector icons for UI

Supabase – Backend for task data (CRUD operations)

Chat Usage
- **code rearrangement,adding comments, testing & checking unkown bugs.
## 🏆 Challenges & Lessons Learned

- **Axios & API Integration:** Gained experience integrating Axios for CRUD operations and handling asynchronous requests effectively.  
- **State Management:** Learned to manage tasks state across multiple components using Context API and custom hooks.  
- **Pagination & Scroll Handling:** Implemented smooth pagination while maintaining scroll position to improve user experience.  
- **Responsive Design:** Built a fully responsive interface using Tailwind CSS for both mobile and desktop screens.  
- **Form Handling:** Developed a reusable TaskForm component capable of handling both creation and editing of tasks efficiently.
