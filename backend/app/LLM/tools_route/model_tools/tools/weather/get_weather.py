"""Module for searching online"""

from langchain.tools import tool
from app.LLM.tools_route.model_tools.models import GetWeather
from requests import get
from app.core.config import settings


@tool("get_location_weather", args_schema=GetWeather)
def get_location_weather(latitude: str, longitude: str):
    """For getting the current weather when latitude and longitude are provided"""
    data = get(
        url=f"https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&appid={settings.weather_api_key}").json()

    return {"Weather": data}
