const express = require('express')
const app = express()
const cors = require('cors')

const data = require('./database')

app.use(express.json())
app.use(cors())


app.get('/search', (req, res) => {
    res.send(data)
})


app.listen(3000, () => console.log(`Listening port http://0.0.0.0:3000`))

module.exports = app;
