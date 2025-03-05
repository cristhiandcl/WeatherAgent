FROM python:3.12.3-slim

WORKDIR /merli

COPY requirements.txt requirements.txt

RUN apt-get update && \
    apt-get install -y gcc && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN pip install --no-cache-dir -r requirements.txt

COPY ./app app

EXPOSE 8000

CMD ["fastapi", "run", "app/main.py", "--proxy-headers"]
