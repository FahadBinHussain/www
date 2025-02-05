const express = require('express');
const app = express();
const port = 3000;

// Serve splashscreen as root
app.use(express.static('src/splashscreen'));

// Serve home page under /home path
app.use('/home', express.static('src/home'));

app.get('/health', (req, res) => {
  res.status(200).send('SYSTEM OPERATIONAL');
});

app.listen(port, () => {
  console.log(`Cyberpunk system booting at http://localhost:${port}`);
});
