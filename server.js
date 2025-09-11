const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

app.use(express.json());

const cors = require('cors');
app.use(cors());

const db = mysql.createConnection({
  user: 'root',
  host: '127.0.0.1',
  port: '3307',
  password: '',
  database: 'kozutak'
});

app.get('/', (req, res) => {
  res.send('Fut a backend');
});

app.listen(port, () => {
  console.log("A szerver fut a 3000 porton.");
});