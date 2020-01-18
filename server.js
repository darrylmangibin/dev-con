const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
  res.send('test')
});

// MongoDB COnfiguration
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(() => console.log('Connection failed'))

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})