CREATE DATABASE IF NOT EXISTS car_database;
USE car_database;


CREATE TABLE IF NOT EXISTS cars (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    title TEXT,
    image TEXT,
    price DECIMAL(10, 2),
    numberplates VARCHAR(255)
);


INSERT INTO cars (title, image, price, numberplates) VALUES
    ('BMW i8', 'https://example.com/photo1.jpg', 50000.00, 'ABC123'),
    ('Tesla Model S', 'https://example.com/photo2.jpg', 80000.00, 'XYZ789');
