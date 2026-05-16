from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import auth, events, admin, users, speakers, gallery, reports, memberships, newsletter, schedule, sponsors
from app.core.database import create_tables

app = FastAPI(title="GSEF API", version="1.0.0")

# Create database tables on startup
create_tables()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api")
app.include_router(events.router, prefix="/api")
app.include_router(admin.router, prefix="/api")
app.include_router(users.router, prefix="/api")
app.include_router(speakers.router, prefix="/api")
app.include_router(gallery.router, prefix="/api")
app.include_router(reports.router, prefix="/api")
app.include_router(memberships.router, prefix="/api")
app.include_router(newsletter.router, prefix="/api")
app.include_router(schedule.router, prefix="/api")
app.include_router(sponsors.router, prefix="/api")

@app.get("/")
def root():
    return {"message": "Welcome to GSEF API", "status": "running"}

@app.get("/health")
def health():
    return {"status": "healthy"}
