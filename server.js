const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve splashscreen as root
app.use(express.static('src/splashscreen'));

// Serve home page under /home path
app.use('/home', express.static('src/home', { index: 'index.html' }));

// Add error route
app.use('/error', express.static('src/error'));

// Serve blog under /blog path
app.use('/blog', express.static('src/blog', { index: 'index.html' }));

app.get('/health', (req, res) => {
  res.status(200).send('SYSTEM OPERATIONAL');
});

// Add this fallback route before 404 handler
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/home/index.html'));
});

// 404 Handler (add before app.listen)
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/src/error/404.html');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(__dirname + '/src/error/500.html');
});

app.listen(port, () => {
  console.log(`Cyberpunk system booting at http://localhost:${port}`);
});
