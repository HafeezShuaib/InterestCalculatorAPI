# Interest Calculator API

A simple Node.js and Express API for calculating simple and compound interest.

## API Features

* Calculates simple interest and total amount.
* Calculates compound interest and total amount.
* Includes input validation for all parameters.
* Displays final result along side inputs rendered.

## Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher recommended)
* [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/HafeezShuaib/InterestCalculatorAPI.git
    cd InterestCalculatorAPI
    ```

2.  **Installing dependencies:**
    This will install `express`, `morgan` and `nodemon` as listed in `package.json`:
    ```sh
    npm install
    ```

## Running the Application

* ### For Development

    This will use `nodemon` to automatically restart the server when you make changes to the files:

    ```sh
    nodemon app.js
    ```

    This will run the application using node:

    ```sh
    node app.js
    ```

Once running, the server will be available at http://localhost:3000.

* ### API Endpoints

    This API provides two (2) endpoints for calculations:
    ```sh
    POST /api/calculate/simple-interest

    POST /api/calculate/compound-interest
    ```


For detailed information on request/response formats, please see the full [API Documentation](https://drive.google.com/file/d/1lWUbloQKyuBcyelNGcyQPb5zn_LQF9q1/view?usp=sharing).