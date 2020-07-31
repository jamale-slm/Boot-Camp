const express = require('express')
const bodyParser = require("body-parser") ;

const app = express()
const port = 3000 //channel

app.use(bodyParser.urlencoded({extended: true}))// use this url encoded when we want to grab info posted on the html file

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"))

app.post('/', function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var results = num1 + num2;
    res.send("The result of the calculation is: "+ results)
})

app.get("/bmiCalculator", (req, res) => res.sendFile(__dirname + "/bmiCalculator.html"))

app.post('/bmiCalculator', function (req, res) {
    var h = parseFloat(req.body.height);
    var w = parseFloat(req.body.weight);
    var results = w/(h*h);
    res.send("Your BMI is: "+ results)
})

app.listen(port, () => console.log(`Server is running on port ${port}`)) 