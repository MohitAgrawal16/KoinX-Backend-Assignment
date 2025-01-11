# KoinX Backend Assignment

This repository contains the backend implementation for KoinX assignment. The server is deployed and accessible through the following URL:

**Server URL**: [https://koinx-assignment-h8jt.onrender.com](https://koinx-assignment-h8jt.onrender.com)

## API Endpoints

### 1. Get Coin Statistics
This route provides statistical data for the specified cryptocurrency.

**Endpoint**:  
`GET /api/stats`

**Query Parameters**:
- `coin` (required): The cryptocurrency for which you want to fetch statistics. Accepted values:
  - `bitcoin`
  - `ethereum`
  - `matic-network`

**Example Request**:  
GET /api/stats?coin=bitcoin


---

### 2. Get Deviation Data
This route returns the deviation data for the specified cryptocurrency.

**Endpoint**:  
`GET /api/deviation`

**Query Parameters**:
- `coin` (required): The cryptocurrency for which you want to fetch deviation data. Accepted values:
  - `bitcoin`
  - `ethereum`
  - `matic-network`

**Example Request**:  
GET /api/deviation?coin=bitcoin

## Database

MongoDB Atlas is used to deploy database.

The background job add details of three specified coins once every two hours.

![Screenshot 2025-01-11 132143](https://github.com/user-attachments/assets/6e60d465-78e7-49fd-b44f-5bcda95ef5f9)

![Screenshot 2025-01-11 132203](https://github.com/user-attachments/assets/e6b9538c-009d-45d6-bf8d-d35187bc2a81)

In this image you can see the createdAt field, there is difference of 2 hours.


## Project Structure

The project is organized in src folder as follows:

- **controllers/**  
  Contains the controller logic for handling API requests.

- **db/**  
  Contains database connection and configuration files.

- **models/**  
  Defines the database models and schemas.

- **routes/**  
  Contains route definitions for the API.

- **utils/**  
  Provides utility functions and helper methods.

- **app.js**  
  Initializes and configures the Express application.

- **index.js**  
  Entry point for the server.

