CREATE TABLE IF NOT EXISTS ServiceCategory (
      categoryId INT PRIMARY KEY,
      categoryName VARCHAR(255),
      description VARCHAR(255),
      image VARCHAR(255),
      createdAt DATE,
      updatedAt DATE
    )