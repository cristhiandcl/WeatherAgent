from pydantic import BaseModel, Field


class Coordinates(BaseModel):
    """prima to pay squema"""

    query: str = Field(
        ...,
        description="the city or place you want to know the coordinates of",
    )


class GetWeather(BaseModel):
    """get weather squema"""

    latitude: str = Field(
        ...,
        description="the Latitude of the city or place you have the coordinates of",
    )
    longitude: str = Field(
        ...,
        description="the Longitude of the city or place you have the coordinates of",
    )
