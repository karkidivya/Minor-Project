CREATE TABLE IF NOT EXISTS Booking (
  bookingId INT PRIMARY KEY,
  customerId JSON,
  serviceProviderId JSON,
  serviceId JSON,
  categoryId INT,
  dateAndTime DATETIME,
  location DOUBLE,
  additionalNotes VARCHAR(255),
  bookingStatus VARCHAR(255),
  reviewId JSON,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  -- Adding foreign key constraints
  FOREIGN KEY (customerId) REFERENCES Users(userId),
  FOREIGN KEY (serviceProviderId) REFERENCES Users(userId),
  FOREIGN KEY (serviceId) REFERENCES Service(serviceId),
  FOREIGN KEY (categoryId) REFERENCES ServiceCategory(categoryId)
);
