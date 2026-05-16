# Global Somali Entrepreneurship Forum (GSEF) Platform

Welcome to the GSEF platform repository. This project combines a frontend event platform and a backend API for managing events, users, registrations, and membership workflows.

## Project Overview

GSEF is designed to connect Somali entrepreneurs, investors, and community members through a premium event experience. It includes:
- Event discovery and registration
- Speaker and schedule management
- Membership tiers and newsletter subscription
- Admin dashboard support
- Modern responsive UI with a clean brand design

## Architecture

This repository contains two main application layers:
- `/frontend`: React + Vite + TailwindCSS application
- `/backend`: FastAPI + SQLAlchemy REST API

## UI Theme and Brand Colors

The frontend uses the GSEF brand palette to match the logo and visual identity:
- **Green:** `#006B3F`
- **Gold:** `#C9A84C`
- **Navy:** `#1A1A2E`
- **Teal:** `#17A589`
- **Offwhite:** `#F8F7F4`

## Setup and Run

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python run.py
```
The backend runs on `http://localhost:8080` and exposes API routes under `/api`.

### Frontend
```bash
cd frontend
npm install
npm run dev
```
The frontend runs on `http://localhost:5173`.

### Notes
- The backend code belongs in `/backend`.
- The frontend code belongs in `/frontend`.
- If you are maintaining separate repositories, ensure the backend remains in `GSEF-backend-` and the frontend in `GSEF`.

## Quick Links
- Frontend URL: `http://localhost:5173`
- Backend health: `http://localhost:8080/health`
- Backend docs: `http://localhost:8080/docs`

## Directory Structure

- `/backend`: API server, models, schemas, services
- `/frontend`: UI code, pages, components, styles

## License
Copyright 2026 GSEF. All rights reserved.
