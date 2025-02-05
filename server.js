const express = require('express');
const app = express();
const port = 3000;

// Serve splashscreen as root
app.use(express.static('src/splashscreen'));

// Serve home page under /home path
app.use('/home', express.static('src/home'));

app.listen(port, () => {
  console.log(`Cyberpunk system booting at http://localhost:${port}`);
});
