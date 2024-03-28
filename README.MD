# User Management API - Backend Project

## Project Overview

This project is a User Management API built using Node.js and an SQL database (MySQL) for data storage. It implements CRUD (Create, Read, Update, Delete) operations for managing users, along with authentication using JSON Web Tokens (JWT) for securing API endpoints.

## Features

1. **Backend Framework and Database:**
   - Uses Node.js as the backend framework.
   - Utilizes an SQL database (MySQL) for data storage.
   - Implements configuration to connect to the SQL database.
   - Sets up a schema or table structure to store user data.

2. **Validation and Error Handling:**
   - Implements proper validation for input data and database operations.
   - Validates user input to ensure required fields are provided and have appropriate formats.
   - Handles errors that may occur during database operations and provides meaningful error messages in the API responses.

3. **SQL Queries:**
   - Uses appropriate SQL queries to interact with the database.
   - Creates SQL queries to insert new users, retrieve user details, update user details, and delete users.

4. **RESTful API Endpoints:**
   - Implements RESTful API endpoints for CRUD operations using the Express.js framework.
   - Creates API endpoints for creating, retrieving, updating, and deleting users.
   - Uses appropriate HTTP methods (POST, GET, PUT, DELETE) and URL patterns for each endpoint.

5. **Authentication with JWT:**
   - Secures API endpoints by implementing authentication using JSON Web Tokens (JWT).
   - Implements user authentication using JWT.
   - Protects the API endpoints, allowing only authenticated requests to access the user management functionality.

6. **Implement Pagination:**
   - Modified the API endpoint for retrieving user details to support pagination.
   - Allows clients to specify the page number and the number of users per page.

7. **Input Validation:**
   - Implemented input validation 

8. **Hash User Passwords:**
   - Implemented password hashing using bcrypt for storing user passwords securely in the database.

## Technologies Used

- Node.js
- Express.js
- SQL Database (e.g., MySQL)
- JSON Web Tokens (JWT)
- bcrypt (for password hashing)
- Pagination (for retrieving a list of users)
- Input validation


## Credits

This project was completed by AbdalrahmanMg as part of a backend coding challenge.

Feel free to reach out to abdalrahman.m.gomaa@gmail.com for any inquiries or feedback regarding this project.

Thank you for your interest in this project! 🚀