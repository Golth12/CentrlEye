-- This is a comment. You can use comments to describe the purpose of the SQL commands.

-- Create a new database
USE first_test;

-- Switch to the newly created database

-- Create a table to store user information
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOt NULL,
    Fname VARCHAR(100) NOT NULL,
    Lname VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);


CREATE TABLE Events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    Description VARCHAR(255) NOt NULL,
    country VARCHAR(255) NOt NULL,
    address VARCHAR(255) NOt NULL,
    city VARCHAR(255) NOt NULL,
    Name VARCHAR(100) NOT NULL,
    Category VARCHAR(100) NOT NULL,
    private VARCHAR(1) Not NULL

   -- picture ? how tf do i do that 
);