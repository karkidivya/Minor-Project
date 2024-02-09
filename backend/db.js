import mysql from 'mysql'
import dotenv from 'dotenv'
dotenv.config()
const host = process.env.host
const user= process.env.user
const password=process.env.password

var  db = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: 'kamsewa',
});

db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
  
    db.query(`
    CREATE TABLE IF NOT EXISTS Users (
      userId INT PRIMARY KEY,
      username VARCHAR(255),
      password VARCHAR(255),
      name VARCHAR(255),
      emailAddress VARCHAR(255),
      phoneNumber VARCHAR(20),
      address VARCHAR(255),
      location DOUBLE,
      role VARCHAR(255),
      rating INT,
      numberOfViews INT,
      accountStatus BOOLEAN,
      paymentInformation INT,
      createdAt DATE,
      updatedAt DATE
    )
  `);
  
  // Create Review Table
  db.query(`
    CREATE TABLE IF NOT EXISTS Review (
      reviewId INT PRIMARY KEY,
      paymentId INT,
      bookingId INT,
      reviewerId INT,
      rating INT,
      dateAndTime DATE,
      textReview VARCHAR(255),
      createdAt DATE,
      updatedAt DATE
    )
  `);
  
  // Create Payment Table
  db.query(`
    CREATE TABLE IF NOT EXISTS Payment (
      paymentId INT PRIMARY KEY,
      bookingId INT,
      amount INT,
      paymentMethod VARCHAR(255),
      paymentStatus VARCHAR(255),
      createdAt DATE,
      updatedAt DATE
    )
  `);
  
  // Create Booking Table
  db.query(`
    CREATE TABLE IF NOT EXISTS Booking (
      bookingId INT PRIMARY KEY,
      customerId INT,
      serviceProviderId INT,
      serviceId INT,
      dateAndTime DATE,
      location DOUBLE,
      additionalNotes VARCHAR(255),
      bookingStatus VARCHAR(255),
      reviewId INT,
      createdAt DATE,
      updatedAt DATE
    )
  `);
  
  // Create Service Table
  db.query(`
    CREATE TABLE IF NOT EXISTS Service (
      serviceId INT PRIMARY KEY,
      serviceName VARCHAR(255),
      categoryId INT,
      description VARCHAR(255),
      price INT,
      estimatedDuration DATE,
      requirement VARCHAR(255),
      image VARCHAR(255),
      createdAt DATE,
      updatedAt DATE
    )
  `);
  
  // Create ServiceCategory Table
  db.query(`
    CREATE TABLE IF NOT EXISTS ServiceCategory (
      categoryId INT PRIMARY KEY,
      categoryName VARCHAR(255),
      description VARCHAR(255),
      image VARCHAR(255),
      createdAt DATE,
      updatedAt DATE
    )
  `);
  
  
    
  
    console.log('Connected to MySQL!');

    })

export default db 
