import urllib2
import urllib
import json
import pprint

# Make the HTTP request.
request_headers = {"api-key": "YOUR_API_KEY_HERE"}
request = urllib2.Request('https://api.data.gov.sg/v1/transport/taxi-availability', 
			  headers=request_headers)

response = urllib2.urlopen(request)
assert response.code == 200

# Use the json module to load CKAN's response into a dictionary.
response_dict = json.loads(response.read())
print(response_dict)

# Check the contents of the response.
pprint.pprint(response_dict)

with open('taxi_output.json', 'w') as outfile:
    json.dump(response_dict, outfile)

