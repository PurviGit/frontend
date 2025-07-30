# create_chat_table.py

from database import engine
import models

# This creates all tables defined in models.py
models.Base.metadata.create_all(bind=engine)
