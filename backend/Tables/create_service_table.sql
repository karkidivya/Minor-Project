CREATE TABLE IF NOT EXISTS Service (
      serviceId INT PRIMARY KEY,
      serviceName VARCHAR(255),
      categoryId INT,
      description VARCHAR(255),
      price INT,
      estimatedDuration DATE,
      requirement VARCHAR(255),
      image VARCHAR(255),
      createdAt DATE,
      updatedAt DATE
    )