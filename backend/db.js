import mysql from 'mysql2';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const host = process.env.HOST;
const user = process.env.USER_NAME ;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

const db = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  // Function to execute SQL queries from files
  const executeSQLFromFile = (filePath) => {
    try {
      const sql = fs.readFileSync(filePath, 'utf8');
      db.query(sql, (error, results, fields) => {
        if (error) {
          console.error(`Error executing ${filePath}:`, error);
          throw error;
        }
        console.log(`Table created from ${filePath}`);
      });
    } catch (error) {
      console.error(`Error reading ${filePath}:`, error);
    }
  };

  // Execute each SQL file
  executeSQLFromFile('./Tables/create_user_table.sql');
  executeSQLFromFile('./Tables/create_service_category_table.sql');
  executeSQLFromFile('./Tables/create_payment_table.sql');
  executeSQLFromFile('./Tables/create_service_table.sql');
  executeSQLFromFile('./Tables/create_serviceProvider_table.sql');
  executeSQLFromFile('./Tables/create_booking_table.sql');
  executeSQLFromFile('./Tables/create_review_table.sql');

  console.log('Connected to MySQL!');
});

export default db;

