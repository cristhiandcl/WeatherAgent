"""Module for getting selected chain answer"""

import os
from operator import itemgetter

from langchain_core.messages import AIMessage, HumanMessage

from langchain_openai import ChatOpenAI

from app.core.config import settings
from app.LLM.tools_route.model import agent_executor

os.environ["OPENAI_API_KEY"] = settings.openai_api_key

llm_openai: ChatOpenAI = ChatOpenAI(temperature=0,
                                    model=settings.openai_model,
                                    name="OutputChain")


async def agent_answer(
        query: str,
        interactions: list[any],
):
    """Generating weather Agent tokens"""

    answer: str = ""
    interactions.append(HumanMessage(content=query))

    WeatherAgent = {
                       "input": itemgetter("input"),
                       "history": itemgetter("history"),

                   } | agent_executor

    async for token in WeatherAgent.astream_events(
            {
                "input": query,
                "history": interactions,

            },
            version="v2",
    ):
        kind = token["event"]
        if kind == "on_chat_model_stream" and token["name"] == "OutputChain":
            content = token["data"]["chunk"].content
            if content:
                answer += content
                yield content
    interactions.append(AIMessage(content=answer))
