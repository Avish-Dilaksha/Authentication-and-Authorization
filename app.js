require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./db/connect')


const port = process.env.PORT || 3000

app.use(express.json())

const start = async () => {
    try {
        // connect to DB
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => console.log(`Sever is listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()