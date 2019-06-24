const express = require('express');
const db = require('./db.json')
const app = express();

app.post('/api/contacts', (req, res) => {
  console.log(req.body)
  db.contacts[0].type.push(req.body)
  res.json();
});

const port = 5001;

app.listen(port, () => `Server running on port ${port}`);