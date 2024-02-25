CREATE TABLE IF NOT EXISTS Service (
      serviceId INT PRIMARY KEY,
      serviceName VARCHAR(255),
      categoryId INT,
      description VARCHAR(255),
      price INT,
      estimatedDuration VARCHAR(255),
      requirement VARCHAR(255),
      image VARCHAR(255),
      createdAt DATE,
      updatedAt DATE,

      -- Adding foreign key constraints
      FOREIGN KEY (categoryId) REFERENCES ServiceCategory(categoryId)
    )