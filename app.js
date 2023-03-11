require('dotenv').config()

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const route = require('./routes/user')

const authenticationMiddleware = require('./middlewares/auth')
const NotFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/error-handler')


const port = process.env.PORT || 3000

app.use(express.json())

app.use('/api/v1/users', authenticationMiddleware, route)
app.use(NotFound)
app.use(errorHandler)

const start = async () => {
    try {
        // connect to DB
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Sever is listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()