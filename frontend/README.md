# Vajra LED - Frontend

This is the official frontend for **Vajra LED**, engineered for high-performance optical engineering and mission-critical commercial environments.

## 🚀 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: FontAwesome & Lucide React

## 📦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Navigate to the project directory:
   ```bash
   cd frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the local development server, run:
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`. 

### Building for Production

To create a production-ready build, run:
```bash
npm run build
```
This will compile and minify the assets into the `dist/` directory.

## 📁 Project Structure

```
frontend/
├── public/               # Static assets
├── src/
│   ├── App.jsx           # Main React component (contains UI layout)
│   ├── index.css         # Tailwind v4 configuration & base styles
│   └── main.jsx          # React entry point
├── index.html            # HTML entry point (contains FontAwesome CDN)
├── vite.config.js        # Vite + Tailwind plugin configuration
└── package.json          # Dependencies & scripts
```

## 🎨 Styling Notes
This project uses the modern **Tailwind CSS v4** syntax. Instead of a `tailwind.config.js` or `postcss.config.js`, all theme variables and configurations are declared directly inside `src/index.css` using the `@theme` directive, and Tailwind is integrated directly via the `@tailwindcss/vite` plugin.
