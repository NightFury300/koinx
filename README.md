# Cryptocurrency Data API

This is a server-side application built with Node.js and MongoDB. The application fetches cryptocurrency data (Bitcoin, Matic, Ethereum) from the CoinGecko API and stores it in a database. The application exposes APIs for retrieving the latest data, statistics, and standard deviation of the cryptocurrency prices.

## Features
- **Background Job**: Fetches cryptocurrency data (price, market cap, and 24h change) for Bitcoin, Matic, and Ethereum every 2 hours and stores it in the database.
- **Fetch Latest Data**: Provides an API to retrieve the latest cryptocurrency data.
- **Standard Deviation**: Calculates and returns the standard deviation of the last 100 cryptocurrency price records stored in the database.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **External API**: CoinGecko

## API Endpoints

### 1. `/stats`
- **Method**: `GET`
- **Description**: Fetches the latest data for the requested cryptocurrency.
- **Query Parameters**:
    - `coin` (string): The name of the cryptocurrency (either `bitcoin`, `matic-network`, or `ethereum`).
  
- **Sample Request**:
    ```http
    GET /stats?coin=bitcoin
    ```

- **Sample Response**:
    ```json
    {
      "price": 40000,
      "marketCap": 800000000,
      "24hChange": 3.4
    }
    ```

### 2. `/deviation`
- **Method**: `GET`
- **Description**: Calculates and returns the standard deviation of the last 100 price records for the requested cryptocurrency.
- **Query Parameters**:
    - `coin` (string): The name of the cryptocurrency (either `bitcoin`, `matic-network`, or `ethereum`).
  
- **Sample Request**:
    ```http
    GET /deviation?coin=bitcoin
    ```

- **Sample Response**:
    ```json
    {
      "deviation": 4082.48
    }
    ```

## How to Set Up

1. Clone the repository:
    ```bash
    git clone https://github.com/NightFury300/koinx.git
    ```
2. Change Directory and Install dependencies:
    ```bash
    cd koinx
    npm install
    ```
3. Set up the MongoDB URI in `.env` file.
4. Start the server:
    ```bash
    npm run dev
    ```
5. The API will be available at `http://localhost:3000/api/v1`.

## Acknowledgments

Thank you for checking out the Cryptocurrency Data API! For any inquiries or feedback, feel free to reach out to me at [shubhsaxena447@gmail.com](mailto:shubhsaxena447@gmail.com).
