"""Module for getting current time and date"""

from langchain.tools import tool
from requests import get
from app.core.config import settings
from app.LLM.tools_route.model_tools.models import Coordinates


@tool("get_location_coordinates", args_schema=Coordinates)
def get_location_coordinates(query: str):
    """For getting the latitude and longitude of a location"""
    data = get(
        url=f"http://api.openweathermap.org/geo/1.0/direct?q={query}&limit=5&appid={settings.weather_api_key}").json()

    return {"matches": data}
