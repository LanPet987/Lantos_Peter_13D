const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log("Server is running on port 3000.");
});