from sqlalchemy.orm import Session
from models import Progress

def get_latest_progress(db: Session, user_id: int):
    return db.query(Progress).filter(Progress.user_id == user_id).order_by(Progress.id.desc()).first()
