from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="GSEF API",
    description="Global Somali Entrepreneurship Forum",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "Welcome to GSEF API",
        "status": "running",
        "project": "Global Somali Entrepreneurship Forum"
    }

@app.get("/health")
def health():
    return {"status": "healthy"}

@app.get("/api/v1/test")
def test():
    return {"message": "API is working!"}

# Placeholder for events
@app.get("/api/v1/events")
def get_events():
    return {"message": "Events endpoint - coming soon", "events": []}

@app.get("/api/v1/events/upcoming")
def get_upcoming():
    return {"message": "Upcoming events - coming soon"}
