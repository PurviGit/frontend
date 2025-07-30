from sqlalchemy import Column, Integer, String, Boolean, ForeignKey ,DateTime
from sqlalchemy.orm import relationship
from database import Base
import datetime

class ChatMessage(Base):
    __tablename__ = "chat_messages"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer)
    sender = Column(String)  # 'user' or 'bot'
    text = Column(String)
    timestamp = Column(DateTime, default=datetime.datetime.now)
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)

    progress = relationship("Progress", back_populates="owner", uselist=False)

class Progress(Base):
    __tablename__ = "progress"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    programs_completed = Column(Integer, default=0)
    days_active = Column(Integer, default=0)
    current_streak = Column(Integer, default=0)
    message = Column(String, default="")
    owner = relationship("User", back_populates="progress")
