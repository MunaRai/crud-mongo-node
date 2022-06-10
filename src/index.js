const express = require('express')
const app = express() 

app.use(express.json())

//to build and run our server
app.listen(process.env.PORT, ()=>{
    console.log(`Server is up at port ${process.env.PORT}`)
})

const env = require('dotenv')

 //for dotenv configuration
 env.config()


const mongoose = require('mongoose')

//for our db
mongoose.connect(`mongodb+srv://muna:${process.env.MONGO_PW}@cluster0.imwt8.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log("Database Connected")
})

//getting from routes
const studentCreate = require('./routes/create')

//routes
app.use('/api', studentCreate)



