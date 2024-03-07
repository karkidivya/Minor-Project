import base64 from 'base-64';
import fetch from 'node-fetch';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Create a MySQL connection pool
const host = process.env.HOST;
const user = process.env.USERNAME;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

const pool = mysql.createPool({
  host: host,
  user: user,
  password: password,
  database: database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Function to check whether the booking exists in the database
export async function paymentDetail(req, res, next) {
  let connection;
  const { bookingId } = req.body;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.query(
      'SELECT * FROM Booking WHERE bookingId = ?',
      [bookingId]
    );
      res.json({msg: rows[0]})
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// Function to check whether the transaction exists in the database
export async function checkTransactionExists(transaction_uuid) {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.query(
      'SELECT COUNT(*) AS count FROM Payment WHERE transaction_uuid = ?',
      [transaction_uuid]
    );

    // If count is greater than 0, the transaction exists
    return rows[0].count > 0;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// Function to save the transaction record in the database
export async function saveTransactionToDatabase(transactionDetails) {
  let connection;
  try {
    connection = await pool.getConnection();
    console.log('MySQL connection successful');

    const { product_code, total_amount, transaction_uuid, status, ref_id } = transactionDetails;

    // Check if the transaction has already been processed (additional check)
    const transactionExists = await checkTransactionExists(transaction_uuid);
    if (transactionExists) {
      console.log('Transaction already exists in the database');
      return;
    }

    // Insert the transaction into the database
    await connection.query(
      'INSERT INTO Payment (product_code, total_amount, transaction_uuid, status, ref_id) VALUES (?, ?, ?, ?, ?)',
      [product_code, total_amount, transaction_uuid, status, ref_id]
    );

    console.log('Transaction saved');
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

// Verify payment function
export async function verifyPayment(req, res, next) {
  try {
    const { data } = req.body;
    const decodedData = base64.decode(data.data);
    const decodedJSON = JSON.parse(decodedData.toString());

    const { product_code, total_amount, transaction_uuid, ref_id } = decodedJSON;

    const parsedUrl = new URL('https://uat.esewa.com.np/api/epay/transaction/status/');
    parsedUrl.searchParams.append('product_code', product_code);
    parsedUrl.searchParams.append('total_amount', total_amount);
    parsedUrl.searchParams.append('transaction_uuid', transaction_uuid);

    // Fetch external data
    let body;
    try {
      const response = await fetch(parsedUrl, { method: 'GET' });
      body = await response.json();
    } catch (fetchError) {
      throw new Error(`Error fetching external data: ${fetchError.message}`);
    }

    console.log('External API response:', body);

    if (body.status === 'COMPLETE') {
      // Call the function to save the transaction to the database
      await saveTransactionToDatabase({ ...decodedJSON, status: body.status });

      res.json({ status: body.status, orderId: transaction_uuid });
    } else {
      return res.status(400).json({ error: 'Payment not complete' });
    }
  } catch (err) {
    console.error(err);
    return res.status(400).json({ error: err.message });
  }
}
