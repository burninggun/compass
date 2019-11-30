const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const path = require('path');
app.use('/', express.static(path.join(__dirname, 'client')))

app.listen(PORT, () => {
    console.log('Server is listening to port: ', PORT)
})

app.get('/', (req, res) => {
    res.sendFile( "./index.html")
})

app.get('/*', (req, res) => {
    res.redirect('/')
})