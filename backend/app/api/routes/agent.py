from typing import AsyncGenerator
from fastapi import APIRouter
from fastapi.responses import StreamingResponse

from app.models import Input, ErrorResponse
from app.LLM.main import agent_answer

router = APIRouter()

interactions: list[dict[str, str]] = []  # temporary memory. it will be saved in Mongo on a Production Enviroment


@router.post("/", response_model=None)
async def get_merli_answer(
        input_data: Input,
) -> StreamingResponse | ErrorResponse:
    """Merli answer Endpoint"""
    # GETTING USER QUERY

    query: str = input_data.input_string

    tokens: AsyncGenerator[str, None]

    try:
        tokens = agent_answer(
            query,
            interactions
        )

        return StreamingResponse(tokens, media_type="text/event-stream")

    except ConnectionError:
        return ErrorResponse(
            result="Perdí mi conexión a internet por un momento, lo siento. Por favor indícame nuevamente con "
                   "que te puedo ayudar."
        )
