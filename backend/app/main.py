from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Create database tables (simplified for now)
from app.core.database import engine, Base
from app.models import User, Event

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="GSEF API",
    version="1.0.0",
    description="Global Somali Entrepreneurship Forum API"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simple event endpoints without complex imports
@app.get("/")
def root():
    return {"message": "Welcome to GSEF API", "status": "running"}

@app.get("/health")
def health():
    return {"status": "healthy"}

@app.get("/api/v1/events")
def get_events():
    return {"message": "Events endpoint - coming soon"}

@app.get("/api/v1/events/upcoming")
def get_upcoming():
    return {"message": "Upcoming events - coming soon"}
