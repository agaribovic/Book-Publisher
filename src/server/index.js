const express = require('express')
const api = require('./api')

const app = express()

app.use(express.static('dist'))

app.get('/', (req, res) => res.json({ message: 'API is running' }))
app.use(api)

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`))
