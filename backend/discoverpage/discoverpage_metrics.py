import json
import ast
from heapq import nlargest
# Recommended, Hot Deals, Trending Near you

"""
So... current brute force approach:
recommendations ---> top 5 ratings (maybe incorporate distance(?))
trending near you ----> grab top 10 near you in distance and out of those 10 grab the top 5 with the most bookings (AND rating >4.0?). 
Hot Deals ---> top 5 smallest price for some service
"""

def get_recommended_posts(data, date):
    # Brute Force recommendation based on ratings
    top5 = nlargest(5, data[date], key=lambda i: i["rating"])

    return top5




if __name__ == "__main__":
    f = open('/Users/sonamghosh/Desktop/square_hacks_2020/square-hackathon/backend/search/sample_names_data.json')
    data = json.load(f)
    ratings = []
    for d in data['2020-06-15']:
        ratings.append(d["rating"])
    
    print(sorted(ratings))

    top5 = nlargest(5, data['2020-06-15'], key=lambda i: i["rating"])
    print(len(top5))
    print([i['rating'] for i in top5])
        