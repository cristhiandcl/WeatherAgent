"""Main Module"""

# FastAPI dependencies
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.main import api_router

# Initializing FastAPI Server
app = FastAPI(title="Weather AI Agent API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:3000",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)
