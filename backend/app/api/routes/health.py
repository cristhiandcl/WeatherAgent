from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def init() -> dict[str, str]:
    """FastAPI Health Check"""

    return {
        "result": "Weather Agent API Health Check",
        "status": "04-03-2025 | 01:02",
    }
