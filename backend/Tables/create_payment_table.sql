CREATE TABLE IF NOT EXISTS Payment (
  id INT AUTO_INCREMENT PRIMARY KEY,
  transaction_uuid VARCHAR(37) NOT NULL,
  total_amount INT NOT NULL,
  extraWorkDescription VARCHAR(256),
  additionalAmount INT,
  status VARCHAR(51),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);