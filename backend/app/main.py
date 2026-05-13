from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from app.core.config import settings
from app.core.database import engine, get_db, create_tables
from app.models import base

# Create tables on startup
create_tables()

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    debug=settings.DEBUG
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "Welcome to GSEF API",
        "project": "Global Somali Entrepreneurship Forum",
        "version": settings.APP_VERSION,
        "status": "running"
    }

@app.get("/health")
def health_check(db: Session = Depends(get_db)):
    # Test database connection
    try:
        db.execute("SELECT 1")
        db_status = "connected"
    except:
        db_status = "disconnected"
    
    return {
        "status": "healthy",
        "database": db_status,
        "debug": settings.DEBUG
    }

@app.get("/api/v1/test")
def test():
    return {"message": "GSEF API is fully functional!"}
