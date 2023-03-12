from pydantic import BaseModel, validator
from datetime import datetime
from bson.objectid import ObjectId

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
    interval: str


