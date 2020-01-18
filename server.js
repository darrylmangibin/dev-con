const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('test')
});

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})