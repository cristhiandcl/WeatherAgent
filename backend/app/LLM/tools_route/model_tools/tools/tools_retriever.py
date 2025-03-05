"""Module Providing tools stack for merli_tools_LLM class"""

from typing import Callable

from app.LLM.tools_route.model_tools.tools import (
    get_location_coordinates,
    get_location_weather
)

# model_functions Dictionary
tools: list[Callable] = [
    get_location_coordinates,
    get_location_weather
]
