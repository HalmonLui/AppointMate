# Author: Sonam Ghosh

# The following script provides utility functions to be used for all search page functionalities.

import urllib.parse
import requests
from typing import List, Tuple
from math import sin, cos, sqrt, atan2, radians


def address_to_latlong(address: str) -> Tuple:
    url = 'https://nominatim.openstreetmap.org/search/' + \
        urllib.parse.quote(address) + '?format=json'
    response = requests.get(url).json()
    return (float(response[0]["lat"]), float(response[0]["lon"]))


def find_distance(start_loc: Tuple, end_loc: Tuple, unit: str) -> float:
    if unit not in ('km', 'mi'):
        raise ValueError('Not valid unit, choose between km or mi')

    lat1, lon1 = start_loc
    lat2, lon2 = end_loc

    lat1 = radians(lat1)
    lon1 = radians(lon1)
    lat2 = radians(lat2)
    lon2 = radians(lon2)

    # Approximate radius of the earth in km
    radius = 6371

    dlat = lat2 - lat1
    dlon = lon2 - lon1

    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = radius * c

    if unit == 'mi':
        distance = distance / 1.609

    return distance


if __name__ == "__main__":
    # Testing 123
    print('Hello World')
    address = '754 Post St, San Francisco, CA 94109'
    a = address_to_latlong(address)
    address2 = 'Salesforce Tower, San Francisco, CA'
    b = address_to_latlong(address2)
    print(find_distance(a, b, unit='mi'))
