# 🙏 DSCPL Spiritual AI Assistant

An interactive AI-powered spiritual assistant built with **FastAPI** (backend) and **React + Tailwind CSS** (frontend), designed to support users in their faith journey through chat, devotionals, prayer, meditation, accountability, and curated video content via the SocialVerse API.

---

## 🌟 Features

- ✝️ **Spiritual Chatbot** – AI-powered assistant to guide users spiritually using OpenAI.
- 📖 **Daily Devotionals** – Inspirational messages to start your day.
- 🙏 **Prayer & Meditation Plans** – Personalized content based on user selections.
- 🧠 **Accountability Tracker** – Log and track spiritual struggles with grace-centered advice.
- 🎥 **Curated Videos** – Fetched from SocialVerse API (requires login).
- 👤 **User Authentication** – Secure login using JWT tokens.
- 🔔 **Reminders & Progress** – Daily spiritual encouragement and tracked activity.

---

## 📁 Folder Structure

dscpl-spiritual-assistant/
├── backend/
│ ├── main.py
│ ├── models.py
│ ├── database.py
│ ├── crud.py
│ ├── schemas.py
│ └── routers/
│ ├── chat.py
│ ├── user.py
│ ├── content.py
│ └── progress.py
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── index.css
│ │ ├── pages/
│ │ │ ├── Chat.jsx
│ │ │ ├── Devotion.jsx
│ │ │ ├── Meditation.jsx
│ │ │ ├── Prayer.jsx
│ │ │ ├── Settings.jsx
│ │ │ └── Videos.jsx
│ │ └── components/
│ │ ├── Header.jsx
│ │ ├── Footer.jsx
│ │ └── Sidebar.jsx
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ └── package.json
└── README.md


---

## 🚀 Getting Started

### ✅ Backend Setup

1. **Create and activate a virtual environment:**

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
```


2. Install dependencies:
pip install -r requirements.txt

3. Initialize the database:
python create_chat_table.py
python seed_progress.py  # optional

Run FastAPI server:

bash
Copy
Edit
uvicorn main:app --reload
Server runs at: http://localhost:8000

✅ Frontend Setup
Install Node modules:

bash
Copy
Edit
cd frontend
npm install
Run development server:

bash
Copy
Edit
npm start
Frontend runs at: http://localhost:3000

🔑 Authentication
Use the /login endpoint to authenticate users and receive a JWT token.

The frontend stores the token in localStorage.

All protected routes (e.g., /videos) require a valid token in the Authorization header.

📡 External API (SocialVerse)
Endpoint: https://api.socialverseapp.com/posts/summary/get

Header Required:

http
Copy
Edit
Flic-Token: flic_b1c6b09d98e2d4884f61b9b3131dbb27a6af84788e4a25db067a22008ea9cce5
This is included automatically in /videos route after login.

✨ Enhancements Planned
✅ Load chat history from DB

✅ OpenAI responses

✅ Devotional tracking per day

🔄 Calendar sync for reminders

🔔 Push notifications

👥 Invite friends / community

🧠 Technologies Used
Frontend: React, Tailwind CSS, Axios, React Router

Backend: FastAPI, SQLAlchemy, SQLite, JWT Auth, Pydantic

AI Integration: OpenAI GPT

External API: SocialVerse

🙌 Credits
Spiritual Assistant AI powered by OpenAI

Video content from SocialVerse

Inspired by the DSCPL Program


