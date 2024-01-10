const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'car_database'
});

// Routes...

const PORT = process.env.PORT || 3000;




// Get all cars
app.get('/cars', (req, res) => {
    db.query('SELECT * FROM cars', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(results);
        }
    });
});

// Add a new car
app.post('/cars', (req, res) => {
    const { title, image, price, numberplates } = req.body;

    if (!title || !image || !price || !numberplates) {
        return res.status(400).send('Invalid data');
    }

    db.query('INSERT INTO cars (title, image, price, numberplates) VALUES (?, ?, ?, ?)',
        [title, image, price, numberplates],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            } else {
                res.status(201).send('Car added successfully');
            }
        }
    );
});

// Delete a car by ID
app.delete('/cars/:id', (req, res) => {
    const carId = req.params.id;

    if (!carId) {
        return res.status(400).send('Car ID is required');
    }

    db.query('DELETE FROM cars WHERE ID = ?', [carId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else if (result.affectedRows === 0) {
            res.status(404).send('Car not found');
        } else {
            res.status(200).send('Car deleted successfully');
        }
    });
});

// Get car by ID
app.get('/cars/:id', (req, res) => {
    const carId = req.params.id;

    if (!carId) {
        return res.status(400).send('Car ID is required');
    }

    db.query('SELECT * FROM cars WHERE ID = ?', [carId], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else if (results.length === 0) {
            res.status(404).send('Car not found');
        } else {
            res.json(results[0]);
        }
    });
});

const carList = document.getElementById('carList');
const addCarForm = document.getElementById('addCarForm');

// Fetch and display cars
function getCars() {
    fetch('/cars')
        .then(response => response.json())
        .then(data => {
            carList.innerHTML = '';
            if (data.length === 0) {
                carList.innerHTML = '<p>No cars available</p>';
            } else {
                data.forEach(car => {
                    const carItem = document.createElement('div');
                    carItem.innerHTML = `
                        <p>ID: ${car.ID}</p>
                        <p>Title: ${car.title}</p>
                        <p>Image: <img src="${car.image}" alt="Car Image"></p>
                        <p>Price: $${car.price}</p>
                        <p>Number Plates: ${car.numberplates}</p>
                        <button onclick="deleteCar(${car.ID})">Delete Car</button>
                        <hr>
                    `;
                    carList.appendChild(carItem);
                });
            }
        })
        .catch(error => {
            console.error(error);
            carList.innerHTML = '<p>Error fetching cars</p>';
        });
}

// Delete a car
function deleteCar(id) {
    fetch(`/cars/${id}`, { method: 'DELETE' })
        .then(response => {
            if (response.ok) {
                getCars();
            } else {
                console.error(`Failed to delete car with ID ${id}`);
            }
        })
        .catch(error => console.error(error));
}

// Event listener for adding a new car
addCarForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(addCarForm);
    const carData = Object.fromEntries(formData.entries());

    fetch('/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(carData),
    })
        .then(response => {
            if (response.ok) {
                getCars();
                addCarForm.reset();
            } else {
                console.error('Failed to add a new car');
            }
        })
        .catch(error => console.error(error));
});

// Initial fetch on page load
getCars();
