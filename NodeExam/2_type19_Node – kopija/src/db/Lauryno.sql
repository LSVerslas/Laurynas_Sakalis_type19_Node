CREATE DATABASE Lauryno;

USE Lauryno;

-- Table 1: Users
CREATE TABLE "users"
(
    "user_id" int
(13) UNSIGNED NOT NULL AUTO_INCREMENT,
    "name" varchar
( `255` ) NOT NULL,
    `email` varchar
(255) NOT NULL,
    `password` varchar
(255) NOT NULL,
    `role_id` int
(13) UNSIGNED NOT NULL,
    PRIMARY KEY
(`user_id`)
) ENGINE=InnoDB;

-- Table 2: Item Types
CREATE TABLE `item_types`
(
    `item_type_id` int
(13) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar
(255) NOT NULL,
    PRIMARY KEY
(`item_type_id`)
) ENGINE=InnoDB;

-- Table 3: Orders
CREATE TABLE `orders`
(
    `order_id` int
(13) UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` int
(13) UNSIGNED NOT NULL,
    `shop_item_id` int
(13) UNSIGNED NOT NULL,
    `quantity` varchar
(255) NOT NULL,
    `total_price` varchar
(255) NOT NULL,
    `status` boolean NOT NULL DEFAULT '0',
    PRIMARY KEY
(`order_id`)
) ENGINE=InnoDB;

-- Table 4: Shop Items
CREATE TABLE `shop_items`
(
    `shop_item_id` int
(13) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar
(255) NOT NULL,
    `price` decimal
(65) NOT NULL,
    `description` text NOT NULL,
    `image` varchar
(255) NOT NULL,
    `item_type_id` int
(13) UNSIGNED NOT NULL,
    PRIMARY KEY
(`shop_item_id`)
) ENGINE=InnoDB;

-- Table 5: User Roles
CREATE TABLE `user_roles`
(
    `role_id` int
(13) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar
(255) NOT NULL,
    PRIMARY KEY
(`role_id`)
) ENGINE=InnoDB;



-- CREATE TABLE for user_roles
CREATE TABLE `user_roles`
(
    `role_id` int
(13) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar
(255) NOT NULL,
    PRIMARY KEY
(`role_id`)
) ENGINE=InnoDB;

-- Insert default user roles
INSERT INTO `user_roles` (`
name`)
VALUES
    ('admin'),
    ('user'),
    ('guest');



INSERT INTO `users` (`
name`,
`email
`, `password`, `role_id`) VALUES
('Admin', 'admin@flsdp.com', 'admin', 1);

INSERT INTO `users` (`
name`,
`email
`, `password`, `role_id`) VALUES
('Antanas', 'antanas@flsdp.com', 'user', 2);

INSERT INTO "users" ("name",
"email", "password", "role_id") VALUES
("Laura", "laura@flsdp.com", "pupa69", 2);
