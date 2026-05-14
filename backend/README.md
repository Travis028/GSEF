# GSEF Backend API

This directory contains the RESTful API for the GSEF platform, providing the data layer, authentication logic, and administrative endpoints.

## Tech Stack
- **Python 3.12+**: Core programming language.
- **FastAPI**: Extremely fast and modern web framework for building APIs.
- **SQLAlchemy**: Powerful SQL toolkit and Object-Relational Mapper (ORM).
- **Pydantic**: Data validation and settings management using Python type annotations.
- **Uvicorn**: Lightning-fast ASGI server.
- **Passlib & JWT**: Secure password hashing and token-based authentication.

## System Architecture
- `app/api/`: Contains route definitions for `auth`, `users`, `events`, and `admin`.
- `app/core/`: Contains core configurations, JWT security parameters, and database session logic.
- `app/models/`: Contains the SQLAlchemy ORM models (`User`, `Event`, etc.).
- `app/schemas/`: Contains the Pydantic models for request validation and response serialization.

## Key Endpoints
- `POST /api/auth/login`: Issue JWT access tokens.
- `GET /api/events`: Retrieve list of events.
- `GET /api/admin/dashboard/stats`: Retrieve high-level statistics (Requires Admin Role).

## Setup & Execution

1. **Create Virtual Environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run Development Server:**
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

## Environment Variables
Create a `.env` file in this directory based on the following template:
```env
DATABASE_URL=sqlite:///./gsef.db
SECRET_KEY=your_super_secret_key_here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```
