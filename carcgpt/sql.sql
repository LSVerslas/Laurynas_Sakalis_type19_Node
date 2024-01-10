-- 1. Create a new MySQL database
CREATE DATABASE IF NOT EXISTS your_database_name;

-- 2. Use the created database
USE your_database_name;

-- 3. Create a 'cars' table
CREATE TABLE IF NOT EXISTS cars (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    title TEXT,
    image TEXT,
    price DECIMAL(10,2),
    numberPlates VARCHAR(255)
);
INSERT INTO cars (title, image, price, numberPlates) VALUES
('BMW i8', 'https://c8.alamy.com/comp/BNHA55/bmw-car-badge-abstract-classic-german-car-BNHA55.jpg', 50000.00, 'ABC123'),
('Tesla Model S', 'https://images.unsplash.com/photo-1617704548623-340376564e68?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlc2xhfGVufDB8fDB8fHww', 70000.00, 'XYZ789');
