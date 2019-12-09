const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const path = require('path');
const serveStatic = require('serve-static')



app.use(serveStatic(path.join(__dirname, "client"), {index: false}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/client', 'index.html'));
})

app.get('/features', (req, res) => {
    res.sendFile(path.join(__dirname, '/client', 'features.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/client', 'about.html'));
    // res.sendFile('/about.html', {root: path.join(__dirname + '/client')});
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'contact.html'))
})

app.get('/get_started', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'get_started.html'))
})

app.get('/*', (req, res) => {
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log('Server is listening to port: ', PORT)
})