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