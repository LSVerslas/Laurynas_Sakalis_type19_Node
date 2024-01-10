-- Create authors table
CREATE TABLE authors (
    id INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);

-- Insert sample data into authors table
INSERT INTO authors (id, first_name, last_name) VALUES
(author1, 'John', 'Doe'),
(author2, 'Jane', 'Smith');

-- Create books table
CREATE TABLE books (
    id INT PRIMARY KEY,
    author_id INT,
    title VARCHAR(255),
    year INT,
    FOREIGN KEY (author_id) REFERENCES authors(id)
);

-- Insert sample data into books table
INSERT INTO books (id, author_id, title, year) VALUES
(book1, author11, 'The Great Novel', 2020),
(book2, author11, 'Mystery of the Unknown', 2022),
(book3, author22, 'Fantastic Adventure', 2021),
(book4, author22, 'Journey to the Stars', 2023);

SELECT books.id, authors.name, authors.surname, books.title, books.year
FROM books
JOIN authors ON books.author_id = authors.id;

SELECT authors.id, authors.name, authors.surname, COUNT(books.id) AS book_count
FROM authors
LEFT JOIN books ON authors.id = books.author_id
GROUP BY authors.id, authors.name, authors.surname;
