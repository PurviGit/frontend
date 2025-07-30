# backend/seed_chat.py
from database import SessionLocal
from models import ChatMessage
from datetime import datetime

db = SessionLocal()

sample_messages = [
    ChatMessage(user_id=1, sender="user", text="Hello", timestamp=datetime.now()),
    ChatMessage(user_id=1, sender="bot", text="Hi! How can I help you today?", timestamp=datetime.now())
]

db.add_all(sample_messages)
db.commit()
db.close()

print("✅ Sample chat messages inserted.")
