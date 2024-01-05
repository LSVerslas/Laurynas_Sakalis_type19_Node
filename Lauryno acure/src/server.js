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
  
  // 5.1 POST /api/shop_items - sukurti parduotuvės prekę
  app.post('/api/shop_items', (req, res) => {
    const { name, price, description, image, item_type_id } = req.body;
    const sql = 'INSERT INTO shop_items (name, price, description, image, item_type_id) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, price, description, image, item_type_id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Klaida kuriant parduotuvės prekę' });
      }
      res.status(201).json({ id: result.insertId, message: 'Parduotuvės prekė sukurtas sėkmingai' });
    });
  });
  
  // 5.2 GET /api/shop_items - gauti visas parduotuvės prekes
  app.get('/api/shop_items', (req, res) => {
    const sql = 'SELECT * FROM shop_items';
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Klaida gaunant parduotuvės prekes' });
      }
      res.json(results);
    });
  });
  
  // 5.3 GET /api/shop_items/:id - gauti parduotuvės prekę pagal id
  app.get('/api/shop_items/:id', (req, res) => {
    const itemId = req.params.id;
    const sql = 'SELECT * FROM shop_items WHERE id = ?';
    db.query(sql, [itemId], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Klaida gaunant parduotuvės prekę' });
      }
      if (result.length === 0) {
        return res.status(404).json({ error: 'Parduotuvės prekė nerasta' });
      }
      res.json(result[0]);
    });
  });
  
  // 5.4 DELETE /api/shop_items/:id - ištrinti parduotuvės prekę pagal id
  app.delete('/api/shop_items/:id', (req, res) => {
    const itemId = req.params.id;
    const sql = 'DELETE FROM shop_items WHERE id = ?';
    db.query(sql, [itemId], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Klaida trinant parduotuvės prekę' });
      }
      res.json({ message: 'Parduotuvės prekė ištrinta sėkmingai' });
    });
  });
  
  app.listen(port, () => {
    console.log(`Serveris veikia adresu http://localhost:${port}`);
  });

  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Prisijungta prie MySQL duomenų bazės');
  });
  
  app.use(express.json());
  
  // 7.1 POST /api/orders - sukurti užsakymą
  app.post('/api/orders', (req, res) => {
    const { user_id, shop_item_id, quantity, total_price, status } = req.body;
    const sql = 'INSERT INTO orders (user_id, shop_item_id, quantity, total_price, status) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [user_id, shop_item_id, quantity, total_price, status], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Klaida kuriant užsakymą' });
      }
      res.status(201).json({ id: result.insertId, message: 'Užsakymas sukurtas sėkmingai' });
    });
  });
  
  // 7.2 GET /api/orders - gauti visus užsakymus su vartotojo vardu ir prekės pavadinimu
  app.get('/api/orders', (req, res) => {
    const sql = `
      SELECT orders.id, users.name AS user_name, shop_items.name AS item_name, shop_items.price AS item_price
      FROM orders
      JOIN users ON orders.user_id = users.id
      JOIN shop_items ON orders.shop_item_id = shop_items.id`;
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Klaida gaunant užsakymus' });
      }
      res.json(results);
    });
  });
  
  // 7.3 GET /api/orders/:id - gauti užsakymą pagal id
  app.get('/api/orders/:id', (req, res) => {
    const orderId = req.params.id;
    const sql = 'SELECT * FROM orders WHERE id = ?';
    db.query(sql, [orderId], (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Klaida gaunant užsakymą' });
      }
      if (result.length === 0) {
        return res.status(404).json({ error: 'Užsakymas nerastas' });
      }
      res.json(result[0]);
    });
  });
  
  // 7.4 GET /api/orders/user/:user_id - gauti visus užsakymus, priklausančius tam tikram vartotojui
  app.get('/api/orders/user/:user_id', (req, res) => {
    const userId = req.params.user_id;
    const sql = `
      SELECT orders.id, users.name AS user_name, shop_items.name AS item_name, shop_items.price AS item_price
      FROM orders
      JOIN users ON orders.user_id = users.id
      JOIN shop_items ON orders.shop_item_id = shop_items.id
      WHERE orders.user_id = ?`;
    db.query(sql, [userId], (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Klaida gaunant vartotojo užsakymus' });
      }
      res.json(results);
    });
  });
  
  app.listen(port, () => {
    console.log(`Serveris veikia adresu http://localhost:${port}`);
  });

  // 8 GET /api/user_roles - gauti visas roles
app.get('/api/user_roles', (req, res) => {
    const sql = 'SELECT * FROM user_roles';
    db.query(sql, (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Klaida gaunant vartotojo roles' });
      }
      res.json(results);
    });
  });
  
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Prisijungta prie MySQL duomenų bazės');
  });
  
  app.use(express.json());
  
  // 9 Middleware patikrinti POST, PUT ir PATCH užklausas
  const validateFields = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  };
  
  // 9.1 Jei užklausoje nėra visų reikalingų laukų, siųsti klaidos pranešimą iš serverio pusės
  const checkRequiredFields = (requiredFields) => {
    return (req, res, next) => {
      const missingFields = requiredFields.filter(field => !req.body[field]);
      if (missingFields.length > 0) {
        return res.status(400).json({ error: `Trūksta privalomų laukų: ${missingFields.join(', ')}` });
      }
      next();
    };
  };
  
  // Pavyzdys naudojant middleware
  app.post(
    '/api/orders',
    [
      body('user_id').isInt(),
      body('shop_item_id').isInt(),
      body('quantity').isInt(),
      body('total_price').isFloat(),
      body('status').isString()
    ],
    validateFields,
    checkRequiredFields(['user_id', 'shop_item_id', 'quantity', 'total_price', 'status']),
    (req, res) => {
      // ... Jūsų užklausos apdorojimo logika ...
      res.json({ message: 'Užsakymas sukurtas sėkmingai' });
    }
  );
  
  app.listen(port, () => {
    console.log(`Serveris veikia adresu http://localhost:${port}`);
  });

  const app = express();

// Pridėti middleware ir kitus reikalingus dalykus...

app.use(bodyParser.json());

// Simuliuojame vartotojo duomenis
const users = [
    { id: 1, email: 'test@example.com', password: 'password123', role: 'user' },
    // Galite pridėti daugiau vartotojų...
];

// 3.2, 3.3, 3.4 POST /api/auth/login
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;

    // Surasti vartotoją pagal el. paštą
    const user = users.find(u => u.email === email);

    if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Neteisingi prisijungimo duomenys' });
    }

    res.json({ user: { email: user.email, role: user.role } });
});

// Pradėti serverį
const port = 3000;
app.listen(port, () => {
    console.log(`Serveris veikia adresu http://localhost:${port}`);
});