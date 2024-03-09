import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './db.js'
import mainRouter from './routes/index.js'

dotenv.config()
const app = express();
const PORT = 9000;

app.use(cors())

app.use(express.json())
app.use('/', mainRouter)

app.listen( PORT, () => {
    console.log( `Server running on http://localhost:${PORT}` )
})