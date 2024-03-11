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
  `bookingId` int NOT NULL AUTO_INCREMENT,
  `customerId` int DEFAULT NULL,
  `serviceProviderId` int DEFAULT NULL,
  `serviceId` int DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `workDescription` varchar(255) DEFAULT NULL,
  `location` json DEFAULT NULL,
  `additionalNotes` varchar(255) DEFAULT NULL,
  `bookingStatus` varchar(255) DEFAULT NULL,
  `paymentStatus` varchar(255) DEFAULT NULL,
  `reviewId` json DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`bookingId`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Booking`
--

LOCK TABLES `Booking` WRITE;
/*!40000 ALTER TABLE `Booking` DISABLE KEYS */;
INSERT INTO `Booking` VALUES (71,1,101,1,1,50,'2024-03-15','10:00','1234567890','Service description 1','{\"latitude\": 123.456, \"longitude\": 789.012}','Additional notes 1','confirmed','pending','{\"rating\": 4, \"comment\": \"Good service\"}','2024-03-12 03:00:13','2024-03-12 03:00:13'),(72,1,102,2,2,70,'2024-03-16','11:00','9876543210','Service description 2','{\"latitude\": 456.789, \"longitude\": 12.345}','Additional notes 2','pending','pending',NULL,'2024-03-12 03:00:13','2024-03-12 03:00:13'),(73,1,103,3,3,80,'2024-03-17','12:00','1112223333','Service description 3','{\"latitude\": 789.012, \"longitude\": 234.567}','Additional notes 3','confirmed','completed','{\"rating\": 5, \"comment\": \"Excellent service\"}','2024-03-12 03:00:13','2024-03-12 03:00:13'),(74,1,104,4,4,60,'2024-03-18','13:00','4445556666','Service description 4','{\"latitude\": 345.678, \"longitude\": 456.789}','Additional notes 4','confirmed','pending',NULL,'2024-03-12 03:00:13','2024-03-12 03:00:13'),(75,1,105,5,5,90,'2024-03-19','14:00','7778889999','Service description 5','{\"latitude\": 567.89, \"longitude\": 678.901}','Additional notes 5','pending','pending',NULL,'2024-03-12 03:00:13','2024-03-12 03:00:13'),(81,1,101,1,1,50,'2024-03-15','10:00','1234567890','Service description 1','{\"latitude\": 123.456, \"longitude\": 789.012}','Additional notes 1','confirmed','pending','{\"rating\": 4, \"comment\": \"Good service\"}','2024-03-12 03:02:03','2024-03-12 03:02:03'),(82,1,102,2,2,70,'2024-03-16','11:00','9876543210','Service description 2','{\"latitude\": 456.789, \"longitude\": 12.345}','Additional notes 2','pending','pending',NULL,'2024-03-12 03:02:03','2024-03-12 03:02:03'),(83,1,103,3,3,80,'2024-03-17','12:00','1112223333','Service description 3','{\"latitude\": 789.012, \"longitude\": 234.567}','Additional notes 3','confirmed','completed','{\"rating\": 5, \"comment\": \"Excellent service\"}','2024-03-12 03:02:03','2024-03-12 03:02:03'),(84,1,104,4,4,60,'2024-03-18','13:00','4445556666','Service description 4','{\"latitude\": 345.678, \"longitude\": 456.789}','Additional notes 4','confirmed','pending',NULL,'2024-03-12 03:02:03','2024-03-12 03:02:03'),(85,1,105,5,5,90,'2024-03-19','14:00','7778889999','Service description 5','{\"latitude\": 567.89, \"longitude\": 678.901}','Additional notes 5','pending','pending',NULL,'2024-03-12 03:02:03','2024-03-12 03:02:03');
/*!40000 ALTER TABLE `Booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Payment`
--

DROP TABLE IF EXISTS `Payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_code` varchar(255) NOT NULL,
  `transaction_uuid` varchar(36) NOT NULL,
  `total_amount` int NOT NULL,
  `extraWorkDescription` varchar(255) DEFAULT NULL,
  `additionalAmount` int DEFAULT NULL,
  `status` varchar(50) NOT NULL,
  `ref_id` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Payment`
--

