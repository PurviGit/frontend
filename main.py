from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from routers import user, chat, progress, content
from sqlalchemy.orm import Session
from database import get_db
import crud, schemas
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import openai
from routers import content






app = FastAPI()
app.include_router(content.router)
load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")

class ChatInput(BaseModel):
    message: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user.router)
app.include_router(chat.router)
app.include_router(progress.router)
app.include_router(content.router)


@app.get("/progress/{user_id}", response_model=schemas.ProgressOut)
def read_progress(user_id: int, db: Session = Depends(get_db)):
    progress = crud.get_latest_progress(db, user_id)
    if not progress:
        raise HTTPException(status_code=404, detail="No progress found for this user")
    return progress

@app.post("/chat")
def chat_with_user(data: ChatInput):
    try:
        user_message = data.message

        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a kind and wise spiritual guide."},
                {"role": "user", "content": user_message}
            ]
        )

        reply = response['choices'][0]['message']['content']
        return {"response": reply}

    except Exception as e:
        print("OpenAI error:", e)
        raise HTTPException(status_code=500, detail="Something went wrong with GPT.")
