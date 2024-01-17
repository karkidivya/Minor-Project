import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'


//router object
// import mainRouter from './routes/index.js'
dotenv.config()
import mysql from 'mysql'

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: 'root'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const PORT  = process.env.PORT 
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use(express.json())


// app.use('/api', mainRouter)



app.listen( PORT, () => {
    console.log( `Server running on http://localhost:${PORT}` )
})