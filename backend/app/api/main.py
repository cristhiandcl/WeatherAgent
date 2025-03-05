from fastapi import APIRouter

from app.api.routes import health, agent

api_router = APIRouter()

api_router.include_router(health.router, tags=["status"])
api_router.include_router(agent.router, prefix="/agent", tags=["Weather Agent"])
