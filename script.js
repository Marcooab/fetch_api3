const url = "https://reqres.in/api/users"

fetch(url, 
    {method: "POST", 
    headers: {
        "Content-type": "application/json"},
    body: JSON.stringify({name: "Marco"})})
    .then((response) => response.json())
    .then((data) => console.log(data))
