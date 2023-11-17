const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5000;

// Define allowed origins
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001'];

// Use cors middleware with options
app.use(cors({
  origin: function (origin, callback) {
    // Check if the origin is in the allowedOrigins array
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/v1', require('./routes/index'))

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})