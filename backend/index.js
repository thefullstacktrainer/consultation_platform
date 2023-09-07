// Import packages
const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
require('dotenv').config();
// App
const app = express()
// Morgan
app.use(morgan('tiny'))
// Cors
app.use(cors({
    origin: '*'
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes/index.routes'))
// First route
app.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
})
// health check
app.get('/health', (req, res) => {
    res.json({ message: 'Hello Check' })
})
// Starting server
app.listen('5000', () => console.log("Started app in 5000 port"))