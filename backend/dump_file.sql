-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: kamsewa
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Booking`
--

DROP TABLE IF EXISTS `Booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Booking` (
  `bookingId` int NOT NULL,
  `customerId` int DEFAULT NULL,
  `serviceProviderId` int DEFAULT NULL,
  `serviceId` json DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `dateAndTime` datetime DEFAULT NULL,
  `location` double DEFAULT NULL,
  `additionalNotes` varchar(255) DEFAULT NULL,
  `bookingStatus` varchar(255) DEFAULT NULL,
  `reviewId` json DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`bookingId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Booking`
--

LOCK TABLES `Booking` WRITE;
/*!40000 ALTER TABLE `Booking` DISABLE KEYS */;
INSERT INTO `Booking` VALUES (1,1,1,'{\"serviceId\": 1}',1,'2024-02-25 09:00:00',123.456,'Additional notes for booking 1','Confirmed','{\"reviewId\": 1}','2024-02-26 00:45:48','2024-02-26 00:45:48'),(2,2,2,'{\"serviceId\": 2}',2,'2024-02-26 10:00:00',789.012,'Additional notes for booking 2','Pending',NULL,'2024-02-26 00:45:48','2024-02-26 00:45:48'),(3,1,3,'{\"serviceId\": 3}',1,'2024-02-27 11:00:00',456.789,'Additional notes for booking 3','Confirmed','{\"reviewId\": 3}','2024-02-26 00:45:48','2024-02-26 00:45:48'),(4,2,4,'{\"serviceId\": 4}',2,'2024-02-28 12:00:00',987.654,'Additional notes for booking 4','Pending',NULL,'2024-02-26 00:45:48','2024-02-26 00:45:48'),(5,1,5,'{\"serviceId\": 5}',1,'2024-02-29 13:00:00',321.987,'Additional notes for booking 5','Confirmed','{\"reviewId\": 5}','2024-02-26 00:45:48','2024-02-26 00:45:48'),(6,2,6,'{\"serviceId\": 6}',2,'2024-03-01 14:00:00',654.321,'Additional notes for booking 6','Pending',NULL,'2024-02-26 00:45:48','2024-02-26 00:45:48'),(7,1,7,'{\"serviceId\": 7}',1,'2024-03-02 15:00:00',135.246,'Additional notes for booking 7','Confirmed','{\"reviewId\": 7}','2024-02-26 00:45:48','2024-02-26 00:45:48'),(8,2,8,'{\"serviceId\": 8}',2,'2024-03-03 16:00:00',246.135,'Additional notes for booking 8','Pending',NULL,'2024-02-26 00:45:48','2024-02-26 00:45:48'),(9,1,9,'{\"serviceId\": 9}',1,'2024-03-04 17:00:00',369.258,'Additional notes for booking 9','Confirmed','{\"reviewId\": 9}','2024-02-26 00:45:48','2024-02-26 00:45:48'),(10,2,10,'{\"serviceId\": 10}',2,'2024-03-05 18:00:00',582.147,'Additional notes for booking 10','Pending',NULL,'2024-02-26 00:45:48','2024-02-26 00:45:48');
/*!40000 ALTER TABLE `Booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Payment`
--

DROP TABLE IF EXISTS `Payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Payment` (
  `paymentId` int NOT NULL,
  `bookingId` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `paymentMethod` varchar(255) DEFAULT NULL,
  `paymentStatus` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`paymentId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Payment`
--

LOCK TABLES `Payment` WRITE;
/*!40000 ALTER TABLE `Payment` DISABLE KEYS */;
INSERT INTO `Payment` VALUES (1,1,100,'Credit Card','Completed','2024-02-25','2024-02-25'),(2,2,50,'PayPal','Pending','2024-02-26','2024-02-26'),(3,3,80,'Credit Card','Completed','2024-02-27','2024-02-27'),(4,4,120,'PayPal','Pending','2024-02-28','2024-02-28'),(5,5,150,'Credit Card','Completed','2024-02-29','2024-02-29'),(6,6,90,'PayPal','Pending','2024-03-01','2024-03-01'),(7,7,110,'Credit Card','Completed','2024-03-02','2024-03-02'),(8,8,70,'PayPal','Pending','2024-03-03','2024-03-03'),(9,9,130,'Credit Card','Completed','2024-03-04','2024-03-04'),(10,10,100,'PayPal','Pending','2024-03-05','2024-03-05');
/*!40000 ALTER TABLE `Payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Review`
--

DROP TABLE IF EXISTS `Review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Review` (
  `reviewId` int NOT NULL,
  `paymentId` int DEFAULT NULL,
  `bookingId` int DEFAULT NULL,
  `reviewerId` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `dateAndTime` date DEFAULT NULL,
  `textReview` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`reviewId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Review`
--

LOCK TABLES `Review` WRITE;
/*!40000 ALTER TABLE `Review` DISABLE KEYS */;
INSERT INTO `Review` VALUES (1,1,1,2,4,'2024-02-25','A good experience overall.','2024-02-25','2024-02-25'),(2,2,2,1,3,'2024-02-26','Could be improved.','2024-02-26','2024-02-26'),(3,3,3,2,5,'2024-02-27','Excellent service!','2024-02-27','2024-02-27'),(4,4,4,1,2,'2024-02-28','Disappointed with the service.','2024-02-28','2024-02-28'),(5,5,5,2,4,'2024-02-29','Satisfied with the outcome.','2024-02-29','2024-02-29'),(6,6,6,1,3,'2024-03-01','Average experience.','2024-03-01','2024-03-01'),(7,7,7,2,5,'2024-03-02','Highly recommended!','2024-03-02','2024-03-02'),(8,8,8,1,2,'2024-03-03','Not worth the price.','2024-03-03','2024-03-03'),(9,9,9,2,4,'2024-03-04','Good value for money.','2024-03-04','2024-03-04'),(10,10,10,1,3,'2024-03-05','Could have been better.','2024-03-05','2024-03-05');
/*!40000 ALTER TABLE `Review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Service`
--

DROP TABLE IF EXISTS `Service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Service` (
  `serviceId` int NOT NULL,
  `serviceName` varchar(255) DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `estimatedDuration` varchar(255) DEFAULT NULL,
  `requirement` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`serviceId`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `Service_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `ServiceCategory` (`categoryId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Service`
--

LOCK TABLES `Service` WRITE;
/*!40000 ALTER TABLE `Service` DISABLE KEYS */;
INSERT INTO `Service` VALUES (1,'House Cleaning',1,'General house cleaning',50,'1 hour','None','house_cleaning.jpg','2024-02-25','2024-02-25'),(2,'Pipe Repair',2,'Repair leaking pipes',100,'2 hours','Advanced tools required','pipe_repair.jpg','2024-02-26','2024-02-26'),(3,'Electrical Wiring',3,'Electrical wiring installation',150,'3 hours','Professional electrician required','electrical_wiring.jpg','2024-02-27','2024-02-27'),(4,'Garden Design',4,'Custom garden design',200,'4 hours','Consultation with landscaping expert','garden_design.jpg','2024-02-28','2024-02-28'),(5,'Interior Painting',5,'Interior wall painting',80,'1.5 hours','Paint and brushes','interior_painting.jpg','2024-02-29','2024-02-29'),(6,'Furniture Moving',6,'Furniture moving service',120,'2 hours','Two movers and a truck','furniture_moving.jpg','2024-03-01','2024-03-01'),(7,'Cabinet Installation',7,'Kitchen cabinet installation',180,'3 hours','Cabinet kit and tools','cabinet_installation.jpg','2024-03-02','2024-03-02'),(8,'Washing Machine Repair',8,'Washing machine repair service',90,'1.5 hours','Spare parts and tools','washing_machine_repair.jpg','2024-03-03','2024-03-03'),(9,'Car Engine Tune-up',9,'Car engine tune-up service',160,'2 hours','Automotive diagnostic equipment','car_engine_tuneup.jpg','2024-03-04','2024-03-04'),(10,'Computer Virus Removal',10,'Computer virus removal service',70,'1 hour','Antivirus software','computer_virus_removal.jpg','2024-03-05','2024-03-05');
/*!40000 ALTER TABLE `Service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ServiceCategory`
--

DROP TABLE IF EXISTS `ServiceCategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ServiceCategory` (
  `categoryId` int NOT NULL,
  `categoryName` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`categoryId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ServiceCategory`
--

LOCK TABLES `ServiceCategory` WRITE;
/*!40000 ALTER TABLE `ServiceCategory` DISABLE KEYS */;
INSERT INTO `ServiceCategory` VALUES (1,'Cleaner','Cleaning services','cleaning.jpg','2024-02-25','2024-02-25'),(2,'Plumber','Plumbing services','plumbing.jpg','2024-02-26','2024-02-26'),(3,'Electrician','Electrical services','electrical.jpg','2024-02-27','2024-02-27'),(4,'Landscaper','Landscaping services','landscaping.jpg','2024-02-28','2024-02-28'),(5,'Painter','Painting services','painting.jpg','2024-02-29','2024-02-29'),(6,'Mover','Moving services','moving.jpg','2024-03-01','2024-03-01'),(7,'Carpenter','Carpentry services','carpentry.jpg','2024-03-02','2024-03-02'),(8,'Appliance-Repair','Appliance repair services','appliance_repair.jpg','2024-03-03','2024-03-03'),(9,'Auto-Repair','Auto repair services','auto_repair.jpg','2024-03-04','2024-03-04'),(10,'Computer-Repair','Computer repair services','computer_repair.jpg','2024-03-05','2024-03-05');
/*!40000 ALTER TABLE `ServiceCategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ServiceProvider`
--

DROP TABLE IF EXISTS `ServiceProvider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ServiceProvider` (
  `serviceProviderId` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `emailAddress` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(20) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `profilePicture` varchar(255) DEFAULT NULL,
  `introduction` text,
  `categoryId` int DEFAULT NULL,
  `proficiency` varchar(255) DEFAULT NULL,
  `availability` varchar(255) DEFAULT NULL,
  `preference` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `timeOfWork` varchar(255) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `certificate` varchar(255) DEFAULT NULL,
  `education` varchar(255) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `numberOfViews` int DEFAULT NULL,
  `accountStatus` tinyint(1) DEFAULT NULL,
  `services` json DEFAULT NULL,
  `paymentHistory` json DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`serviceProviderId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ServiceProvider`
--

LOCK TABLES `ServiceProvider` WRITE;
/*!40000 ALTER TABLE `ServiceProvider` DISABLE KEYS */;
INSERT INTO `ServiceProvider` VALUES (1,'provider1','password1','John Doe','john@example.com','1234567890','City A','profile1.jpg','Experienced service provider',1,'Expert','Weekdays','Morning','Company A','Manager','9am-5pm','Reference1','Certificate1','Education1',4,100,1,'[1]','[{\"amount\": 100, \"paymentId\": 1}]','2024-02-24 18:15:00','2024-02-24 18:15:00'),(2,'provider2','password2','Jane Smith','jane@example.com','9876543210','City B','profile2.jpg','Friendly and reliable service provider',2,'Intermediate','Weekends','Afternoon','Company B','Technician','10am-6pm','Reference2','Certificate2','Education2',3,80,1,'[2]','[{\"amount\": 50, \"paymentId\": 2}]','2024-02-25 18:15:00','2024-02-25 18:15:00'),(3,'provider3','password3','Alice Johnson','alice@example.com','1234567890','City C','profile3.jpg','Experienced service provider',3,'Expert','Weekdays','Morning','Company C','Manager','9am-5pm','Reference3','Certificate3','Education3',4,100,1,'[3]','[{\"amount\": 80, \"paymentId\": 3}]','2024-02-26 18:15:00','2024-02-26 18:15:00'),(4,'provider4','password4','Bob Smith','bob@example.com','9876543210','City D','profile4.jpg','Friendly and reliable service provider',4,'Intermediate','Weekends','Afternoon','Company D','Technician','10am-6pm','Reference4','Certificate4','Education4',3,80,1,'[4]','[{\"amount\": 120, \"paymentId\": 4}]','2024-02-27 18:15:00','2024-02-27 18:15:00'),(5,'provider5','password5','John Doe','john2@example.com','1234567890','City E','profile5.jpg','Experienced service provider',5,'Expert','Weekdays','Morning','Company E','Manager','9am-5pm','Reference5','Certificate5','Education5',4,100,1,'[5]','[{\"amount\": 150, \"paymentId\": 5}]','2024-02-28 18:15:00','2024-02-28 18:15:00'),(6,'provider6','password6','Jane Smith','jane2@example.com','9876543210','City F','profile6.jpg','Friendly and reliable service provider',6,'Intermediate','Weekends','Afternoon','Company F','Technician','10am-6pm','Reference6','Certificate6','Education6',3,80,1,'[6]','[{\"amount\": 90, \"paymentId\": 6}]','2024-02-29 18:15:00','2024-02-29 18:15:00'),(7,'provider7','password7','Alice Johnson','alice2@example.com','1234567890','City G','profile7.jpg','Experienced service provider',7,'Expert','Weekdays','Morning','Company G','Manager','9am-5pm','Reference7','Certificate7','Education7',4,100,1,'[7]','[{\"amount\": 110, \"paymentId\": 7}]','2024-03-01 18:15:00','2024-03-01 18:15:00'),(8,'provider8','password8','Bob Smith','bob2@example.com','9876543210','City H','profile8.jpg','Friendly and reliable service provider',8,'Intermediate','Weekends','Afternoon','Company H','Technician','10am-6pm','Reference8','Certificate8','Education8',3,80,1,'[8]','[{\"amount\": 70, \"paymentId\": 8}]','2024-03-02 18:15:00','2024-03-02 18:15:00'),(9,'provider9','password9','John Doe','john3@example.com','1234567890','City I','profile9.jpg','Experienced service provider',9,'Expert','Weekdays','Morning','Company I','Manager','9am-5pm','Reference9','Certificate9','Education9',4,100,1,'[9]','[{\"amount\": 130, \"paymentId\": 9}]','2024-03-03 18:15:00','2024-03-03 18:15:00'),(10,'provider10','password10','Jane Smith','jane3@example.com','9876543210','City J','profile10.jpg','Friendly and reliable service provider',10,'Intermediate','Weekends','Afternoon','Company J','Technician','10am-6pm','Reference10','Certificate10','Education10',3,80,1,'[10]','[{\"amount\": 100, \"paymentId\": 10}]','2024-03-04 18:15:00','2024-03-04 18:15:00'),(11,NULL,'qqqqqqqq','Divya Raj Karki',NULL,'+977 1111111111','','https://firebasestorage.googleapis.com/v0/b/kamsewa-62691.appspot.com/o/user%2FprofilePicture%2Fundefined?alt=media&token=2c100974-e91d-4e7b-a730-1329506c19ef','',NULL,'intermediate','full-time',NULL,NULL,'cadadd','','','https://firebasestorage.googleapis.com/v0/b/kamsewa-62691.appspot.com/o/user%2FcertificateImage%2Fundefined?alt=media&token=36e222b5-3e8e-439b-aff4-8d9b95cd6ebf','primary',NULL,NULL,NULL,NULL,NULL,'2024-02-25 19:29:22','2024-02-25 19:29:22');
/*!40000 ALTER TABLE `ServiceProvider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `emailAddress` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `creditScore` int DEFAULT NULL,
  `accountStatus` tinyint(1) DEFAULT NULL,
  `paymentInformation` json DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'user1','password1','Alice Johnson','alice@example.com','1234567890','Address A',800,1,'{\"paymentMethod\": \"Credit Card\"}','2024-02-24 18:15:00','2024-02-24 18:15:00'),(2,'user2','password2','Bob Smith','bob@example.com','9876543210','Address B',750,1,'{\"paymentMethod\": \"PayPal\"}','2024-02-25 18:15:00','2024-02-25 18:15:00'),(3,'user3','password3','Charlie Brown','charlie@example.com','1234567890','Address C',820,1,'{\"paymentMethod\": \"Credit Card\"}','2024-02-26 18:15:00','2024-02-26 18:15:00'),(4,'user4','password4','David Johnson','david@example.com','9876543210','Address D',780,1,'{\"paymentMethod\": \"PayPal\"}','2024-02-27 18:15:00','2024-02-27 18:15:00'),(5,'user5','password5','Eva Smith','eva@example.com','1234567890','Address E',790,1,'{\"paymentMethod\": \"Credit Card\"}','2024-02-28 18:15:00','2024-02-28 18:15:00'),(6,'user6','password6','Franklin White','franklin@example.com','9876543210','Address F',830,1,'{\"paymentMethod\": \"PayPal\"}','2024-02-29 18:15:00','2024-02-29 18:15:00'),(7,'user7','password7','Grace Johnson','grace@example.com','1234567890','Address G',810,1,'{\"paymentMethod\": \"Credit Card\"}','2024-03-01 18:15:00','2024-03-01 18:15:00'),(8,'user8','password8','Henry Smith','henry@example.com','9876543210','Address H',760,1,'{\"paymentMethod\": \"PayPal\"}','2024-03-02 18:15:00','2024-03-02 18:15:00'),(9,'user9','password9','Isabella Brown','isabella@example.com','1234567890','Address I',830,1,'{\"paymentMethod\": \"Credit Card\"}','2024-03-03 18:15:00','2024-03-03 18:15:00'),(10,'user10','password10','Jack Johnson','jack@example.com','9876543210','Address J',770,1,'{\"paymentMethod\": \"PayPal\"}','2024-03-04 18:15:00','2024-03-04 18:15:00');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-26  8:55:04