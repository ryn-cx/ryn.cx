from get_around import GetAround

# Route requests through a proxy server.
client = GetAround(server="https://proxy-server", password="password")

# Mirrors httpx's request API and returns standard httpx.Response objects.
response = client.get("https://httpbin.org/get", params={"foo": "bar"})

# POST with a JSON body.
response = client.post("https://httpbin.org/post", json={"key": "value"})

# Upstream HTTP errors (404, 500, etc.) are returned as normal responses,
# not raised. Check response.status_code as you would with httpx.
print(response.status_code)
