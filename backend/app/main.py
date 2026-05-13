from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.core.database import engine, Base
from app.api import auth, events

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Global Somali Entrepreneurship Forum API",
    docs_url="/docs",
    redoc_url="/redoc"
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/v1")
app.include_router(events.router, prefix="/api/v1")

@app.get("/")
def root():
    return {
        "message": "Welcome to GSEF API",
        "project": "Global Somali Entrepreneurship Forum",
        "version": settings.APP_VERSION,
        "status": "running"
    }

@app.get("/health")
def health():
    return {"status": "healthy", "database": "connected"}
