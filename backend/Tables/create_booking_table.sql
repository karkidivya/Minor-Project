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