const express = require('express')
const app = express()
const port = 3000 //channel

app.get('/', (req, res) => res.send('Hello World!')) //request respond, "/" l route: what happens if someone went to our homepage

app.get('/contact', (req, res) => res.send('Contact me via mail: jamale.sleiman@lau.edu'))

app.get('/about', (req, res) => res.send('Hello my name is jamale.'))

app.get('/jamale', (req, res) => res.send('Hello'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) 