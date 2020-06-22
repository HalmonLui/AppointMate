from ics import Calendar, Event

def generate_ics(appoint):
  c = Calendar()
  e = Event()
  e.name = "Appointment with "+ appoint['stylist'] +" at "+ appoint['salon']
  e.begin = appoint['starttime']
  e.end = appoint['endtime']
  c.events.add(e)
  c.events

  with open('event.ics', 'w') as my_event:
    my_event.write(str(c))
  return
 