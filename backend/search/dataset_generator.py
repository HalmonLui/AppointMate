# Generate Synthetic data to match json in test.json

import json
import barnum
import random
from faker import Faker
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

def gen_stylists(num_of_stylists, times):
    stylist_dict = []
    faker = Faker(['en_US'])
    for _ in range(num_of_stylists):
        stylist_dict.append({"name": faker.name(), "type": [], "availability": {}})
    
    # pre fill in times as available for now and keep schedules consistent for now
    if len(times) == 1:
        start = times[0][0]
        end = times[0][1]
        #time_range = range(start, end)
        slots = []
        for num in range(start, end):
            if num < 10:
                slots.append("0"+str(num)+"00"+"-0"+str(num)+"45")
            else:
                slots.append(str(num)+"00-"+str(num)+"45")
    elif len(times) == 2:
        start1 = times[0][0]
        end1 = times[0][1]
        start2 = times[1][0]
        end2 = times[1][1]
        slots = []
        for num in range(start1, end1):
            if num < 10:
                slots.append("0"+str(num)+"00"+"-0"+str(num)+"45")
            else:
                slots.append(str(num)+"00-"+str(num)+"45")
        for num in range(start2, end2):
            slots.append(str(num)+"00-"+str(num)+"45")
    
    for d in stylist_dict:
        for slot in slots:
            d["availability"][slot] = 1
    
    return stylist_dict


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

    # number of stylists
    num_of_stylists = random.randint(2, 3)

    business_dict = {
    "name": name,
    "type": list(set([random.choice(types) for i in range(random.randint(1, 3))])),
    "location": "",
    "opening-hours": gen_opening_hours_dict(times, num_of_op_days),
    "rating": round(random.uniform(3.49, 5.00), 2),
    "price": {},
    "stylists": gen_stylists(num_of_stylists, times),
    "distance": 0.0
    }

    return business_dict

for name in temp_names:
    business_dict = gen_json_data(name)
    for date in dates:
        d[date].append(business_dict)

print(json.dumps(d, indent=4))
