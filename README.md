# Imagined Internship Assignment

An e-commerce API built with Express and MongoDB, using TypeScript.

## Overview

This API provides a set of HTTP endpoints to facilitate CRUD operations on a MongoDB database.

## Endpoints

<!-- USERS -->

### Get list of all Users

Returns a list of all existing Users and their properties. </br>

Endpoint: `GET /api/users` </br>
Returns: `JSON` Array of User objects</br>

<!-- Example Request:

> https://imagined-assignment.vercel.app/api/users/

Example Response:

```json
[
  {
    "_id": "675181c54f3b0cc1ff661024",
    "name": "Jimmy",
    "email": "jimmy@example.com",
    "phone": "1234567890",
    "__v": 0
  },
  {
    "_id": "675181e54f3b0cc1ff661027",
    "name": "Jack",
    "email": "jack@example.com",
    "phone": "1213334445",
    "__v": 0
  }
]
``` -->

### Get a specific User

Returns a single User and its properties. Requires ID of the User.</br>

Endpoint: `GET /api/users/{user_id}` </br>
Returns: `JSON` User object</br>

<!-- Example Request:

> https://imagined-assignment.vercel.app/api/users/{user_id}

Example Response:

```json
{
  "_id": "675181e54f3b0cc1ff661027",
  "name": "Jack",
  "email": "jack@example.com",
  "phone": "1213334445",
  "__v": 0
}
``` -->

### Create a new User

Creates a new User and returns its ID</br>

Endpoint: `POST /api/users/create` </br>
Returns: `JSON` User ID and name</br>

<!-- more data -->

### Update an existing User

Updates an existing User by its ID and returns the new User object.</br>

Endpoint: `PATCH /api/users/{user_id}`</br>
Returns: `JSON` new User object</br>

<!-- more data -->

### Get all orders of a User

Gets all orders of a specific User based on its ID.</br>

Endpoint: `GET /api/users/{user_id}/orders` </br>
Returns: `JSON` Array of Order objects</br>

<!-- more data -->

### Delete a User

Deletes a User based on its ID.</br>

Endpoint: `DELETE /api/users/delete/{user_id}` </br>
Returns: Delete action status.</br>

<!-- more data -->

<!-- PRODUCTS -->

### Get list of all Products

Returns a list of all existing Products and their properties. </br>

Endpoint: `GET /api/products` </br>
Returns: `JSON` Array of Product objects</br>

<!-- more data -->

### Get a specific Product

Returns a single Product and its properties. Requires ID of the Product.</br>

Endpoint: `GET /api/products/{product_id}` </br>
Returns: `JSON` Product object</br>

<!-- more data -->

### Create a new Product

Creates a new Product and returns its ID</br>

Endpoint: `POST /api/products/create` </br>
Returns: `JSON` Product ID and name</br>

<!-- more data -->

### Update an existing Product

Updates an existing Product by its ID and returns the new Product object.</br>

Endpoint: `PATCH /api/product/{product_id}` </br>
Returns: `JSON` new Product object</br>

<!-- more data -->

### Get a total of all Products in stock

Sums the stock quantity of all Products.</br>

Endpoint: `GET /api/products/stock`</br>
Returns: `JSON` Number of Products</br>

<!-- more data -->

### Get all Users who bought Product

Gets a list of Users who ordered a specific product by its Product ID, and their respective Order IDs.</br>

Endpoint: `GET /api/products/{product_id}/bought-by`</br>
Returns: `JSON` Array of User names and Order IDs</br>

<!-- more data -->

### Delete a Product

Deletes a Product based on its ID.</br>

Endpoint: `DELETE /api/users/product/delete/{product_id}` </br>
Returns: Delete action status.</br>

<!-- more data -->

<!-- ORDERS -->

### Get list of all Orders

Returns a list of all existing Orders and their properties. </br>

Endpoint: `GET /api/orders` </br>
Returns: `JSON` Array of Order objects</br>

<!-- more data -->

### Get a specific Order

Returns a single Order and its properties. Requires ID of the Order.</br>

Endpoint: `GET /api/order/{order_id}` </br>
Returns: `JSON` Order object</br>

<!-- more data -->

### Create a new Order

Creates a new Order and returns its ID</br>

Endpoint: `POST /api/orders/create` </br>
Returns: `JSON` Order ID</br>

<!-- more data -->

### Update an existing Order

Updates an existing Order by its ID and returns the new Order object.</br>

Endpoint: `PATCH /api/orders/{order_id}` </br>
Returns: `JSON` new Order object</br>

<!-- more data -->

### Get recent Orders

Gets orders placed in the past 7 days.</br>

Endpoint: `GET /api/orders/recent`</br>
Returns: `JSON` List of Product Objects</br>

<!-- more data -->

### Delete an Order

Deletes an Order based on its ID.</br>

Endpoint: `DELETE /api/users/orders/delete/{product_id}` </br>
Returns: Delete action status.</br>

<!-- more data -->
