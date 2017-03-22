# eShop web application

## Requirements
 - Apache Maven: 3.3.9
 - Java: 1.8.0_101

## Installation
 - Create file email.properties in eShopBack folder an fill it with props:
    - smtp.host (e.g. smtp.gmail.com) 
    - smtp.port (e.g. 587) 
    - smtp.username
    - smtp.password
 - Run "mvn install" at the root folder (will start the app)
 
## Info

1. Server will start at localhost:8080/eShopFront
2. Backend api will start at localhost:8080/eShopBack
3. You can access embedded H2 db console at localhost:8082. Enter jdbc:h2:mem:testdb in url.