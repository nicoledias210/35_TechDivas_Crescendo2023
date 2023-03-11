from pydantic import BaseModel
from datetime import datetime


class UserWaste(BaseModel):
    user_id: str
    date: datetime
    cardboard: int
    glass: int
    metal: int
    paper: int
    plastic: int
    trash: int


class UserWasteResults(BaseModel):
    user_id: str
    date: datetime
    interval: str
