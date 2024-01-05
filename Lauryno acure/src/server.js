const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Sukurkite MySQL sujungimą
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Jūsų MySQL vartotojo vardas
  password: 'slaptazodis', // Jūsų MySQL slaptažodis
  database: 'mano_db' // Jūsų duomenų bazės pavadinimas
});

// Prisijunkite prie MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Prisijungta prie MySQL duomenų bazės');
});

// Sukurkite Express.js serverį
app.get('/', (req, res) => {
  res.send('Sveiki atvykę į mano serverį!');
});

// Paleiskite serverį
app.listen(port, () => {
  console.log(`Serveris veikia adresu http://localhost:${port}`);
});
