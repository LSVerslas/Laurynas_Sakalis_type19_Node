CREATE DATABASE your_database;

USE your_database;

-- Sukurti lenteles
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  role_id INT
);

CREATE TABLE shop_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10, 2),
  description TEXT,
  image VARCHAR(255),
  item_type_id INT
);

CREATE TABLE item_types (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  shop_item_id INT,
  quantity INT,
  total_price DECIMAL(10, 2),
  status VARCHAR(50)
);

CREATE TABLE user_roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50)
);

-- Įterpti user_roles įrašus
INSERT INTO user_roles (name) VALUES ('admin'), ('user'), ('guest');
