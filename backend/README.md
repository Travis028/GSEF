# GSEF Backend API

This directory contains the FastAPI backend for the GSEF platform. It provides REST endpoints for events, users, registrations, memberships, speakers, gallery, newsletters, and admin management.

## Tech Stack
- **Python 3.12+**
- **FastAPI**
- **SQLAlchemy**
- **Pydantic**
- **Uvicorn**
- **JWT / Passlib**

## Project Structure
- `app/api/`: API route definitions
- `app/core/`: Database setup and configuration
- `app/models/`: SQLAlchemy models
- `app/schemas/`: Pydantic request/response schemas
- `app/services/`: Business logic helpers

## Important Endpoints
- `GET /health`
- `GET /api/events`
- `GET /api/events/{id}`
- `GET /api/speakers`
- `GET /api/gallery`
- `GET /api/reports`
- `GET /api/schedule/event/{event_id}`
- `GET /api/sponsors`
- `GET /api/memberships`
- `POST /api/newsletter/subscribe`
- `POST /api/auth/login`

## Setup & Run

1. Create and activate a Python virtual environment:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Start the backend server:
   ```bash
   python run.py
   ```

The backend server uses port `8080` by default and is available at `http://localhost:8080`.

## Database
- The default development database is SQLite at `backend/gsef.db`.
- The application creates required tables automatically on startup.
- Use `backend/seed_images.py` to seed sample event data.

## Environment Variables
Create a `.env` file in the backend folder if needed:
```env
DATABASE_URL=sqlite:///./gsef.db
SECRET_KEY=super_secret_key_here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

## Notes
- Keep backend code in the `backend` folder.
- The frontend is separate and should connect to `http://localhost:8080/api`.
