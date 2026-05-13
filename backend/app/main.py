from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="GSEF API",
    description="Global Somali Entrepreneurship Forum",
    version="1.0.0"
)

# Configure CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint
@app.get("/")
def root():
    return {
        "message": "Welcome to GSEF API",
        "status": "running",
        "project": "Global Somali Entrepreneurship Forum"
    }

# Health check endpoint
@app.get("/health")
def health_check():
    return {"status": "healthy"}

# Test endpoint
@app.get("/api/v1/test")
def test():
    return {"message": "GSEF API is fully functional!"}
