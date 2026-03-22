const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

/* ---------- DATABASE CONNECTION ---------- */

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Saraysolar@1',
  database: 'toonCafe'
});

db.connect(err => {
  if (err) {
    console.log('Database connection failed');
    console.log(err);
    return;
  }
  console.log('Connected to MySQL');
});

/* ---------- ROUTES ---------- */

// get all shows
app.get('/shows', (req, res) => {
  db.query('SELECT * FROM cartoonshow', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});


// get all movies
app.get('/movies', (req, res) => {
  db.query('SELECT * FROM cartoonmovie', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// get categories
app.get('/categories', (req, res) => {
  db.query('SELECT * FROM category', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// get showtimes
app.get('/showtimes', (req, res) => {
  db.query('SELECT * FROM showtime', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

/* ---------- SERVER ---------- */

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
