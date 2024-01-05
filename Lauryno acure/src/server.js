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

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'YourSecretKey'; // Keiskite šį raktą realiame scenarijuje

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'slaptazodis',
  database: 'mano_db'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Prisijungta prie MySQL duomenų bazės');
});

app.use(express.json());

// Registruoti vartotoją
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password, role_id } = req.body;

  // Patikrinkite, ar toks el. paštas jau naudojamas
  const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
  const existingUser = await queryDatabase(checkEmailQuery, [email]);

  if (existingUser.length > 0) {
    return res.status(400).json({ error: 'Toks el. paštas jau užregistruotas' });
  }

  // Užšifruokite slaptažodį prieš įrašant į duomenų bazę
  const hashedPassword = await bcrypt.hash(password, 10);

  // Įterpkite naują vartotoją į duomenų bazę
  const insertUserQuery = 'INSERT INTO users (name, email, password, role_id) VALUES (?, ?, ?, ?)';
  const result = await queryDatabase(insertUserQuery, [name, email, hashedPassword, role_id]);

  res.status(201).json({ id: result.insertId, message: 'Vartotojas sukurtas sėkmingai' });
});

// Prisijungti vartotoją
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  // Patikrinkite, ar vartotojas su tokiu el. paštu egzistuoja
  const getUserQuery = 'SELECT * FROM users WHERE email = ?';
  const user = await queryDatabase(getUserQuery, [email]);

  if (user.length === 0) {
    return res.status(401).json({ error: 'Neteisingi prisijungimo duomenys' });
  }

  // Patikrinkite slaptažodį
  const passwordMatch = await bcrypt.compare(password, user[0].password);

  if (!passwordMatch) {
    return res.status(401).json({ error: 'Neteisingi prisijungimo duomenys' });
  }

  // Sukurkite JWT
  const token = jwt.sign({ userId: user[0].id, role: user[0].role_id }, secretKey, { expiresIn: '1h' });

  res.json({ token });
});

// Pagalbinė funkcija užklausai į duomenų bazę
function queryDatabase(sql, params) {
  return new Promise((resolve, reject) => {
    db.query(sql, params, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

app.listen(port, () => {
  console.log(`Serveris veikia adresu http://localhost:${port}`);
});
