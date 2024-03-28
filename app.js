// package imports
const express = require('express')
const dotenv = require('dotenv')
const cors= require('cors')
const bodyParser = require('body-parser')


// project dependencies
const errorHandler = require('./middlewares/errorHandler.js')
const apiV1 = require('./routes')
const port = process.env.PORT

// configures dotenv
dotenv.config()

// express initializaton 
const app= express()

// middlewares
app.use(bodyParser.json())
app.use(cors())


//routes
app.use('/',apiV1)


// error handling
app.use(errorHandler)


app.listen(port, ()=>{
    console.log(`server runnning on port ${port}`);
})
