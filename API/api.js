const express = require('express')
const app = express()
const cors = require('cors')

const data = require('./database')

app.use(express.json())
app.use(cors())


app.get('/search', (req, res) => {
    res.send(data)
    console.log(data)
})

function getRandomItem() {
    let rand = Math.floor(Math.random() * data.length + 1)
    console.log(rand);
    return data[rand];
  }

app.get('/search/random', (req, res) => {
    res.send(getRandomItem());
  })

app.listen(3000, () => console.log(`Listening port http://0.0.0.0:3000`))

module.exports = app;
