import pymongo
mongoURI = "mongodb+srv://Shruti:ssishere12590@crescendo.x82d1jl.mongodb.net/?retryWrites=true&w=majority"

client = pymongo.MongoClient(mongoURI)

db = client['wasteManagement']
userCollection = db['users']
userWasteCollection = db['userWaste']





