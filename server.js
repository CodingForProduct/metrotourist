const express = require('express')
const app = express()


app.get('/', function (req, res) {
    res.status(200).send('Hello World!')
})

app.get('/foo', function (req, res) {
    res.status(200)
    .send({foo: 1, bar: 'abc', something: req.query.baz})
})

app.get('/add', function (req, res) {
    res.status(200)
    .send({
        sum: parseInt(req.query.a) + parseInt(req.query.b)
    })
})

app.listen(3001, function () {
    console.log('Example app listening on port 3001!')
})
console.log("This is my app")
