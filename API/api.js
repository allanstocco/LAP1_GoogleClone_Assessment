const express = require('express')
const app = express()
const cors = require('cors')

const poney = require('./poney_database')

const cars = require('./cars_database')

const arr = poney.concat(cars);

console.log(arr);


app.use(express.json())
app.use(cors())


app.get('/search', (req, res) => {
    res.send(poney)
    // console.log(poney)
})

app.get('/cars', (req, res) => {
    res.send(cars)
})

function getRandomItem() {
    let rand = Math.floor(Math.random() * arr.length + 1)
    console.log(arr);
    return arr[rand];
  }

app.get('/search/random', (req, res) => {
    res.send(getRandomItem());
  })

app.listen(3000, () => console.log(`Listening port http://0.0.0.0:3000`))

module.exports = app;
