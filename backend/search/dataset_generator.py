# Generate Synthetic data to match json in test.json

import json
import random
import requests
from faker import Faker
from datetime import date, datetime, timedelta
from typing import Sequence
import pandas as pd
from pandasql import *
from utils import address_to_latlong, find_distance
# @TODO: add yelp api


class SyntheticBusinessDataCreation(object):
    def __init__(self, theme, location=None):
        self.theme = theme
        if self.theme not in ('yelp', 'names'):
            raise ValueError("invalid dataset theme")

        self.output_data = {}
        self.location = location
        if self.location:
            self.location = address_to_latlong(self.location)
        self.types = ["Hair Salon", "Nail Salon",
                      "Barbershop", "Spa Center", "Piercing Parlor"]

        self.services = {}
        for t in self.types:
            if t == "Hair Salon":
                self.services[t] = [("Haircut", 50, 120), ("Wash&BlowDry", 70, 130), ("Haircolor", 100, 200)]
            if t == "Nail Salon":
                self.services[t] = [("Manicure", 30, 70), ("Pedicure", 40, 100)]
            if t == "Barbershop":
                self.services[t] = [("Haircut", 60, 140), ("Shave", 60, 80)]
            if t == "Spa Center":
                self.services[t] = [("Facial", 50, 120), ("Massage Therapy", 60, 120), ("Waxing", 50, 80), ("Body Treatment", 80, 110)]
            if t == "Piercing Parlor":
                self.services[t] = [("Ear Piercing", 40, 60), ("Body Piercing", 30, 65), ("Tattoo", 100, 250)]
    
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

    def gen_pricing_dict(self, biz_type):
        pricing_dict = {}
        for t in self.services[biz_type]:
            pricing_dict[t[0]] = 5 * round(random.randint(t[1], t[2]) / 5)
        
        return pricing_dict


    def gen_json_data(self, name):
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
            "type": random.sample(self.types, 1)[0],
            "location": "",
            "image_url": "",
            "opening-hours": self.gen_opening_hours_dict(times, num_of_op_days),
            "rating": round(random.uniform(3.49, 5.00), 2),
            "num_of_ratings": random.randint(300, 1000),
            "price": {},
            "stylists": self.gen_stylists(num_of_stylists, times),
            "distance": 0.0
        }

        business_dict["price"] = self.gen_pricing_dict(business_dict["type"])

        return business_dict

    def query_photos(self, num, query):
        f = open('keys.json')
        keys_data = json.load(f)
        client_id = keys_data["unsplash"]["clientID"]

        url = f"https://unsplash.com/napi/search?query={query}&xp=&per_page={num}"
        headers = {
            'authorization': f"Client-ID {client_id}"
        }
        response = requests.get(url, headers=headers)
        res_dict = json.loads(response.text)
        photo_urls = [x["urls"]["small"]
                      for x in res_dict["photos"]["results"]]

        return photo_urls

    def gen_random_addresses(self, num, city, state):
        if city == "San Francisco" and state == "CA":
            df = pd.read_csv(
                "/Users/sonamghosh/Downloads/Photos Library/us/ca/san_francisco.csv")
            max_rows = df.shape[0]

        # Randomly select num number of rows
        query = f"""
        SELECT
            LON,
            LAT,
            NUMBER,
            STREET,
            POSTCODE
        FROM df
        WHERE abs(CAST(random() AS REAL))/9223372036854775808 < 0.5
        LIMIT {num};
        """

        output = sqldf(query, locals())
        address_lst = []
        for index, row in output.iterrows():
            address = row["NUMBER"] + " " + row["STREET"] + ", " + \
                city + ", " + state + " " + str(int(row["POSTCODE"]))
            address_lst.append(address)

        return address_lst

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

        image_urls = self.query_photos(num=20, query='salon')
        addresses = self.gen_random_addresses(
            num=20, city="San Francisco", state="CA")

        for date in date_range:
            for i in range(len(data_dict[date])):
                data_dict[date][i]["image_url"] = image_urls[i]
                data_dict[date][i]["location"] = addresses[i]
                latlong_coords = address_to_latlong(data_dict[date][i]["location"])
                data_dict[date][i]["distance"] = find_distance(self.location, latlong_coords, unit='mi')

        self.output_data = data_dict

    def save_data(self):
        if self.output_data:
            with open('sample_' + self.theme + '_data.json', 'w', encoding='utf-8') as f:
                json.dump(self.output_data, f, ensure_ascii=False, indent=4)


class SyntheticUserDataCreation(object):
    def __init__(self, name):
        self.name = name
    
    def gen_data_dict(self):
        Faker.seed(0)
        fake = Faker()
        self.data_dict = {
            "users": [
                {
                    "name": self.name,
                    "phone-number": fake.phone_number().split('x')[0],
                    "email": self.name.split(' ')[0].lower() + self.name.split(' ')[1].lower() + "@gmail.com",
                    "payment-methods": ["VISA", "GOOGLE PAY", "APPLE PAY"],
                    "notifications": 1,
                    "location": "",
                    "saved-businesses": []
                }
            ]
        }



if __name__ == "__main__":
    print('Hello World')
    b = SyntheticUserDataCreation("Sasuke Uchiha")
    b.gen_data_dict()
    print(b.data_dict)
    """
    a = SyntheticDataCreation(theme='names', location="754 Post St, San Francisco, CA 94109")
    d_r = a.gen_data_range(start='2020-06-15', end='2020-06-20')
    print(d_r)
    names = a.business_name_generator()
    data_dict = a.gen_empty_dict(d_r)
    a.create_dataset(data_dict, names, d_r)
    #print(json.dumps(a.output_data, indent=4))
    a.save_data()
    
    #a.gen_pricing_dict("Hair Salon")
    """

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
    with open('sample_' + 'yelp_data.json', 'w', encoding='utf-8') as f:
            json.dump(parsed, f, ensure_ascii=False, indent=4)
    """
