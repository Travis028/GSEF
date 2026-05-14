# GSEF Platform Documentation

## 1. Executive Summary
The Global Somali Entrepreneurship Forum (GSEF) platform is a comprehensive full-stack web application designed to connect Somali entrepreneurs, investors, and stakeholders. It facilitates event registration, membership management, professional networking, and administrative oversight.

## 2. Technical Architecture
The platform utilizes a decoupled client-server architecture:
- **Frontend App:** A Single Page Application (SPA) built with React 19 and Vite. It utilizes TailwindCSS for rapid, responsive UI design and React Router for client-side routing.
- **Backend API:** A RESTful API built with FastAPI and Python. It manages business logic, data persistence via SQLAlchemy, and robust security via JWT tokens.

## 3. Core Capabilities
### 3.1 Public Portal
The public-facing portal acts as the landing pad for new and returning users. 
- **Dynamic Hero Section:** Features a real-time countdown timer to the next major summit.
- **Event Directory:** Users can browse upcoming summits, workshops, and training programs.
- **Multi-step Registration:** A seamless, 4-step ticket purchasing flow (Ticket Selection -> Attendee Details -> Review -> Confirmation).

### 3.2 Authenticated Dashboard
Once registered, users can access a personalized dashboard:
- Tracks purchased tickets and upcoming registered events.
- Displays networking connections and membership status.

### 3.3 Administrative Console
Platform organizers are equipped with an administrative suite accessible via role-based access control (RBAC):
- **Overview Dashboard:** Provides key metrics such as total user count, total revenue, and active registrations.
- **Entity Management:** Interfaces to view, edit, or remove User accounts and Event entries directly from the database.

## 4. UI/UX Design System
The application strictly adheres to a premium corporate aesthetic:
- **Color Palette:** Deep Blue (`#1e3a8a`), Bright Blue (`#2563eb`), and Warning/Gold (`#f59e0b`) accents.
- **Typography:** Modern sans-serif fonts optimized for readability.
- **Responsiveness:** Fluid grid layouts adapting from mobile screens (<768px) to wide desktop monitors (>1024px).
- **Micro-interactions:** Hover state scaling, glassmorphism on floating cards, and animated page transitions via Framer Motion.

## 5. Security & Data Flow
- **Authentication:** Users authenticate via email/password. The backend issues a short-lived Access Token (JWT).
- **Authorization:** Protected routes on the frontend require a valid token. Admin routes execute a secondary role check (`user.role === 'admin'`).
- **Data Integrity:** All incoming API requests are strictly validated using Pydantic schemas before reaching the SQL database.

## 6. Future Roadmap
- Integration with Stripe for secure payment processing during ticket registration.
- PostgreSQL database migration for high availability and concurrent transaction handling.
- Implementation of a real-time chat/forum feature for community networking.
