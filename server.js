const express = require('express')
const app = express()

app.use(express.static('dist'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3005, () => console.log('Proxy server listening on port 3005!'))
