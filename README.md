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
    git clone [https://github.com/HafeezShuaib/InterestCalculatorAPI.git](https://github.com/HafeezShuaib/InterestCalculatorAPI.git)
    cd InterestCalculatorAPI
    ```

2.  **Installing dependencies:**
    This will install `express` and `nodemon` as listed in `package.json`:
    ```sh
    npm install
    ```

## Running the Application

* ### For Development

    This will use `nodemon` to automatically restart the server when you make changes to the files:

    ```sh
    nodemon app.js
    ```

* ### For Production

    This will run the application using node:

    ```sh
    node app.js
    ```

Once running, the server will be available at http://localhost:3001.

* ### API Endpoints

    This API provides two (2) endpoints for calculations:
    ```sh
    POST /api/calculate/simple-interest

    POST /api/calculate/compound-interest
    ```


For detailed information on request/response formats, please see the full [API Documentation]().