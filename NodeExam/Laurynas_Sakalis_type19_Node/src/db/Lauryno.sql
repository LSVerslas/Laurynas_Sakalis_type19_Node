SET SQL_MODE  'NO_AUTO_VALUE_ON_ZERO';

START TRANSACTION;

SET time_zone "+00:00";

CREATE DATABASE Lauryno;

USE Lauryno;

-- Lentelė 'users'
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    role_id INT
    FOREIGN KEY (role_id) REFERENCES user_roles(user_role_id)
);

-- Užpildom 'users'
INSERT INTO users (user_id, name, email, password, role_id)
VALUES
    (1, 'Jonas Gubka', 'joas@flsdp.com', 'passwordas', 1),
    (2, 'Adamas Adminas', 'admin@flsdp.com', 'securepass', 3),
    (3, 'Antanas Smurfys', 'antanas@flsdp.com', 'secure123', 2),
    (4, 'Laura Kalaitytė', 'laura@flsdp.com', 'securepass123', 2),
    (5, 'Bilis Smilius', 'bilis@flsdp.com', 'password123', 2);
    

-- Sukuriam lentelę 'shop_items'
CREATE TABLE shop_items (
    shop_item_id INT PRIMARY KEY,
    name VARCHAR(255),
    price DECIMAL(10, 2),
    description TEXT,
    image VARCHAR(255),
    item_type_id INT
    FOREIGN KEY (item_type_id) REFERENCES item_types(item_type_id)
);

-- Ideam informacijos į 'shop_items'
INSERT INTO shop_items (shop_item_id, name, price, description, image, item_type_id)
VALUES
    (1, 'Laptop', 999.99, 'High-performance laptop', 'image/1.png', 3),
    (2, 'Bottom', 29.99, 'Glaudės', 'image/2.png', 4),
    (3, 'Headphones', 49.99, 'Noise-canceling headphones', 'image/3.png', 3),
    (4, 'Lemonade', 1.99, 'JustCola', 'image/4.png', 2),
    (5, 'Smartphone', 666, 'Latest smartphone model', 'image/5.png', 3);

-- Sukuriam lentelę 'item_types'
CREATE TABLE item_types (
    item_type_id INT PRIMARY KEY,
    name VARCHAR(255)
);

-- Įkeliam variantus 'item_types'
INSERT INTO item_types (item_type_id, name)
VALUES
    (1, 'Maistas'),
    (2, 'Gėrimai'),
    (3, 'Elektronika'),
    (4, 'Drabužiai'),
    (5, 'Laisvalaikis');

-- Sukuriam lentelę 'orders'
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    shop_item_id INT,
    quantity INT,
    email VARCHAR(255),
    password VARCHAR(255)
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (shop_item_id) REFERENCES shop_items(shop_item_id)
);

-- Užpildome lentelę 'orders'
INSERT INTO orders (order_id, user_id, shop_item_id, quantity, email, password)
VALUES
    (1, 1, 2, 2, 'joas@flsdp.com', 'passwordas'),
    (2, 2, 1, 1, 'admin@flsdp.com', 'securepass'),
    (3, 3, 4, 1, 'antanas@flsdp.com', 'secure123'),
    (4, 4, 3, 3, 'laura@flsdp.com', 'securepass123'),
    (5, 5, 5, 1, 'bilis@flsdp.com', 'password123');

-- Sukurti lentelę 'user_roles'
CREATE TABLE user_roles (
    user_role_id INT PRIMARY KEY,
    name VARCHAR(255)
);

-- Irašome įrašus į 'user_roles'
INSERT INTO user_roles (user_role_id, name)
VALUES
    (1, 'Svečias'),
    (2, 'Vartotojas'),
    (3, 'Admin');

-- Gauti vieno vartotojo užsakymus
SELECT *
FROM orders
WHERE user_id = 1;

SELECT orders.order_id, users.name AS user_name, shop_items.name AS item_name, orders.quantity
FROM orders
JOIN users ON orders.user_id = users.user_id
JOIN shop_items ON orders.shop_item_id = shop_items.shop_item_id
WHERE orders.user_id = 1;
