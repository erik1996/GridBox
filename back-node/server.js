const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const items = require('./controllers/items');
require('./dbSetup');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/items', items.getItems);
app.get('/items/:id', items.getItem)
app.post('/items',  items.addItem);
app.put('/items/:id', items.updateItem);
app.delete('/items/:id', items.removeItem);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});