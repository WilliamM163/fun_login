# Fun Login: Snake Your Way In! 🐍

## Project Description
Fun Login introduces a novel and engaging login system.
Instead of relying on traditional passwords, users authenticate by solving a unique, randomly generated snake game puzzle.
The specific sequence of moves a user takes to complete the game becomes their "password."
This adds a layer of fun and interactivity to the login process, making it more memorable and potentially more secure.

## Tech Stack
* **Frontend:**
    * React
* **Backend:**
    * Node.js
    * Express.js
* **Database:**
    * PostgreSQL

## Features
* **Unique Snake Game Passwords:** Each user's login sequence is determined by their solution to a randomly generated snake game.
* **Interactive and Engaging Login:** Replaces the mundane password entry with a fun and challenging game.
* **Secure Authentication:** The complexity of snake game solutions provides a potentially strong authentication method.
* **User Registration and Profile:** Standard user registration and profile management.
* **Responsive Design:** Ensures a seamless experience across various devices.

## Setup Instructions
1.  **Clone the Repository:**

    ```bash
    git clone <repository_url>
    cd fun_login
    ```

2.  **Backend Setup (Node.js/Express.js):**

    * Navigate to the `server` directory:

        ```bash
        cd server
        ```

    * Install dependencies:

        ```bash
        npm install
        ```

    * Create a `.env` file in the `backend` directory and add the following environment variables:

        ```
        DATABASE_URL=postgres://<user>:<password>@<host>:<port>/<database>
        JWT_SECRET=<your_jwt_secret>
        PORT=5000 #or whatever port you want the backend to run on.
        ```

        * replace the database values with your postgres values.
        * generate a secure string for the JWT_SECRET.
    * Initializing the database tables
        ```bash
        psql -U [your_postgresql_username] -d [your_postgresql_database_name] -f setup.sql
        ```

    * Start the backend server:

        ```bash
        npm run dev
        ```

3.  **Frontend Setup (React):**

    * Navigate to the `client` directory:

        ```bash
        cd client
        ```

    * Install dependencies:

        ```bash
        npm install
        ```

    * Create a `.env` file in the `client` directory and add the following environment variable:

        ```
        API_URL=http://localhost:5000
        ```

    * Start the frontend development server:

        ```bash
        npm run dev
        ```

4.  **Database Setup (PostgreSQL):**

    * Ensure you have PostgreSQL installed and running.
    * Create a database with the name specified in your `.env` file.
    * Ensure your postgres user has the correct permissions.

## Usage
1.  **Registration:**
    * Open the application in your browser.
    * Click on the "Register" button.
    * Fill in the required information.
    * Solve the snake puzzle presented to you.
    * The solution to this puzzle will be your password.
2.  **Login:**
    * Enter your username.
    * Solve the snake puzzle that is presented to you.
    * Solve it in the exact same way you did when you registered.
3.  **Profile:**
    * After logging in you chat to everyone registered on the site.
