# Generate Synthetic data to match json in test.json

import json
import barnum
import random

# @TODO: add yelp api

f = open('test.json',)
data = json.load(f)
data2 = json.dumps(data)  # takes dict and returns string
dict_data = json.loads(data2)  # takes string and returns dict

print(dict_data)
print(json.dumps(data, indent=4))
print(type(dict_data))

print(barnum.create_company_name())

dates = ["2020-06-15", "2020-06-16", "2020-06-17", "2020-06-18",
         "2020-06-19", "2020-06-20"]

d = {}

for date in dates:
    d[date] = []

print(d)

name_prefixes = ['Nicole', 'Brian', 'Halmon', 'Parker', 'Tommy']
temp_names = []

for name in name_prefixes:
    for letter in ['A', 'B', 'C', 'D']:
        temp_names.append(name + ' Salon ' + letter)

print(temp_names)

skeleton_dict = {
    "name": "",
    "type": [],
    "location": "",
    "opening-hours": {
        "MON": [],
        "TUE": [],
        "WED": [],
        "THU": [],
        "FRI": [],
        "SAT": [],
        "SUN": []
    },
    "rating": 0.0,
    "price": {},
    "stylists": [],
    "distance": 0.0
}

stylist_dict = {
    "name": "",
    "type": [],
    "availability": {}
}

def gen_opening_hours_dict(times, num_of_op_days):
    op_hours_dict = {
        "MON": [],
        "TUE": [],
        "WED": [],
        "THU": [],
        "FRI": [],
        "SAT": [],
        "SUN": []
    }
    days = [key for key, val in op_hours_dict.items()]
    if num_of_op_days != 7:
        days = days[0:num_of_op_days+1]
    
    for d in days:
        if len(times) == 1:
            op_hours_dict[d].append({"Start": "0"+str(times[0][0])+"00", "End": str(times[0][1])+"00"})
        elif len(times) == 2:
            op_hours_dict[d].append({"Start": "0"+str(times[0][0])+"00", "End": str(times[0][1])+"00"})
            op_hours_dict[d].append({"Start": str(times[1][0])+"00", "End": str(times[1][1])+"00"})
    
    return op_hours_dict
    
def gen_json_data(name):
    types = ["Hair Salon", "Nail Salon", "Barbershop", "Spa Center", "Piercing Parlor"]
    # Whether this business has a break in between
    num_of_op_times = random.randint(1, 2)
    
    if num_of_op_times == 1:
        # Choose bet
        start = random.randint(7, 9)
        end = random.randint(18, 21)
        times = [(start, end)]
    elif num_of_op_times == 2:
        start1 = random.randint(7, 9)
        end1 = start1 + 4 
        start2 = end1 + 1
        end2 = random.randint(start2, 21)
        times = [(start1, end1), (start2, end2)]
    
    # Choose if M-F or M-Sat or M-Sun
    num_of_op_days = random.randint(5, 7)

    business_dict = {
    "name": name,
    "type": list(set([random.choice(types) for i in range(random.randint(1, 3))])),
    "location": "",
    "opening-hours": gen_opening_hours_dict(times, num_of_op_days),
    "rating": round(random.uniform(3.49, 5.00), 2),
    "price": {},
    "stylists": [],
    "distance": 0.0
    }

    return business_dict

for date in dates:
    for name in temp_names:
        d[date].append(gen_json_data(name))

print(json.dumps(d, indent=4))