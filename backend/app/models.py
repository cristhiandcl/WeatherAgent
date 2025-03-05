from pydantic import BaseModel


class Input(BaseModel):
    """Defining user input"""
    input_string: str


class ErrorResponse(BaseModel):
    """Response type when error occurs"""

    result: str
