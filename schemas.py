from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class ProgressOut(BaseModel):
    programs_completed: int
    days_active: int
    current_streak: int

    class Config:
        from_attributes = True
