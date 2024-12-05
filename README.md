# Imagined Internship Assignment

An e-commerce API built with Express and MongoDB, using TypeScript.

## Overview

This API provides a set of HTTP endpoints to facilitate CRUD operations on a MongoDB database.

## Models

### User Model

```json
User
{
  "_id": ObjectId() (auto-generated), // Automatically generated
  "name": String, // Any String
  "email": String (required), // Must be a valid email
  "phone": String, // Must be a valid phone number
}
```

### Product Model

```json
Product
{
  "_id": ObjectId() (auto-generated), // Automatically generated
  "name": String, // Any String
  "category": string, // Any of "Clothing", "Footwear", or "Electronics"
  "price": Number (required), // Any integer >= 0
  "stock": Number (required), // Any integer >= 0
}
```

### Order Model

```json
Order
{
  "_id": ObjectId() (auto-generated), // Automatically generated
  "placedBy": ObjectId() (required), // Points to the User who placed this Order
  "products": Array[
    {
      "product": ObjectId() (required), // Points to a Product
      "quantity": Number (required) // The amount of a Product in this Order
    }
  ],
  "orderDate": Date // Date of order placement
}
```

## Endpoints

<!-- - Users
  1. `GET` /api/users/ - [Get All Users](#get-list-of-all-users)
  2. `GET` /api/users/{user_id} - [Get One User](#get-a-specific-user)
  3. `` -->

<!-- USERS -->

### Get list of all Users

Returns a list of all existing Users and their properties. </br>

Endpoint: `GET /api/users` </br>
Returns: `JSON` Array of User objects</br>

#### Example Request:

> (GET) https://imagined-assignment.vercel.app/api/users/

#### Example Response:

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
```

### Get a specific User

Returns a single User and its properties. Requires ID of the User.</br>

Endpoint: `GET /api/users/{user_id}` </br>
Returns: `JSON` User object</br>

#### Example Request:

> (GET) https://imagined-assignment.vercel.app/api/users/675181e54f3b0cc1ff661027

#### Example Response:

```json
{
  "_id": "675181e54f3b0cc1ff661027",
  "name": "Jack",
  "email": "jack@example.com",
  "phone": "1213334445",
  "__v": 0
}
```

### Create a new User

Creates a new User and returns its ID</br>

Endpoint: `POST /api/users/create` </br>
Returns: `JSON` User ID and name</br>

#### Example Request:

> (POST) https://imagined-assignment.vercel.app/api/users/create

BODY:

```json
{
  "name": "Jerry",
  "email": "jerry@example.com",
  "phone": "9876543210"
}
```

#### Example Response:

```json
{
  "name": "Jerry",
  "id": "6751b55a2905545d92d6edd3"
}
```

### Update an existing User

Updates an existing User by its ID and returns the new User object.</br>

Endpoint: `PATCH /api/users/{user_id}`</br>
Returns: `JSON` new User object</br>

#### Example Request:

> (PATCH) https://imagined-assignment.vercel.app/api/users/

BODY:

```json
{
  "phone": "5647382910"
}
```

#### Example Response:

```json
{
  "_id": "6751b55a2905545d92d6edd3",
  "name": "Jerry",
  "email": "jerry@example.com",
  "phone": "5647382910",
  "__v": 0
}
```

### Get all orders of a User

Gets all orders of a specific User based on its ID.</br>

Endpoint: `GET /api/users/{user_id}/orders` </br>
Returns: `JSON` Array of Order objects</br>

#### Example Request:

> (GET) https://imagined-assignment.vercel.app/api/users/6751b55a2905545d92d6edd3/orders

#### Example Response:

```json
[
  {
    "_id": "6751bb742905545d92d6edef",
    "placedBy": "6751b55a2905545d92d6edd3",
    "products": [
      {
        "product": "6751a219de2c872414f4e584",
        "quantity": 2,
        "_id": "6751bb742905545d92d6edf0"
      },
      {
        "product": "67518ad26a251af18b82e632",
        "quantity": 1,
        "_id": "6751bb742905545d92d6edf1"
      }
    ],
    "orderDate": "2024-01-01T00:00:00.000Z",
    "__v": 0
  }
]
```

### Delete a User

Deletes a User based on its ID.</br>

Endpoint: `DELETE /api/users/delete/{user_id}` </br>
Returns: Delete action status.</br>

#### Example Request:

> (DELETE) https://imagined-assignment.vercel.app/api/users/delete/6751b55a2905545d92d6edd3

#### Example Response:

```
Jerry with ID 6751b55a2905545d92d6edd3 deleted.
```

<!-- PRODUCTS -->

### Get list of all Products

Returns a list of all existing Products and their properties. </br>

Endpoint: `GET /api/products` </br>
Returns: `JSON` Array of Product objects</br>

#### Example Request:

> (GET) https://imagined-assignment.vercel.app/api/products

#### Example Response:

```json
[
  {
    "_id": "67518a766a251af18b82e628",
    "name": "Black Leather Shoes",
    "category": "Footwear",
    "price": 250,
    "stock": 249,
    "__v": 0
  },
  {
    "_id": "67518aa06a251af18b82e62b",
    "name": "White Trainers",
    "category": "Footwear",
    "price": 150,
    "stock": 250,
    "__v": 0
  }
]
```

### Get a specific Product

Returns a single Product and its properties. Requires ID of the Product.</br>

Endpoint: `GET /api/products/{product_id}` </br>
Returns: `JSON` Product object</br>

#### Example Request:

> (GET) https://imagined-assignment.vercel.app/api/products/6751a219de2c872414f4e584

#### Example Response:

```json
{
  "_id": "6751a219de2c872414f4e584",
  "name": "120W Charger Adapter",
  "category": "Electronics",
  "price": 25,
  "stock": 1000,
  "__v": 0
}
```

### Create a new Product

Creates a new Product and returns its ID</br>

Endpoint: `POST /api/products/create` </br>
Returns: `JSON` Product ID and name</br>

#### Example Request:

> https://imagined-assignment.vercel.app/api/products/create

BODY:

```json
{
  "name": "120W Charger Adapter",
  "category": "Electronics",
  "price": 25,
  "stock": 1000
}
```

#### Example Response:

```json
{
  "name": "120W Charger Adapter",
  "id": "6751a219de2c872414f4e584"
}
```

### Update an existing Product

Updates an existing Product by its ID and returns the new Product object.</br>

Endpoint: `PATCH /api/product/{product_id}` </br>
Returns: `JSON` new Product object</br>

#### Example Request:

> (PATCH) https://imagined-assignment.vercel.app/api/products/6751a219de2c872414f4e584

BODY:

```json
{
  "price": 15
}
```

#### Example Response:

```json
{
  "_id": "6751a219de2c872414f4e584",
  "name": "120W Charger Adapter",
  "category": "Electronics",
  "price": 15,
  "stock": 1000,
  "__v": 0
}
```

### Get a total of all Products in stock

Sums the stock quantity of all Products.</br>

Endpoint: `GET /api/products/stock`</br>
Returns: `JSON` Number of Products</br>

#### Example Request:

> (GET) https://imagined-assignment.vercel.app/api/products/stock

#### Example Response:

```json
[
  {
    "_id": null,
    "amount": 2163
  }
]
```

### Get all Users who bought Product

Gets a list of Users who ordered a specific product by its Product ID, and their respective Order IDs.</br>

Endpoint: `GET /api/products/{product_id}/bought-by`</br>
Returns: `JSON` Array of User names and Order IDs</br>

#### Example Request:

> (GET) https://imagined-assignment.vercel.app/api/products/67518ad26a251af18b82e632/bought-by

#### Example Response:

```json
[
  {
    "name": "Jones",
    "orderId": "67518ce06a251af18b82e64d"
  },
  {
    "name": "Jerry",
    "orderId": "6751bb742905545d92d6edef"
  }
]
```

### Delete a Product

Deletes a Product based on its ID.</br>

Endpoint: `DELETE /api/products/delete/{product_id}` </br>
Returns: Delete action status.</br>

#### Example Request:

> (DELETE) https://imagined-assignment.vercel.app/api/products/delete/6751a219de2c872414f4e584

#### Example Response:

```
120W Charger Adapter with ID 6751a219de2c872414f4e584 deleted.
```

<!-- ORDERS -->

### Get list of all Orders

Returns a list of all existing Orders and their properties. </br>

Endpoint: `GET /api/orders` </br>
Returns: `JSON` Array of Order objects</br>

#### Example Request:

> (GET) https://imagined-assignment.vercel.app/api/orders

#### Example Response:

```json
[
  {
    "_id": "67518c766a251af18b82e641",
    "placedBy": "67518a766a251af18b82e628",
    "products": [
      {
        "product": "67518a766a251af18b82e628",
        "quantity": 1,
        "_id": "67518c766a251af18b82e642"
      },
      {
        "product": "67518ae96a251af18b82e635",
        "quantity": 2,
        "_id": "67518c766a251af18b82e643"
      }
    ],
    "orderDate": "2024-12-05T11:07:54.431Z",
    "__v": 0
  },
  {
    "_id": "67518c946a251af18b82e648",
    "placedBy": "675181c54f3b0cc1ff661024",
    "products": [
      {
        "product": "67518b356a251af18b82e63e",
        "quantity": 1,
        "_id": "67518c946a251af18b82e649"
      }
    ],
    "orderDate": "2024-12-05T11:07:54.431Z",
    "__v": 0
  }
]
```

### Get a specific Order

Returns a single Order and its properties. Requires ID of the Order.</br>

Endpoint: `GET /api/order/{order_id}` </br>
Returns: `JSON` Order object</br>

#### Example Request:

> (GET) https://imagined-assignment.vercel.app/api/orders/67518c766a251af18b82e641

#### Example Response:

```json
{
  "_id": "67518c766a251af18b82e641",
  "placedBy": "67518a766a251af18b82e628",
  "products": [
    {
      "product": "67518a766a251af18b82e628",
      "quantity": 1,
      "_id": "67518c766a251af18b82e642"
    },
    {
      "product": "67518ae96a251af18b82e635",
      "quantity": 2,
      "_id": "67518c766a251af18b82e643"
    }
  ],
  "orderDate": "2024-12-05T11:07:54.431Z",
  "__v": 0
}
```

### Create a new Order

Creates a new Order and returns its ID</br>

Endpoint: `POST /api/orders/create` </br>
Returns: `JSON` Order ID</br>

#### Example Request:

> (POST) https://imagined-assignment.vercel.app/api/orders/create

BODY:

```json
{
  "placedBy": "6751b55a2905545d92d6edd3",
  "products": [
    {
      "product": "6751a219de2c872414f4e584",
      "quantity": 2
    },
    {
      "product": "67518ad26a251af18b82e632",
      "quantity": 1
    }
  ]
}
```

#### Example Response:

```json
{
  "id": "6751bb742905545d92d6edef"
}
```

### Update an existing Order

Updates an existing Order by its ID and returns the new Order object.</br>

Endpoint: `PATCH /api/orders/{order_id}` </br>
Returns: `JSON` new Order object</br>

#### Example Request:

> (PATCH) https://imagined-assignment.vercel.app/api/orders/6751bb742905545d92d6edef

BODY:

```json
{
  "orderDate": "2024-01-01"
}
```

#### Example Response:

```json
{
  "_id": "6751bb742905545d92d6edef",
  "placedBy": "6751b55a2905545d92d6edd3",
  "products": [
    {
      "product": "6751a219de2c872414f4e584",
      "quantity": 2,
      "_id": "6751bb742905545d92d6edf0"
    },
    {
      "product": "67518ad26a251af18b82e632",
      "quantity": 1,
      "_id": "6751bb742905545d92d6edf1"
    }
  ],
  "orderDate": "2024-01-01T00:00:00.000Z",
  "__v": 0
}
```

### Get recent Orders

Gets orders placed in the past 7 days.</br>

Endpoint: `GET /api/orders/recent`</br>
Returns: `JSON` List of Product Objects</br>

#### Example Request:

> (GET) https://imagined-assignment.vercel.app/api/orders/recent

#### Example Response:

```json
[
  {
    "_id": "67518c766a251af18b82e641",
    "placedBy": "67518a766a251af18b82e628",
    "products": [
      {
        "product": "67518a766a251af18b82e628",
        "quantity": 1,
        "_id": "67518c766a251af18b82e642"
      },
      {
        "product": "67518ae96a251af18b82e635",
        "quantity": 2,
        "_id": "67518c766a251af18b82e643"
      }
    ],
    "orderDate": "2024-12-05T11:07:54.431Z",
    "__v": 0
  },
  {
    "_id": "67518c946a251af18b82e648",
    "placedBy": "675181c54f3b0cc1ff661024",
    "products": [
      {
        "product": "67518b356a251af18b82e63e",
        "quantity": 1,
        "_id": "67518c946a251af18b82e649"
      }
    ],
    "orderDate": "2024-12-05T11:07:54.431Z",
    "__v": 0
  }
]
```

### Delete an Order

Deletes an Order based on its ID.</br>

Endpoint: `DELETE /api/users/orders/delete/{product_id}` </br>
Returns: Delete action status.</br>

#### Example Request:

> (POST) https://imagined-assignment.vercel.app/api/orers/delete/67518c766a251af18b82e641

#### Example Response:

```
Order with ID 67518c766a251af18b82e641 deleted
```
