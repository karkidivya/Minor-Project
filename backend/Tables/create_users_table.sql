CREATE TABLE IF NOT EXISTS Users (
  userId INT PRIMARY KEY AUTO_INCREMENT,
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
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
