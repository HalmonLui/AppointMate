# Generate Synthetic data to match json in test.json

import json
import random
import requests
from faker import Faker
from datetime import date, datetime, timedelta
from typing import Sequence
# @TODO: add yelp api


class SyntheticDataCreation(object):
    def __init__(self, theme):
        self.theme = theme
        if self.theme not in ('yelp', 'names'):
            raise ValueError("invalid dataset theme")

        self.output_data = {}

    def gen_data_range(self, start, end):
        start = datetime.strptime(start, '%Y-%m-%d')
        end = datetime.strptime(end, '%Y-%m-%d')
        if start < end:
            date_range = [
                start + timedelta(days=x)
                for x in range(0, (end - start).days + 1)
            ]

        else:
            date_range = [
                start - timedelta(days=x)
                for x in range(0, (start - end).days + 1)
            ]

        date_range = [d.strftime('%Y-%m-%d') for d in date_range]

        return date_range

    def business_name_generator(self):
        if self.theme != 'yelp':
            name_prefixes = ['Nicole', 'Brian', 'Halmon', 'Parker', 'Tommy']
            postfixes = ['A', 'B', 'C', 'D']
            business_names = []
            for name in name_prefixes:
                for letter in postfixes:
                    business_names.append(name + ' Salon ' + letter)

            return business_names
        else:
            print('Hello World :)')

    def gen_empty_dict(self, date_range):
        data_dict = {}
        for date in date_range:
            data_dict[date] = []

        return data_dict

    def gen_opening_hours_dict(self, times, num_of_op_days):
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
                op_hours_dict[d].append(
                    {"Start": "0"+str(times[0][0])+"00", "End": str(times[0][1])+"00"})
            elif len(times) == 2:
                op_hours_dict[d].append(
                    {"Start": "0"+str(times[0][0])+"00", "End": str(times[0][1])+"00"})
                op_hours_dict[d].append(
                    {"Start": str(times[1][0])+"00", "End": str(times[1][1])+"00"})

        return op_hours_dict

    def gen_stylists(self, num_of_stylists, times):
        stylist_dict = []
        faker = Faker(['en_US'])
        for _ in range(num_of_stylists):
            stylist_dict.append(
                {"name": faker.name(), "type": [], "availability": {}})

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

    def gen_json_data(self, name):
        types = ["Hair Salon", "Nail Salon",
                 "Barbershop", "Spa Center", "Piercing Parlor"]
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
            "opening-hours": self.gen_opening_hours_dict(times, num_of_op_days),
            "rating": round(random.uniform(3.49, 5.00), 2),
            "price": {},
            "stylists": self.gen_stylists(num_of_stylists, times),
            "distance": 0.0
        }

        return business_dict

    def create_dataset(self, data_dict, business_names, date_range):
        for name in business_names:
            business_dict = self.gen_json_data(name)
            for date in date_range:
                data_dict[date].append(business_dict)

        # Add in random availabilities
        for date in date_range:  # each date key
            # each dict in the date key val array
            for i in range(len(data_dict[date])):
                # each stylist in stylist arr
                for j in range(len(data_dict[date][i]["stylists"])):
                    # iterate the dicts
                    for key, value in data_dict[date][i]["stylists"][j]["availability"].items():
                        data_dict[date][i]["stylists"][j]["availability"][key] = random.randint(
                            0, 1)

        self.output_data = data_dict


if __name__ == "__main__":
    print('Hello World')
    a = SyntheticDataCreation(theme='names')
    d_r = a.gen_data_range(start='2020-06-15', end='2020-06-20')
    print(d_r)
    names = a.business_name_generator()
    data_dict = a.gen_empty_dict(d_r)
    a.create_dataset(data_dict, names, d_r)
    print(json.dumps(a.output_data, indent=4))

    # Yelp API testing
    """
    f2 = open('keys.json',)
    data3 = json.load(f2)
    data4 = json.dumps(data3)  # takes dict and returns string
    yelp_creds = json.loads(data4)  # takes string and returns dict

    api_key = yelp_creds["yelp"]["apiKey"]
    headers = {'Authorization': 'Bearer %s' % api_key}

    url='https://api.yelp.com/v3/businesses/search'
    params={'term':'salon', 'location':'San Francisco'}
    req = requests.get(url, params=params, headers=headers)
    parsed = json.loads(req.text)
    print(json.dumps(parsed, indent=4))
    """
