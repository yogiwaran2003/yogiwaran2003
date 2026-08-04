# MicroSentry

MicroSentry is a Spring-native **microservices health and compliance** platform starter kit.

## Stack
- Frontend: React (JSX) + TailwindCSS + Vite
- Backend: Java 21 + Spring Boot + Spring Security
- Database: PostgreSQL 16
- Deployment: Docker + Docker Compose

## MVP included in this scaffold
- JWT-based authentication endpoint (`/api/auth/login`)
- Seeded default admin user (`admin@microsentry.dev / ChangeMe123!`)
- Protected health scorecard API (`/api/services/health-scorecards`)
- DevOps-style React dashboard UI (health + compliance snapshot)
- Local one-command startup with Docker Compose

## Run locally

```bash
docker compose up --build
```

Then open:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8080

## Backend quick start (without Docker)

```bash
cd backend
mvn spring-boot:run
```

## Frontend quick start (without Docker)

```bash
cd frontend
npm install
npm run dev
```

## Next milestones
1. Docker API-based service discovery
2. Real-time metric ingestion (Micrometer + WebSocket)
3. Compliance rule packs (Spring Security + CIS Docker)
4. Incident timeline correlation engine
