from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.user import User
from app.models.event import Event

router = APIRouter(prefix="/admin", tags=["Admin Dashboard"])

@router.get("/dashboard/stats")
def get_dashboard_stats(db: Session = Depends(get_db)):
    # Note: Security dependency should be added to secure this endpoint for admins only
    total_users = db.query(User).count()
    total_events = db.query(Event).count()
    
    return {
        "total_users": total_users,
        "total_events": total_events,
        "revenue": 0, # Placeholder for when payments are implemented
        "registrations": 0 # Placeholder
    }

@router.get("/users")
def get_all_users(db: Session = Depends(get_db)):
    users = db.query(User).all()
    return users

@router.get("/events/all")
def get_all_events(db: Session = Depends(get_db)):
    events = db.query(Event).all()
    return events
