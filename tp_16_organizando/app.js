const path = require('path');
const express = require('express');
const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views','index.html')));
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, 'views','register.html')));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views','login.html')));
app.use(express.static(path.join(__dirname, "")));






app.listen(PORT, () => console.log('Server running in http://localhost:' + PORT))