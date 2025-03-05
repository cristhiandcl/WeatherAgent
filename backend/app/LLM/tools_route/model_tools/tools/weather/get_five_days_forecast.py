"""Module for searching online"""

from langchain.tools import tool
from app.LLM.tools_route.model_tools.models import GetWeather
from requests import get
from app.core.config import settings


@tool("get_next_five_days_forecast", args_schema=GetWeather)
def get_next_five_days_forecast(latitude: str, longitude: str):
    """For getting the next five days weather forecast when latitude and longitude are provided"""
    data = get(
        url=f"https://api.openweathermap.org/data/2.5/forecast?lat={latitude}&lon={longitude}&appid={settings.weather_api_key}").json()

    return {"Forecast": data['list'], 'City': data['city']}
