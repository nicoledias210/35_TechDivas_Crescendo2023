from pydantic import BaseModel, Field

from bson.objectid import ObjectId

class User(BaseModel):
    name: str
    email: str
    password: str


class Login(BaseModel):
    email: str
    password: str