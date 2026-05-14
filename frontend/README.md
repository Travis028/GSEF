# GSEF Frontend

This directory contains the user interface for the GSEF platform, built with React and Vite.

## Tech Stack
- **React 19**: Modern UI component library.
- **Vite**: Ultra-fast build tool and development server.
- **TailwindCSS**: Utility-first CSS framework for rapid styling.
- **React Router DOM**: Client-side routing for seamless navigation.
- **React Query**: Asynchronous state management and data fetching.
- **Framer Motion**: For fluid animations and page transitions.
- **React Icons**: Scalable vector icons.

## Features & Pages
- **Public Pages:**
  - `Home`: Landing page with dynamic countdown, hero section, and membership plans.
  - `Events`: Directory of upcoming summits and workshops.
  - `EventDetail`: In-depth view of event agendas and speakers.
  - `Registration`: Multi-step ticket purchasing flow.
- **User Portal:**
  - `Dashboard`: User-specific metrics and upcoming registered events.
- **Admin Portal:**
  - `AdminLayout` & `AdminDashboard`: Protected routes exclusively for platform organizers.
  - `AdminEvents` & `AdminUsers`: Data tables for entity management.

## Setup & Execution

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

## Environment Variables
Create a `.env` file in this directory based on the following template:
```env
VITE_API_URL=http://localhost:8000/api
```
