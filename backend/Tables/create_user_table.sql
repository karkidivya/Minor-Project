CREATE TABLE IF NOT EXISTS User (
  userId INT PRIMARY KEY AUTO_INCREMENT,
  password VARCHAR(255),
  name VARCHAR(255),
  emailAddress VARCHAR(255),
  phoneNumber VARCHAR(20),
  creditScore INT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


