-- Sukuriame lenteles

CREATE TABLE `users`
(
    `user_id` int
(13) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar
(255) NOT NULL,
    `email` varchar
(255) NOT NULL,
    `password` varchar
(255) NOT NULL,
`role_id` int
(13) UNSIGNED NOT NULL,
PRIMARY KEY
(`user_id`)
) ENGINE=InnoDB;

CREATE TABLE `item_types`
(
    `item_type_id` int
(13) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar
(255) NOT NULL,
PRIMARY KEY
(`item_type_id`)
) ENGINE=InnoDB;

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

CREATE TABLE `shop_items`
(
    `shop_item_id` int
(13) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar
(255) NOT NULL,
    `price` varchar
(255) NOT NULL,
    `description` text NOT NULL,
    `image` varchar
(255) NOT NULL,
    `item_type_id` int
(13) UNSIGNED NOT NULL,
PRIMARY KEY
(`shop_item_id`)
) ENGINE=InnoDB;

CREATE TABLE `user_roles`
(
    `role_id` int
(13) UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` varchar
(255) NOT NULL,
PRIMARY KEY
(`role_id`)
) ENGINE=InnoDB;

