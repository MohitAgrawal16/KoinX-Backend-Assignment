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
