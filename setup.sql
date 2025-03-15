-- Creating new database
CREATE DATABASE fun_login;

-- Connecting to new database
\c fun_login;

-- Creating table
CREATE TABLE users (
    email TEXT PRIMARY KEY,
    name TEXT,
    password TEXT
);