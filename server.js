const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', function (req, res) {
    res.status(200).send('Hello World!')
})

//array of tours
const tourOptions = [
  { id: 1, name: "Hollywood", destinations: ["HardRock", "Chinese Theater", "Walk of Stars"]},
  { id: 2, name: "Downtown LA", destinations: ["Pershing Square", "Angel's Flight"]},
  { id: 3, name: "Santa Monica", destinations: ["The Pier", "3rd Street Promenade"] },
  { id: 4, name: "Culver City", destinations: ["Culver Hotel", "The Culver City Stairs", "Baldwin Hills Scenic Overlook"]},
];

// display list of users
app.get('/tours', function (request, response) {
    response.status(200)
  .send(tourOptions);
});


app.get('/add', function (req, res) {
    res.status(200)
    .send({
        sum: parseInt(req.query.a) + parseInt(req.query.b)
    })
})

// start server on port
app.listen(3001, function () {
    console.log('Example app listening on port 3001!')
})
