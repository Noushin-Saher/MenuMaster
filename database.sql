-- Create the database
CREATE DATABASE IF NOT EXISTS menumaster;
USE menumaster;

-- Create student_details table
CREATE TABLE student_details (
    reg_no VARCHAR(50) PRIMARY KEY,
    password VARCHAR(255) NOT NULL
);

-- Insert sample students
INSERT INTO student_details (reg_no, password) VALUES
('noush', '1234');

-- Create vendor_details table
CREATE TABLE vendor_details (
    stall_name VARCHAR(100) PRIMARY KEY,
    password VARCHAR(255) NOT NULL
);

-- Insert sample vendors
INSERT INTO vendor_details (stall_name, password) VALUES
('yummy', '7894'),
('TastyFoods', 'delish123');

-- Create menu table
CREATE TABLE menu (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(100),
    price DECIMAL(10, 2),
    stall_name VARCHAR(100),
    is_in_menu BOOLEAN DEFAULT TRUE
);

-- Create cart table
CREATE TABLE cart (
    reg_no VARCHAR(50) PRIMARY KEY,
    items_list TEXT,
    quantity_list TEXT,
    price_list TEXT,
    stall_name VARCHAR(100)
);

-- Create orders table
CREATE TABLE orders (
    order_id VARCHAR(50) PRIMARY KEY,
    reg_no VARCHAR(50),
    stall_name VARCHAR(100),
    items_list TEXT,
    quantity_list TEXT,
    price_list TEXT,
    order_date DATE
);

-- Create feedback table
CREATE TABLE Feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    reg_no VARCHAR(50),
    comments TEXT,
    rating INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    stall_name VARCHAR(100)
);
