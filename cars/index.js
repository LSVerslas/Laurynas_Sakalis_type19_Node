const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'nauja_duomenu_baze',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.get('/cars', async (req, res) => {
  // TODO: įgyvendinti GET /cars
});

app.get('/cars/:id', async (req, res) => {
  // TODO: įgyvendinti GET /cars/:id
});

app.post('/cars', async (req, res) => {
  // TODO: įgyvendinti POST /cars
});

app.delete('/cars/:id', async (req, res) => {
  // TODO: įgyvendinti DELETE /cars/:id
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


app.get('/cars', async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT * FROM cars');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  app.get('/cars/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const [rows] = await pool.query('SELECT * FROM cars WHERE ID = ?', [id]);
  
      if (rows.length > 0) {
        res.json(rows[0]);
      } else {
        res.status(404).send('Car not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  app.post('/cars', async (req, res) => {
    const { title, image, price, numberplates } = req.body;
  
    if (!title || !image || !price || !numberplates) {
      res.status(400).send('Bad Request');
      return;
    }
  
    try {
      const [result] = await pool.query(
        'INSERT INTO cars (title, image, price, numberplates) VALUES (?, ?, ?, ?)',
        [title, image, price, numberplates]
      );
  
      res.status(201).json({ id: result.insertId });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  app.delete('/cars/:id', async (req, res) => {
    const { id } = req.params;
  
    if (!id) {
      res.status(400).send('Bad Request');
      return;
    }
  
    try {
      const [result] = await pool.query('DELETE FROM cars WHERE ID = ?', [id]);
  
      if (result.affectedRows > 0) {
        res.status(204).send();
      } else {
        res.status(404).send('Car not found');
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

