import json
from heapq import nlargest, nsmallest
import pandas as pd
import numpy as np
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

def get_hot_deals(data, date):
    salon_types = ["Hair Salon", "Nail Salon",
                    "Barbershop", "Spa Center", "Piercing Parlor"]
    
    df = pd.DataFrame(data[date])
    output = []
    for st in salon_types:
        salon_df = df[df.type == st]
        salon_df['sum_of_services'] = salon_df.apply(lambda row: sum(row.price.values()), axis=1)
        min_salon = salon_df.iloc[salon_df["sum_of_services"].values.argmin()].to_dict()
        min_salon.pop('sum_of_services', None)
        output.append(min_salon)

    return output


if __name__ == "__main__":
    f = open('/Users/sonamghosh/Desktop/square_hacks_2020/square-hackathon/backend/search/sample_names_data.json')
    data = json.load(f)

    top5 = nlargest(5, data['2020-06-15'], key=lambda i: i["rating"])
    print(len(top5))
    print([i['rating'] for i in top5])

    print(get_trending_posts(data, '2020-06-15', 4))

    df = pd.DataFrame(data['2020-06-15'])
    print(df.head(10))

    df2 = df[df.type == 'Hair Salon']

    df2['sum_of_services'] = df2.apply(lambda row: sum(row.price.values()), axis=1)

    print(df2.head(5))

    import numpy as np
    print(df2.iloc[df2["sum_of_services"].values.argmin()].to_dict())
    #print(df.groupby('type').count())
    print(get_hot_deals(data, '2020-06-15'))
