CREATE TABLE IF NOT EXISTS Booking (
  bookingId INT PRIMARY KEY,
  customerId INT,
  serviceProviderId INT,
  serviceId JSON,
  categoryId INT,
  amount INT,
  dateAndTime DATETIME,
  location DOUBLE,
  additionalNotes VARCHAR(255),
  bookingStatus VARCHAR(255),
  reviewId JSON,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  -- Adding foreign key constraints
  FOREIGN KEY (customerId) REFERENCES User(userId),
  FOREIGN KEY (serviceProviderId) REFERENCES serviceProvider(serviceProviderId),
  FOREIGN KEY (categoryId) REFERENCES ServiceCategory(categoryId)
);
