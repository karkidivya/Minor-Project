import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './db.js'
import mainRouter from './routes/index.js'
import bodyParser from 'body-parser';

dotenv.config()
const app = express();
const PORT = 5000;

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
app.use('/', mainRouter)
// app.get('/api/tasks', (req, res) => {
// 	// console.log(req.headers);
//   return res.json({
// 		tasks: [
// 			{title: 'Task1',},
// 			{title: 'Task2',},
// 		],
// 	});
  
// });

// Increase payload size limit
app.use(bodyParser.json({ limit: '500mb' })); // Adjust the limit as per your requirement


app.listen( PORT, () => {
    console.log( `Server running on http://localhost:${PORT}` )
})