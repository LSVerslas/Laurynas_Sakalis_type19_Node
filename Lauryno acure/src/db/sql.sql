-- Sukurti 'users' lentelę
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR
(255) NOT NULL,
  email VARCHAR
(255) NOT NULL,
  password VARCHAR
(255) NOT NULL,
  role_id INT,
  FOREIGN KEY
(role_id) REFERENCES user_roles
(id)
);

-- Sukurti 'shop_items' lentelę
CREATE TABLE shop_items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR
(255) NOT NULL,
  price DECIMAL
(10, 2) NOT NULL,
  description TEXT,
  image VARCHAR
(255),
  item_type_id INT,
  FOREIGN KEY
(item_type_id) REFERENCES item_types
(id)
);

-- Sukurti 'item_types' lentelę
CREATE TABLE item_types (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR
(255) NOT NULL
);

-- Sukurti 'orders' lentelę
CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  shop_item_id INT,
  quantity INT,
  total_price DECIMAL
(10, 2),
  status VARCHAR
(50),
  FOREIGN KEY
(user_id) REFERENCES users
(id),
  FOREIGN KEY
(shop_item_id) REFERENCES shop_items
(id)
);

-- Sukurti 'user_roles' lentelę
CREATE TABLE user_roles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR
(50) NOT NULL
);