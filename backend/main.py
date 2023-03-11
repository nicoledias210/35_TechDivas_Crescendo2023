import mongoDB as db
from fastapi import FastAPI, HTTPException, Request, status
import models.userModels as userModels
import models.userWasteModels as userWasteModels
from Hashing import Hash
from fastapi.middleware.cors import CORSMiddleware
from bson.objectid import ObjectId
import datetime as date
origins = [
    "http://localhost:3000",
    "http://localhost:27017"
]


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Testing
@app.get('/')
def index():
    return 'hello'


# POST /register
@app.post('/register')
def create_user(request: userModels.User):
   #hashed_pass = Hash.bcrypt(request.password.encode())
   user_object = dict(request)
   #user_object["password"] = str(hashed_pass)
   user_id = db.userCollection.insert_one(user_object)
   return {"message": "created"}


@app.post('/login')
def login(request: userModels.Login):
    #hashed_pass = Hash.bcrypt(request.password)
    user_object = dict(request)
    #user_object["password"] = str(hashed_pass)

    user = db.userCollection.find_one({"email": request.email})
    print(user)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'No user found with this {request.email} email')
    #print(str(hashed_pass), user["password"])
    if not user_object["password"] == user["password"]:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Wrong Username or password')
    print(user)
    id = str(user["_id"])
    return {"id": id, "email": user["email"], "password": user["password"]}


@app.post('/userWaste')
def postuserwaste(request: userWasteModels.UserWaste):
    user_id = db.userCollection.find_one({"_id": ObjectId(request.user_id)})
    if not user_id:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'No user found with {request.user_id} user id')
    user_waste_id = db.userWasteCollection.insert_one(dict(request))
    return {"message": "created"}

@app.post('/userWaste/results')
def getuserwaste(request: userWasteModels.UserWasteResults):
    # user_id = db.userWasteCollection.find_one({"_id": request.user_id})
    # if not user_id:
    #     raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
    #                         detail=f'No user found with {request.user_id} user id')
    if request.interval == "weekly":
        week_ago = request.date - date.timedelta(days=7)

        userwasteresult = db.userWasteCollection.find({"date": {"$gte": week_ago, "$lt": request.date}})
        # print(userwasteresult)
        sumcardboard=0
        sumglass=0
        summetal=0
        sumpaper=0
        sumplastic=0
        sumtrash=0
        for record in userwasteresult:
            print(record)
            for key,val in record.items():
                print(key,val)
                if key== "cardboard":
                    sumcardboard=sumcardboard+val
                elif key == "glass":
                    sumglass=sumglass+val
                elif key == "metal":
                    summetal=summetal+val
                elif key == "paper":
                    sumpaper=sumpaper+val
                elif key == "plastic":
                    sumplastic=sumplastic+val
                elif key == "trash":
                    sumtrash=sumtrash+val
        return {"sum_cardboard": sumcardboard,"sum_glass": sumglass,"sum_metal": summetal,"sum_paper": sumpaper,"sum_plastic":sumplastic,"sum_trash":sumtrash}
    elif request.interval == "daily":

        userwasteresult = db.userWasteCollection.find({"date": request.date})
        sumcardboard=0
        sumglass=0
        summetal=0
        sumpaper=0
        sumplastic=0
        sumtrash=0
        for record in userwasteresult:
            print(record)
            for key,val in record.items():
                print(key,val)
                if key== "cardboard":
                    sumcardboard=sumcardboard+val
                elif key == "glass":
                    sumglass=sumglass+val
                elif key == "metal":
                    summetal=summetal+val
                elif key == "paper":
                    sumpaper=sumpaper+val
                elif key == "plastic":
                    sumplastic=sumplastic+val
                elif key == "trash":
                    sumtrash=sumtrash+val
        return {"sum_cardboard": sumcardboard,"sum_glass": sumglass,"sum_metal": summetal,"sum_paper": sumpaper,"sum_plastic":sumplastic,"sum_trash":sumtrash}
    elif request.interval == "weekly-daily":
        week_ago = request.date - date.timedelta(days=7)

        userwasteresult = db.userWasteCollection.find({"date": {"$gte": week_ago, "$lt": request.date}})
        result = []
        for record in userwasteresult:
            #print(record)

            for key,val in record.items():
                if key=="_id":
                    record["_id"] = str(record["_id"])
            result.append(record)



        return result









