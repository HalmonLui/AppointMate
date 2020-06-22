
def create_loyalty_account():
  result = client.loyalty.create_loyalty_account(
    body = {
      "loyalty_account": {
        "mappings": [
          {
            "type": "PHONE",
            "value": "+14155551234"
          }
        ],
        "program_id": "d619f755-2d17-41f3-990d-c04ecedd64dd"
      },
      "idempotency_key": "ec78c477-b1c3-4899-a209-a4e71337c996"
    }
  )

def search_loyalty_accounts():
  if result.is_success():
    print(result.body)
  elif result.is_error():
    print(result.errors)


    result = client.loyalty.search_loyalty_accounts(
    body = {
      "query": {
        "mappings": [
          {
            "type": "PHONE",
            "value": "+14155551234"
          }
        ]
      },
      "limit": 10
    }
  )

  if result.is_success():
    print(result.body)
  elif result.is_error():
    print(result.errors)

def retrieve_loyalty_account():
  result = client.loyalty.retrieve_loyalty_account(
    account_id = "79b807d2-d786-46a9-933b-918028d7a8c5"
  )

  if result.is_success():
    print(result.body)
  elif result.is_error():
    print(result.errors)
    
def accumulate_loyalty_points():
  result = client.loyalty.accumulate_loyalty_points(
    account_id = "5adcb100-07f1-4ee7-b8c6-6bb9ebc474bd",
    body = {
      "accumulate_points": {
        "order_id": "RFZfrdtm3mhO1oGzf5Cx7fEMsmGZY"
      },
      "idempotency_key": "58b90739-c3e8-4b11-85f7-e636d48d72cb",
      "location_id": "P034NEENMD09F"
    }
  )

  if result.is_success():
    print(result.body)
  elif result.is_error():
    print(result.errors)