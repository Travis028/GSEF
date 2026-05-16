# GSEF Frontend

This folder contains the GSEF frontend application built with React, Vite, and TailwindCSS. The UI is designed to match the GSEF brand with polished dark and gold accent styling.

## Tech Stack
- React 19
- Vite 8
- Tailwind CSS 3
- Framer Motion
- React Router v7
- React Icons

## Brand and UI Theme
The UI uses the GSEF brand palette to match the logo and deliver a premium look:
- **Green:** `#006B3F`
- **Gold:** `#C9A84C`
- **Navy:** `#1A1A2E`
- **Teal:** `#17A589`
- **Offwhite:** `#F8F7F4`

## Project Structure
- `src/pages/`: Main page views such as `Home`, `Events`, `Gallery`, `Speakers`, `Reports`, `Membership`, and `Profile`
- `src/components/`: Reusable UI components and layout pieces
- `src/services/`: API client and service helpers
- `src/App.jsx`: Application routes and layout wrapper
- `src/index.css`: Tailwind base styles and custom theme utilities

## Setup and Run

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start the Vite development server:
   ```bash
   npm run dev
   ```

3. Open the app in your browser:
   ```text
   http://localhost:5173
   ```

## Production Build

To create a production build:
```bash
npm run build
```

## Backend API Connection
The frontend consumes the backend API at:
```text
http://localhost:8080/api
```

## Notes
- Ensure the backend server is running before using the frontend.
- This frontend is intended to work with the backend code located in `../backend`.
- Keep the backend in the backend folder and the frontend in this frontend folder for proper separation.
