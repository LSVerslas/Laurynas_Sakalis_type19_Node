-- Sukurti 'users' lentelę
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR
(255) NOT NULL,
  email VARCHAR
(255) NOT NULL,
  password VARCHAR
(255) NOT NULL,
  role_id INT,
  FOREIGN KEY
(role_id) REFERENCES user_roles
(id)
);

-- Sukurti 'shop_items' lentelę
CREATE TABLE shop_items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR
(255) NOT NULL,
  price DECIMAL
(10, 2) NOT NULL,
  description TEXT,
  image VARCHAR
(255),
  item_type_id INT,
  FOREIGN KEY
(item_type_id) REFERENCES item_types
(id)
);

-- Sukurti 'item_types' lentelę
CREATE TABLE item_types (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR
(255) NOT NULL
);

-- Sukurti 'orders' lentelę
CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  shop_item_id INT,
  quantity INT,
  total_price DECIMAL
(10, 2),
  status VARCHAR
(50),
  FOREIGN KEY
(user_id) REFERENCES users
(id),
  FOREIGN KEY
(shop_item_id) REFERENCES shop_items
(id)
);

-- Sukurti 'user_roles' lentelę
CREATE TABLE user_roles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR
(50) NOT NULL
);

INSERT INTO item_types
    (name)
VALUES
    ('food'),
    ('drink'),
    ('electronic'),
    ('clothes');

db.connect
((err) => {
if (err) {
    throw err;
  }
  console.log
('Prisijungta prie MySQL duomenų bazės');
});

app.
use
(express.json
());

// 7.1 POST /api/orders - sukurti užsakymą
app.post
('/api/orders',
(req, res) => {
  const { user_id, shop_item_id, quantity, total_price, status } = req.body;
  const sql = 'INSERT INTO orders (user_id, shop_item_id, quantity, total_price, status) VALUES (?, ?, ?, ?, ?)';
  db.query
(sql, [user_id, shop_item_id, quantity, total_price, status],
(err, result) => {
if (err) {
return res.status(500).json({
error:
'Klaida kuriant užsakymą' });
    }
    res.status
(201).json
({
id:
result.insertId,
message:
'Užsakymas sukurtas sėkmingai' });
  });
});

// 7.2 GET /api/orders - gauti visus užsakymus su vartotojo vardu ir prekės pavadinimu
app.get
('/api/orders',
(req, res) => {
  const sql = `
SELECT orders.id, users.name AS user_name, shop_items.name AS item_name, shop_items.price AS item_price
FROM orders
    JOIN users ON orders.user_id = users.id
    JOIN shop_items ON orders.shop_item_id = shop_items.id
`;
  db.query
(sql,
(err, results) => {
if (err) {
return res.status(500).json({
error:
'Klaida gaunant užsakymus' });
    }
    res.json
(results);
  });
});

// 7.3 GET /api/orders/:id - gauti užsakymą pagal id
app.get
('/api/orders/:id',
(req, res) => {
  const orderId = req.params.id;
  const sql = 'SELECT * FROM orders WHERE id = ?';
  db.query
(sql, [orderId],
(err, result) => {
if (err) {
return res.status(500).json({
error:
'Klaida gaunant užsakymą' });
    }
if (result.length === 0) {
return res.status(404).json({
error:
'Užsakymas nerastas' });
    }
    res.json
(result[0]);
  });
});

// 7.4 GET /api/orders/user/:user_id - gauti visus užsakymus, priklausančius tam tikram vartotojui
app.get
('/api/orders/user/:user_id',
(req, res) => {
  const userId = req.params.user_id;
  const sql = `
SELECT orders.id, users.name AS user_name, shop_items.name AS item_name, shop_items.price AS item_price
FROM orders
    JOIN users ON orders.user_id = users.id
    JOIN shop_items ON orders.shop_item_id = shop_items.id
WHERE orders.user_id = ?`;
db.query
(sql, [userId],
(err, results) => {
if (err) {
return res.status(500).json({
error:
'Klaida gaunant vartotojo užsakymus' });
    }
    res.json
(results);
  });
});

app.listen
(port,
() => {
  console.log
(`Serveris veikia adresu
http:
//
localhost:
${port}`);
});

INSERT INTO user_roles
    (name)
VALUES
    ('admin'),
    ('user'),
    ('guest');