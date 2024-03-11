CREATE TABLE IF NOT EXISTS Payment (
  id INT AUTO_INCREMENT PRIMARY KEY,
  bookingId VARCHAR(36) NOT NULL
  transaction_uuid VARCHAR(36) NOT NULL,
  total_amount INT NOT NULL,
  extraWorkDescription VARCHAR(255),
  additionalAmount INT,
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);