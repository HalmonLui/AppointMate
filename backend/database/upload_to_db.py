from dotenv import load_dotenv
import pymongo
import os
import json
import sys
sys.path.insert(1, '/Users/sonamghosh/Desktop/square_hacks_2020/square-hackathon/backend/search/')
from dataset_generator import SyntheticBusinessDataCreation, SyntheticUserDataCreation


def test_upload(data, dbname):
    load_dotenv()
    client = pymongo.MongoClient(os.getenv("MONGO_NORM_USER"))
    for date in data:
        print(date)
        db = client[dbname][date]
        db.insert_many(data[date])

if __name__ == "__main__":
    f = open("/Users/sonamghosh/Desktop/square_hacks_2020/square-hackathon/backend/search/sample_names_data.json")
    data = json.load(f)
    print(type(data))
    print(type(data["2020-06-15"]))
    test_upload(data, "business")