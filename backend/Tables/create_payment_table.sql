CREATE TABLE IF NOT EXISTS Payment (
      paymentId INT PRIMARY KEY,
      bookingId INT,
      amount INT,
      paymentMethod VARCHAR(255),
      paymentStatus VARCHAR(255),
      createdAt DATE,
      updatedAt DATE
    )