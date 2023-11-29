const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Hello McD Edge Team!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
