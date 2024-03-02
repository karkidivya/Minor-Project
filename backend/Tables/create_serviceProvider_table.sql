CREATE TABLE IF NOT EXISTS ServiceProvider (
  serviceProviderId INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255),
  password VARCHAR(255),
  fullName VARCHAR(255),
  emailAddress VARCHAR(255),
  phoneNumber VARCHAR(20),
  location VARCHAR(255),
  profilePicture VARCHAR(255),
  introduction TEXT,
  categoryId INT,
  proficiency VARCHAR(255),
  availability VARCHAR(255),
  preference VARCHAR(255),
  company VARCHAR(255),
  position VARCHAR(255),
  timeOfWork VARCHAR(255),
  reference VARCHAR(255),
  certificate VARCHAR(255),
  education VARCHAR(255),
  rating INT,
  numberOfViews INT,
  accountStatus BOOLEAN,
  services JSON,  -- Stores service IDs collection
  paymentHistory JSON,  -- Stores payment history collection
  verificationStatus BOOLEAN,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_category FOREIGN KEY (categoryId) REFERENCES ServiceCategory(categoryId)
);
