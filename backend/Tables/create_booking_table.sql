CREATE TABLE IF NOT EXISTS Booking (
  bookingId INT PRIMARY KEY,
  customerId INT,
  serviceProviderId INT,
  serviceId INT,
  dateAndTime DATETIME,
  location DOUBLE,
  additionalNotes VARCHAR(255),
  bookingStatus VARCHAR(255),
  reviewId INT,
  createdAt DATETIME,
  updatedAt DATETIME,
  
  -- Adding foreign key constraints
  FOREIGN KEY (customerId) REFERENCES Users(userId),
  FOREIGN KEY (serviceProviderId) REFERENCES Users(userId),
  FOREIGN KEY (serviceId) REFERENCES Service(serviceId)
);
