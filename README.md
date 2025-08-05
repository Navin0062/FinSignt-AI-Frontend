<h1 align="center">FinSight AI Client</h1>
<p align="center">
  <b>Modern React + TypeScript Frontend for FinSight AI</b><br>
  Beautiful, fast, and responsive personal finance dashboard powered by Vite.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18+-blue?logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5+-blue?logo=typescript" />
  <img src="https://img.shields.io/badge/Vite-4+-purple?logo=vite" />
  <img src="https://img.shields.io/badge/Redux-Toolkit-red?logo=redux" />
  <img src="https://img.shields.io/badge/TailwindCSS-3+-teal?logo=tailwindcss" />
</p>

---

# 📚 FinSight AI Client Documentation

This document explains the structure, usage, and customization of the FinSight AI frontend application.

---

## 🗂️ Folder Structure

```
client/
├── public/         # Static assets
├── src/
│   ├── components/ # Reusable UI components
│   ├── features/   # Redux slices and business logic
│   ├── pages/      # Route-based pages
│   ├── styles/     # Tailwind and custom CSS
│   ├── utils/      # Helper functions
│   └── main.tsx    # App entry point
├── .env.example    # Environment variable template
├── package.json    # Project metadata and scripts
└── README.md       # Project overview
```

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Configure environment variables:**  
   Copy `.env.example` to `.env` and fill in your API endpoints and keys.

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Build for production:**
   ```sh
   npm run build
   ```

---

## ✨ Features Explained

- **Dashboard:** Visualizes income, expenses, and savings in real time.
- **Analytics:** Interactive charts and breakdowns by category using Chart.js.
- **Transactions:** Add, edit, import CSV, and scan receipts with AI.
- **Recurring Transactions:** Manage subscriptions and regular payments.
- **Authentication:** Secure login and user profile management.
- **AI Insights:** Integrates with Gemini API for financial suggestions.
- **Responsive Design:** Built with Tailwind CSS for mobile and desktop.

---

## 🛠️ Tech Stack

- **React** + **TypeScript** + **Vite**
- **Redux Toolkit** & **Redux Persist**
- **Tailwind CSS**
- **Axios** for API calls
- **Chart.js** for analytics

---

## ⚙️ Customization

- **Theme:** Edit `tailwind.config.js` for colors and layouts.
- **State Management:** Redux Toolkit and Redux Persist for global state and session.
- **API:** Update base URLs in `.env` for backend connection.
- **Charts:** Customize analytics in `src/components/Charts/`.

---

## 🧑‍💻 Development Notes

- **TypeScript:** All code is type-safe for reliability.
- **Vite:** Fast hot-reload and build times.
- **Linting:** ESLint and Prettier recommended for code quality.

---

## 📚 Further Reading

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)

---

## 📄 License

See [../LICENSE.md](../LICENSE.md) for license details.

---

> For backend setup and more details, see the