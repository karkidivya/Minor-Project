CREATE TABLE IF NOT EXISTS Booking (
  bookingId INT AUTO_INCREMENT PRIMARY KEY,
  customerId INT,
  serviceProviderId INT,
  serviceId VARCHAR(255),
  categoryId INT,
  amount INT,
  date VARCHAR(255),
  time VARCHAR(255),
  phoneNumber VARCHAR(255),
  workDescription VARCHAR(255),
  location JSON,
  additionalNotes VARCHAR(255),
  bookingStatus VARCHAR(255),
  reviewId JSON,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  -- ,
  
  -- Adding foreign key constraints
  -- FOREIGN KEY (customerId) REFERENCES User(userId),
  -- -- FOREIGN KEY (serviceProviderId) REFERENCES ServiceProvider(serviceProviderId),
  -- FOREIGN KEY (categoryId) REFERENCES ServiceCategory(categoryId)
);
