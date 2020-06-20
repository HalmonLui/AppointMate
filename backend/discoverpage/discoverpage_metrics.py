import json
import ast
from heapq import nlargest, nsmallest
# Recommended, Hot Deals, Trending Near you

"""
So... current brute force approach:
recommendations ---> top 5 ratings (maybe incorporate distance(?))
trending near you ----> grab top 10 near you in distance and out of those 10 grab the top 5 with the most bookings (AND rating >4.0?). 
Hot Deals ---> top 5 smallest price for some service

3 trendings, 4 recs, 4 hot deals
"""

def get_recommended_posts(data, date, n):
    # Brute Force recommendation based on ratings
    topN = nlargest(n, data[date], key=lambda i: i["rating"])

    return topN

def get_trending_posts(data, date, n):
    # grab top 10 near person in distance and out of those thosse grab top 1-9 with bookings
    # todo: rating filter >4
    # brute force
    if n > 9:
        raise ValueError("n must be 1 to 9")
    min10_dist = nsmallest(10, data[date], key=lambda i: i["distance"])
    avail_pcts = []
    for d in min10_dist:
        num_1s = 0.
        num_0s = 0.
        for dd in d["stylists"]:
            for key, val in dd["availability"].items():
                if val == 1:
                    num_1s += 1.
                else:
                    num_0s += 1.
        avail_pcts.append(round(num_1s / (num_1s + num_0s), 3))
    
    arg_maxs = sorted(range(len(avail_pcts)), key=lambda i: avail_pcts[i])[-n:]

    output = [min10_dist[i] for i in arg_maxs]

    return output[::-1]
    


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

    min10_dist = nsmallest(10, data['2020-06-15'], key=lambda i: i["distance"])
    print(len(min10_dist))
    print([i["distance"] for i in min10_dist])
    print([i["location"] for i in min10_dist])

    print(get_trending_posts(data, '2020-06-15', 4))

