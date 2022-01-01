## Helper for pull on redeploy docker-compose service

### Example: 

 Pull and redeploy service whois

``
curl --location --request POST 'http://localhost:3000' --header 'Content-Type: application/json' --data-raw '{"service": "whois"}'
``