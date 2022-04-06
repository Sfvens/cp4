const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/', //necessary?
  limits: {
    fileSize: 10000000
  }
});

const itemSchema = new mongoose.Schema({
  title: String,
  color: String,
  year: String,
  make: String,
  model: String,
  path: String,
  tagline: String,
  description: String,
});

const Item = mongoose.model('Item', itemSchema);

mongoose.connect('mongodb+srv://database:Shei827@cluster0.oj32a.mongodb.net/FinalProject', { //what is my default database
  useNewUrlParser: true
});

app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

app.post('/api/items', async (req, res) => {
  const item = new Item({
    title: req.body.title,
    color: req.body.color,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model,
    path: req.body.path,
    tagline: req.body.tagline,
    description: req.body.description,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/items/:id', async (req, res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/items/:id', async (req, res) => { // may need to add extra id code?
  try {
    let item = await Item.findOne({
      _id: req.params.id
    });
    item.title = req.body.title;
    item.color = req.body.color;
    item.year = req.body.year;
    item.make = req.body.make;
    item.model = req.body.model;
    //is there a way to update photos?
    item.tagline = req.body.tagline;
    item.description = req.body.description;
    await item.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
