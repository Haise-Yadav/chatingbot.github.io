import requests

# URL of your chatbot server's endpoint
url = "http://localhost:5000/get_response"  # Replace with your server's URL

# JSON data to send in the request
data = {"message": "menu"}

# Send a POST request
response = requests.post(url, json=data)

# Print the response
print(response.json())