LOCK TABLES `Payment` WRITE;
/*!40000 ALTER TABLE `Payment` DISABLE KEYS */;
INSERT INTO `Payment` VALUES (1,'PRD001','1',50,'Extra work description 1',10,'completed','REF001','2024-03-11 20:45:03','2024-03-11 20:45:03'),(2,'PRD002','3',70,'Extra work description 2',15,'pending','REF002','2024-03-11 20:45:03','2024-03-11 20:45:03'),(3,'PROD001','5bb7c966-dfed-11ee-b989-d8126564fb4b',70,'Extra work description 1',10,'completed','REF001','2024-03-11 21:21:43','2024-03-11 21:21:43'),(4,'PROD002','5bb7cedb-dfed-11ee-b989-d8126564fb4b',71,'Extra work description 2',15,'pending','REF002','2024-03-11 21:21:43','2024-03-11 21:21:43'),(5,'PROD003','5bb7cfe9-dfed-11ee-b989-d8126564fb4b',72,'Extra work description 3',20,'completed','REF003','2024-03-11 21:21:43','2024-03-11 21:21:43'),(6,'PROD004','5bb7d076-dfed-11ee-b989-d8126564fb4b',73,'Extra work description 4',25,'pending','REF004','2024-03-11 21:21:43','2024-03-11 21:21:43'),(7,'PROD005','5bb7d0f6-dfed-11ee-b989-d8126564fb4b',74,'Extra work description 5',30,'completed','REF005','2024-03-11 21:21:43','2024-03-11 21:21:43'),(8,'PROD006','5bb7d2ce-dfed-11ee-b989-d8126564fb4b',75,'Extra work description 6',35,'pending','REF006','2024-03-11 21:21:43','2024-03-11 21:21:43'),(9,'PROD007','5bb7d351-dfed-11ee-b989-d8126564fb4b',76,'Extra work description 7',40,'completed','REF007','2024-03-11 21:21:43','2024-03-11 21:21:43'),(10,'PROD008','5bb7d3cb-dfed-11ee-b989-d8126564fb4b',77,'Extra work description 8',45,'pending','REF008','2024-03-11 21:21:43','2024-03-11 21:21:43'),(11,'PROD009','5bb7d463-dfed-11ee-b989-d8126564fb4b',78,'Extra work description 9',50,'completed','REF009','2024-03-11 21:21:43','2024-03-11 21:21:43'),(12,'PROD010','5bb7d75f-dfed-11ee-b989-d8126564fb4b',79,'Extra work description 10',55,'pending','REF010','2024-03-11 21:21:43','2024-03-11 21:21:43'),(13,'PRODUCT001','70',100,'Extra work description 1',20,'completed','REF001','2024-03-11 21:22:52','2024-03-11 21:22:52'),(14,'PRODUCT002','71',120,'Extra work description 2',30,'pending','REF002','2024-03-11 21:22:52','2024-03-11 21:22:52'),(15,'PRODUCT003','72',150,'Extra work description 3',25,'completed','REF003','2024-03-11 21:22:52','2024-03-11 21:22:52'),(16,'PRODUCT004','73',80,'Extra work description 4',10,'pending','REF004','2024-03-11 21:22:52','2024-03-11 21:22:52'),(17,'PRODUCT005','74',200,'Extra work description 5',40,'completed','REF005','2024-03-11 21:22:52','2024-03-11 21:22:52'),(18,'PRODUCT006','75',90,'Extra work description 6',15,'pending','REF006','2024-03-11 21:22:52','2024-03-11 21:22:52'),(19,'PRODUCT007','76',110,'Extra work description 7',20,'completed','REF007','2024-03-11 21:22:52','2024-03-11 21:22:52'),(20,'PRODUCT008','77',130,'Extra work description 8',35,'pending','REF008','2024-03-11 21:22:52','2024-03-11 21:22:52'),(21,'PRODUCT009','78',170,'Extra work description 9',30,'completed','REF009','2024-03-11 21:22:52','2024-03-11 21:22:52'),(22,'PRODUCT010','79',95,'Extra work description 10',15,'pending','REF010','2024-03-11 21:22:52','2024-03-11 21:22:52');
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
  `location` json DEFAULT NULL,
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
  `verificationStatus` tinyint(1) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`serviceProviderId`),
  KEY `fk_category` (`categoryId`),
  CONSTRAINT `fk_category` FOREIGN KEY (`categoryId`) REFERENCES `ServiceCategory` (`categoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ServiceProvider`
--

LOCK TABLES `ServiceProvider` WRITE;
/*!40000 ALTER TABLE `ServiceProvider` DISABLE KEYS */;
INSERT INTO `ServiceProvider` VALUES (1,'john_doee','password123e','John Doee','john.doe@examplee.com','1234567890','{\"address\": \"Gaighat\", \"latitude\": 27.7172, \"longitude\": 85.324}','profile_pic.jpg','Experienced service provider',1,'Expert','Full-time','Remote work preferred','ABC Company','Manager','9 AM - 5 PM','Available upon request','Certified in X','Bachelor\'s in Y',4,100,1,'{\"service1\": {\"price\": 50, \"duration\": \"1 hour\"}}','{\"payment1\": {\"date\": \"2024-03-07\", \"amount\": 50}}',NULL,'2024-03-07 08:33:33','2024-03-07 08:33:33'),(2,'veaevjohn_doecdcdce','passwocdard123e','John Doecdse','jocshn.doe@examplee.com','12344567890','{\"address\": \"Gaigdhat\", \"latitude\": 27.7172, \"longitude\": 85.324}','proficsdle_pic.jpg','Expericsenced service provider',1,'Expert','Full-time','Remote work preferred','ABC Company','Manager','9 AM - 5 PM','Available upon request','Certified in X','Bachelor\'s in Y',4,100,1,'{\"service1\": {\"price\": 50, \"duration\": \"1 hour\"}}','{\"payment1\": {\"date\": \"2024-03-07\", \"amount\": 50}}',NULL,'2024-03-07 12:26:45','2024-03-07 12:26:45'),(3,'veacscsevjohn_doecdcdce','passwocdard123e','John Doecdse','josdcscshn.doe@examplee.com',NULL,'{\"address\": \"Gaigdhat\", \"latitude\": 27.7172, \"longitude\": 85.324}','proficsdle_pic.jpg','Expericsenced service provider',1,'Expert','Full-time','Remote work preferred','ABC Company','Manager','9 AM - 5 PM','Available upon request','Certified in X','Bachelor\'s in Y',4,100,1,'{\"service1\": {\"price\": 50, \"duration\": \"1 hour\"}}','{\"payment1\": {\"date\": \"2024-03-07\", \"amount\": 50}}',NULL,'2024-03-07 12:27:18','2024-03-07 12:27:18'),(4,NULL,'qqqqqqqq','diyan',NULL,'+977 3333333333','\"\"','https://firebasestorage.googleapis.com/v0/b/kamsewa-62691.appspot.com/o/user%2FprofilePicture%2Fundefined?alt=media&token=4246a645-57c0-4d21-94c9-a45870507834','',NULL,'beginner','full-time',NULL,NULL,'fawe','','','https://firebasestorage.googleapis.com/v0/b/kamsewa-62691.appspot.com/o/user%2FcertificateImage%2Fundefined?alt=media&token=da662d27-bdf7-4f5a-b181-75896d21825f','primary',NULL,NULL,NULL,NULL,NULL,NULL,'2024-03-07 13:54:15','2024-03-07 13:54:15'),(5,'vjohn_doecdcdce','passwocdard123e','John Doecdse','joshn.doe@examplee.com',NULL,'{\"address\": \"Gaigdhat\", \"latitude\": 27.7172, \"longitude\": 85.324}','proficsdle_pic.jpg','Expericsenced service provider',1,'Expert','Full-time','Remote work preferred','ABC Company','Manager','9 AM - 5 PM','Available upon request','Certified in X','Bachelor\'s in Y',4,100,1,'{\"service1\": {\"price\": 50, \"duration\": \"1 hour\"}}','{\"payment1\": {\"date\": \"2024-03-07\", \"amount\": 50}}',NULL,'2024-03-10 09:29:58','2024-03-10 09:29:58'),(6,NULL,'qqqqqqqq','Aashish Shrestha','aashish@gmail.com','+977 983 2982323','{\"address\": \"\", \"latitude\": 27.71974110399233, \"longitude\": 85.33213153481485}','https://firebasestorage.googleapis.com/v0/b/kamsewa-62691.appspot.com/o/user%2FprofilePicture%2Fundefined?alt=media&token=ca4d19e1-65aa-4bb7-914c-6c0876022065','I am a very specialized and experience professional with more than 12 years of experience in this field.',1,'semi-pro','full-time','kathmandu',NULL,'Cleaner','','','https://firebasestorage.googleapis.com/v0/b/kamsewa-62691.appspot.com/o/user%2FcertificateImage%2Fundefined?alt=media&token=b0d820ee-dd74-4a92-926f-ea5adb9a9bb2','higher-secondary',NULL,NULL,NULL,NULL,NULL,NULL,'2024-03-10 10:03:02','2024-03-10 10:03:02');
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
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'user1','password1','Alice Johnson','alice@example.com','1234567890','Address A',800,1,'{\"paymentMethod\": \"Credit Card\"}','2024-02-24 18:15:00','2024-02-24 18:15:00'),(2,'user2','password2','Bob Smith','bob@example.com','9876543210','Address B',750,1,'{\"paymentMethod\": \"PayPal\"}','2024-02-25 18:15:00','2024-02-25 18:15:00'),(3,'user3','password3','Charlie Brown','charlie@example.com','1234567890','Address C',820,1,'{\"paymentMethod\": \"Credit Card\"}','2024-02-26 18:15:00','2024-02-26 18:15:00'),(4,'user4','password4','David Johnson','david@example.com','9876543210','Address D',780,1,'{\"paymentMethod\": \"PayPal\"}','2024-02-27 18:15:00','2024-02-27 18:15:00'),(5,'user5','password5','Eva Smith','eva@example.com','1234567890','Address E',790,1,'{\"paymentMethod\": \"Credit Card\"}','2024-02-28 18:15:00','2024-02-28 18:15:00'),(6,'user6','password6','Franklin White','franklin@example.com','9876543210','Address F',830,1,'{\"paymentMethod\": \"PayPal\"}','2024-02-29 18:15:00','2024-02-29 18:15:00'),(7,'user7','password7','Grace Johnson','grace@example.com','1234567890','Address G',810,1,'{\"paymentMethod\": \"Credit Card\"}','2024-03-01 18:15:00','2024-03-01 18:15:00'),(8,'user8','password8','Henry Smith','henry@example.com','9876543210','Address H',760,1,'{\"paymentMethod\": \"PayPal\"}','2024-03-02 18:15:00','2024-03-02 18:15:00'),(9,'user9','password9','Isabella Brown','isabella@example.com','1234567890','Address I',830,1,'{\"paymentMethod\": \"Credit Card\"}','2024-03-03 18:15:00','2024-03-03 18:15:00'),(10,'user10','password10','Jack Johnson','jack@example.com','9876543210','Address J',770,1,'{\"paymentMethod\": \"PayPal\"}','2024-03-04 18:15:00','2024-03-04 18:15:00'),(11,NULL,'qqqq','userAdmin',NULL,'44444444444',NULL,NULL,NULL,NULL,'2024-03-11 14:28:09','2024-03-11 14:28:09'),(12,NULL,'csdsc','AdminGPON',NULL,'44444444444',NULL,NULL,NULL,NULL,'2024-03-11 14:29:05','2024-03-11 14:29:05'),(13,NULL,'dca','Class-Routine',NULL,'44444444444',NULL,NULL,NULL,NULL,'2024-03-11 14:30:28','2024-03-11 14:30:28'),(14,NULL,'dascs','',NULL,'44444444444',NULL,NULL,NULL,NULL,'2024-03-11 14:31:01','2024-03-11 14:31:01'),(15,NULL,'csc','Routine_keeper5',NULL,'44444444444',NULL,NULL,NULL,NULL,'2024-03-11 14:32:21','2024-03-11 14:32:21'),(16,NULL,'cssdcs','userAdmin',NULL,'44444444444',NULL,NULL,NULL,NULL,'2024-03-11 14:33:24','2024-03-11 14:33:24'),(17,NULL,'csc','sdcuserAdmin',NULL,'44444444444',NULL,NULL,NULL,NULL,'2024-03-11 14:34:53','2024-03-11 14:34:53'),(18,NULL,'cs','userAdmin',NULL,'cs',NULL,NULL,NULL,NULL,'2024-03-11 16:09:30','2024-03-11 16:09:30'),(19,NULL,'dassfs','Class-Routine',NULL,'44444444444',NULL,NULL,NULL,NULL,'2024-03-11 16:09:47','2024-03-11 16:09:47'),(20,NULL,'cds','AdminGPON',NULL,'cs',NULL,NULL,NULL,NULL,'2024-03-11 16:11:22','2024-03-11 16:11:22'),(21,NULL,'csc','scscd',NULL,'',NULL,NULL,NULL,NULL,'2024-03-11 16:12:41','2024-03-11 16:12:41'),(22,NULL,'vasdv','userAdminsdcsa',NULL,'44444444444',NULL,NULL,NULL,NULL,'2024-03-11 16:13:49','2024-03-11 16:13:49');
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

-- Dump completed on 2024-03-12  3:18:18
