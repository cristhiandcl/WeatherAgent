"""Tool calling LLM Module"""

from datetime import date
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain.agents import create_tool_calling_agent, AgentExecutor
from langchain_openai import ChatOpenAI

from app.LLM.tools_route.model_tools.tools.tools_retriever import tools
from app.core.config import settings

llm_openai = ChatOpenAI(temperature=0, model=settings.openai_model, name="OutputChain")
actual_date = date.today().strftime("%B %d, %Y")

prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            f"""
            You are a helpful assistant, you give weather data and provide it to the user. Remember that the actual date is {actual_date},
            If you get asked what is it that you can do, remember that you can get the weather of any location and you can also can get the forecast for the next 5 days.
        """,
        ),
        (
            "system",
            """
            ANSWER ALWAYS IN MARKDOWN
            """,
        ),
        MessagesPlaceholder("history", optional=True),
        ("human", "{input}"),
        MessagesPlaceholder("agent_scratchpad"),
    ]
)

agent = create_tool_calling_agent(llm_openai, tools, prompt)
agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=False)
