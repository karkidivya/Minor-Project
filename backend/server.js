import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './db.js'

dotenv.config()
const app = express();
const PORT = 3000;

// Connect to the MySQL server

  
  // Create a simple route to fetch data from MySQL
//   app.get('/users', (req, res) => {
//     // Perform a simple SELECT query
//     db.query('SELECT * FROM users', (queryErr, results) => {
//       if (queryErr) {
//         console.error('Error executing query:', queryErr);
//         res.status(500).json({ error: 'Internal Server Error' });
//         return;
//       }
//       res.json(results);
//     });
//   });
  

app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use(express.json())


// app.use('/api', mainRouter)



app.listen( PORT, () => {
    console.log( `Server running on http://localhost:${PORT}` )
})