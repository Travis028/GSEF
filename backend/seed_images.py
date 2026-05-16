#!/usr/bin/env python
"""
Script to seed the GSEF database with sample events and images
"""
import sqlite3
from datetime import datetime, date, timedelta

# Get database path
DB_PATH = "./gsef.db"

# Sample events to create
SAMPLE_EVENTS = [
    {
        "title": "GSEF 2025",
        "slug": "gsef-2025",
        "short_description": "Global Somali Entrepreneurship Forum",
        "description": "Two days of networking, insights, and opportunities with global Somali entrepreneurs & investors.",
        "start_date": "2025-07-19",
        "end_date": "2025-07-20",
        "start_time": "09:00",
        "end_time": "17:00",
        "venue": "Radisson Blu",
        "address": "Radisson Blu Hotel, Nairobi",
        "city": "Nairobi",
        "country": "Kenya",
        "max_attendees": 500,
        "current_attendees": 0,
        "status": "upcoming",
        "is_featured": True,
        "created_by": None,
        "images": [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1540575467063-178f50002caf?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        ]
    },
    {
        "title": "Somalia Investment Summit",
        "slug": "somalia-investment-summit",
        "short_description": "Connecting investors with Somali entrepreneurs",
        "description": "A premier conference bringing together investors and entrepreneurs from across the Somali diaspora.",
        "start_date": "2025-08-15",
        "end_date": "2025-08-16",
        "start_time": "08:30",
        "end_time": "18:00",
        "venue": "Mogadishu Convention Center",
        "address": "Mogadishu, Somalia",
        "city": "Mogadishu",
        "country": "Somalia",
        "max_attendees": 300,
        "current_attendees": 0,
        "status": "upcoming",
        "is_featured": True,
        "created_by": None,
        "images": [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        ]
    },
    {
        "title": "Women in Business Conference",
        "slug": "women-in-business-conference",
        "short_description": "Empowering female entrepreneurs",
        "description": "An exclusive conference dedicated to supporting and empowering women entrepreneurs.",
        "start_date": "2025-09-05",
        "end_date": "2025-09-06",
        "start_time": "09:00",
        "end_time": "17:00",
        "venue": "Hargeisa Business District",
        "address": "Hargeisa, Somaliland",
        "city": "Hargeisa",
        "country": "Somaliland",
        "max_attendees": 250,
        "current_attendees": 0,
        "status": "upcoming",
        "is_featured": False,
        "created_by": None,
        "images": [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
        ]
    },
]

def seed_database():
    """Seed the database with sample events and images"""
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    try:
        # Check if events already exist
        cursor.execute("SELECT COUNT(*) FROM events")
        count = cursor.fetchone()[0]
        
        if count > 0:
            print(f"Database already has {count} events. Skipping seed.")
            conn.close()
            return
        
        print("Creating sample events...\n")
        
        for event in SAMPLE_EVENTS:
            images_str = ','.join(event.pop("images"))
            
            cursor.execute("""
                INSERT INTO events (
                    title, slug, short_description, description,
                    start_date, end_date, start_time, end_time,
                    venue, address, city, country,
                    max_attendees, current_attendees,
                    banner_image, status, is_featured, created_by,
                    created_at, updated_at
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                event['title'], event['slug'], event['short_description'],
                event['description'], event['start_date'], event['end_date'],
                event['start_time'], event['end_time'],
                event['venue'], event['address'], event['city'], event['country'],
                event['max_attendees'], event['current_attendees'],
                images_str, event['status'], event['is_featured'],
                event['created_by'],
                datetime.utcnow().isoformat(),
                datetime.utcnow().isoformat()
            ))
            
            print(f"✓ Created: {event['title']}")
            print(f"  Location: {event['city']}, {event['country']}")
            print(f"  Images: {len(event['images'].split(',')) if isinstance(event.get('images'), str) else len(event.get('images', []))} samples")
            print()
        
        conn.commit()
        print("✓ Successfully seeded database with sample events and images!")
        
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
        conn.rollback()
    finally:
        conn.close()

if __name__ == "__main__":
    seed_database()
