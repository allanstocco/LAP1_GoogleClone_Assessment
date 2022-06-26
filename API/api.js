const express = require('express')
const app = express()
const cors = require('cors')

const poney = require('./poney_database')

const cars = require('./cars_database')

const arr = poney.concat(cars);


app.use(express.json())
app.use(cors())


app.get('/poney', (req, res) => {
    res.send(poney)
    
})

app.get('/cars', (req, res) => {
  res.send(cars)
})

function getRandomItem() {
  let rand = Math.floor(Math.random() * arr.length + 1)
  return arr[rand];
}

app.get('/search/random', (req, res) => {
  res.send(getRandomItem());
})


app.use((req, res, next) => {
  const error = new Error('Not Found');
  res.send([{ header: 'Could not find any results for this search' }]);
});

app.listen(3000, () => console.log(`Listening port http://0.0.0.0:3000`))

module.exports = app;
