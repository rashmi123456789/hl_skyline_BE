-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
--
-- Host: localhost    Database: hl_skyline
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Ameneties`
--

DROP TABLE IF EXISTS `Ameneties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ameneties` (
  `ameneties_id` int NOT NULL AUTO_INCREMENT,
  `ameneties_label` varchar(255) DEFAULT NULL,
  `ameneties_title` varchar(255) DEFAULT NULL,
  `ameneties_details_image` varchar(512) DEFAULT NULL,
  `ameneties_details_image_alt` varchar(100) DEFAULT NULL,
  `ameneties_details_description` text,
  `ameneties_image_1` varchar(512) DEFAULT NULL,
  `ameneties_image_1_alt` varchar(100) DEFAULT NULL,
  `ameneties_image_1_title` varchar(255) DEFAULT NULL,
  `ameneties_image_1_description` text,
  `ameneties_image_2` varchar(512) DEFAULT NULL,
  `ameneties_image_2_alt` varchar(100) DEFAULT NULL,
  `ameneties_image_2_title` varchar(255) DEFAULT NULL,
  `ameneties_image_2_description` text,
  `ameneties_image_horizontal` varchar(512) DEFAULT NULL,
  `ameneties_image_horizontal_alt` varchar(255) DEFAULT NULL,
  `ameneties_image_horizontal_title` varchar(255) DEFAULT NULL,
  `ameneties_image_vertical` varchar(512) DEFAULT NULL,
  `ameneties_image_vertical_alt` varchar(100) DEFAULT NULL,
  `ameneties_image_vertical_title` varchar(255) DEFAULT NULL,
  `ameneties_short_description` text,
  `project_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`ameneties_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ameneties`
--

LOCK TABLES `Ameneties` WRITE;
/*!40000 ALTER TABLE `Ameneties` DISABLE KEYS */;
INSERT INTO `Ameneties` VALUES (1,'ameneties_labelccc','ameneties_titleccc','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_image alt','amenetcccccies_details description','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_lacccbel','amenetcccies_label','ameneties_label','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_label','ameneties_label','ameneties_label','amenetiesccc_label','ameneties_label','ameneties_ccclabel','ameneties_labecccl','dsds','dsds','dsds',1,NULL,NULL),(2,'ameneties_ldddddddddddddddabelccc','dddd','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','ameneties_image altfdfd','amenetcccccies_details description','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_lacccbel sdsds','fd','ddsdsdsds sdsd','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_labe sdsdsl','ameneties_label dsd','ameneties_labelds','amenetiesccc_label','ameneties_label','ameneties_ccclabel','ameneties_labecccldsds','dsdsdsdsd','dsddsdsdsds','dsdsdsds',NULL,NULL,NULL),(3,'ameneties_ldddddddddddddddabelccc','dddd','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','ameneties_image altfdfd','amenetcccccies_details description','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_lacccbel sdsds','fd','ddsdsdsds sdsd','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_labe sdsdsl','ameneties_label dsd','ameneties_labelds','amenetiesccc_label','ameneties_label','ameneties_ccclabel','ameneties_labecccldsds','dsdsdsdsd','dsddsdsdsds','dsdsdsds',NULL,NULL,NULL),(4,'ameneties_labccccel','ccccc','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_image alt','ccc description','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','dsdsd','amenecties_label','ameneties_label','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_label','ameneties_label','ameneties_label','c','ameneties_label','cx','cx','cx','amenecxcties_label','ameneties_label',NULL,NULL,NULL),(5,'ameneties_labccccel','ccccc','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_image alt','ccc description','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','dsdsd','amenecties_label','ameneties_label','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_label','ameneties_label','ameneties_label','c','ameneties_label','cx','cx','cx','amenecxcties_label','ameneties_label',NULL,NULL,NULL),(6,'Heaven in colombo 3','Heaven in colombo 3','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','alt_3',' Prime Houses; Changing a Dream Into a Reality! Everyone has a dream about their ideal home; a luxury villa amidst lush gardens; a place to call your own','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','atl_1','Hevan in Colombo 5',' Prime Houses; Changing a Dream Into a Reality! Everyone has a dream about their ideal home; a luxury villa amidst lush gardens; a place to call your own','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','atl_1','Heavan in Malabe',' Prime Houses; Changing a Dream Into a Reality! Everyone has a dream about their ideal home; a luxury villa amidst lush gardens; a place to call your own','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','atl_1','Hevan in Colombo 7','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','atl_1','Hevan in Colombo 8',NULL,3,'2023-01-29 16:18:17','2023-01-29 16:18:17');
/*!40000 ALTER TABLE `Ameneties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Apartment_unit`
--

DROP TABLE IF EXISTS `Apartment_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Apartment_unit` (
  `apartment_unit_id` int NOT NULL AUTO_INCREMENT,
  `project_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`apartment_unit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Apartment_unit`
--

LOCK TABLES `Apartment_unit` WRITE;
/*!40000 ALTER TABLE `Apartment_unit` DISABLE KEYS */;
INSERT INTO `Apartment_unit` VALUES (1,1,NULL,NULL),(2,2,NULL,NULL),(3,3,NULL,NULL);
/*!40000 ALTER TABLE `Apartment_unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Architecture`
--

DROP TABLE IF EXISTS `Architecture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Architecture` (
  `architecture_id` int NOT NULL AUTO_INCREMENT,
  `architecture_label` varchar(255) DEFAULT NULL,
  `architecture_title` varchar(255) DEFAULT NULL,
  `architecture_description_1` text,
  `architecture_image_1` varchar(512) DEFAULT NULL,
  `architecture_image_1_alt` varchar(100) DEFAULT NULL,
  `architecture_image_1_title` varchar(255) DEFAULT NULL,
  `architecture_image_2` varchar(512) DEFAULT NULL,
  `architecture_image_2_alt` varchar(100) DEFAULT NULL,
  `architecture_image_2_title` varchar(255) DEFAULT NULL,
  `architecture_description_2` text,
  `architecture_image_horizontal` varchar(512) DEFAULT NULL,
  `architecture_image_horizontal_alt` varchar(100) DEFAULT NULL,
  `architecture_image_horizontal_title` varchar(255) DEFAULT NULL,
  `project_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`architecture_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Architecture`
--

LOCK TABLES `Architecture` WRITE;
/*!40000 ALTER TABLE `Architecture` DISABLE KEYS */;
INSERT INTO `Architecture` VALUES (1,'architecture_label 1','architecture_label 1','dsds','https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/44207/44207-b580.jpg','dsds','architecture_label 1','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1p7ipCJZR08oq_LKEck3LJNR7Qxe7OFGcA&usqp=CAU','dsds','architecture_label 1','dsds','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsds','dsds',1,NULL,NULL),(2,'architecturfdfde_label 1','architecture_fdfdlabel 1','dsfdfdfdds','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsfdfdds','architecture_label 1','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsds','architecture_label 1','fdfdfdfdffdfd','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsddfdfdfdfds','dfdfdfdfdsds',NULL,NULL,NULL),(3,'architecturfdfdgfgfgfe_label 1','archgfgfgfitecture_fdfdlabel 1','dsfdfdfdds','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsfgfgfdfdds','archfgfitecture_label 1','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsds','architectfgfgfgure_label 1','fdfdfdfdffdfd','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsddfdfdfdgfgfgfgffds','dfdfgfhgjhjhjdfdfdsds',NULL,NULL,NULL),(4,'architecturfdfdgfgfgfe_label 1','archgfgfgfitecture_fdfdlabel 1','dsfdfdfdds','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsfgfgfdfdds','archfgfitecture_label 1','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsds','architectfgfgfgure_label 1','fdfdfdfdffdfd','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsddfdfdfdgfgfgfgffds','dfdfgfhgjhjhjdfdfdsds',NULL,NULL,NULL),(5,'Hevan in Galle ','Hevan in Galle ',' Prime Houses; Changing a Dream Into a Reality! Everyone has a dream about their ideal home; a luxury villa amidst lush gardens; a place to call your own','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','akllt_+1','Heavan galle','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','atl_1','heavan galle 2','  Prime Houses; Changing a Dream Into a Reality! Everyone has a dream about their ideal home; a luxury villa amidst lush gardens; a place to call your own','','','',3,'2023-01-29 16:18:17','2023-01-29 16:18:17');
/*!40000 ALTER TABLE `Architecture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Contact`
--

DROP TABLE IF EXISTS `Contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contact` (
  `contact_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `project_name` varchar(255) DEFAULT NULL,
  `question` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`contact_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contact`
--

LOCK TABLES `Contact` WRITE;
/*!40000 ALTER TABLE `Contact` DISABLE KEYS */;
INSERT INTO `Contact` VALUES (1,NULL,'sakjsaksa','gineke@gmail.com','Malabe',NULL,'2023-01-27 20:01:27','2023-01-27 20:01:27'),(2,'saman','sakjsaksa','gineke@gmail.com','Malabe',NULL,'2023-01-27 20:03:36','2023-01-27 20:03:36'),(3,'','','',NULL,NULL,'2023-01-28 17:08:52','2023-01-28 17:08:52'),(4,'','','',NULL,NULL,'2023-01-28 17:10:21','2023-01-28 17:10:21'),(5,'fd','fdf','fdfd',NULL,NULL,'2023-01-28 17:17:03','2023-01-28 17:17:03'),(6,'gfg','gfgf','gfgf',NULL,NULL,'2023-01-28 17:21:11','2023-01-28 17:21:11'),(7,'gfg','gf','gf',NULL,NULL,'2023-01-28 17:22:05','2023-01-28 17:22:05'),(8,'fd','fdfd','fdf',NULL,NULL,'2023-01-28 17:23:41','2023-01-28 17:23:41'),(9,'gf','gfgf','gfg',NULL,NULL,'2023-01-28 17:25:27','2023-01-28 17:25:27'),(10,'fd','fdfd','fdf',NULL,NULL,'2023-01-28 17:29:30','2023-01-28 17:29:30'),(11,'ds','ds','dsd',NULL,NULL,'2023-01-28 17:31:22','2023-01-28 17:31:22'),(12,'kk','gfgfgf','adb@gmail.com',NULL,NULL,'2023-01-29 09:32:11','2023-01-29 09:32:11'),(13,'kk','gfgfgf','adb@gmail.com',NULL,NULL,'2023-01-29 09:32:22','2023-01-29 09:32:22'),(14,'fg','ddsdsds','fgim@gmai.com',NULL,NULL,'2023-01-29 09:33:18','2023-01-29 09:33:18');
/*!40000 ALTER TABLE `Contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Faq`
--

DROP TABLE IF EXISTS `Faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Faq` (
  `faq_id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(255) DEFAULT NULL,
  `answer` text,
  `project_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`faq_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Faq`
--

LOCK TABLES `Faq` WRITE;
/*!40000 ALTER TABLE `Faq` DISABLE KEYS */;
INSERT INTO `Faq` VALUES (1,'question 1','Answer 1',1,NULL,NULL),(2,'question 2','Answer 2',2,NULL,NULL),(3,'question 3','Answer 3',3,NULL,NULL),(4,'What do you love about the current design/space?','These questions will help you paint yourself a picture of how your client wants to use their new space and what they’re looking to get out of your design. These are very important questions to ask before you dig into design preferences.',3,'2023-01-29 16:18:17','2023-01-29 16:18:17'),(5,'What do you love about the current design/space 22?','These questions will help you paint yourself a picture of how your client wants to use their new space and what they’re looking to get out of your design. These are very important questions to ask before you dig into design preferences.',3,'2023-01-29 16:18:17','2023-01-29 16:18:17');
/*!40000 ALTER TABLE `Faq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Floor`
--

DROP TABLE IF EXISTS `Floor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Floor` (
  `floor_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `number_of_units` int DEFAULT NULL,
  `tower_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`floor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Floor`
--

LOCK TABLES `Floor` WRITE;
/*!40000 ALTER TABLE `Floor` DISABLE KEYS */;
INSERT INTO `Floor` VALUES (1,'Floor 1','floor Name 1',2,1,NULL,NULL),(2,'Floor 2','floor Name 2',5,2,NULL,NULL),(3,'Floor 3','Type A',6,3,NULL,NULL);
/*!40000 ALTER TABLE `Floor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Housing_unit`
--

DROP TABLE IF EXISTS `Housing_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Housing_unit` (
  `housing_unit_id` int NOT NULL AUTO_INCREMENT,
  `project_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`housing_unit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Housing_unit`
--

LOCK TABLES `Housing_unit` WRITE;
/*!40000 ALTER TABLE `Housing_unit` DISABLE KEYS */;
INSERT INTO `Housing_unit` VALUES (1,1,NULL,NULL),(2,2,NULL,NULL),(3,3,NULL,NULL);
/*!40000 ALTER TABLE `Housing_unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Job`
--

DROP TABLE IF EXISTS `Job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Job` (
  `job_id` int NOT NULL AUTO_INCREMENT,
  `qualification` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `description` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`job_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Job`
--

LOCK TABLES `Job` WRITE;
/*!40000 ALTER TABLE `Job` DISABLE KEYS */;
INSERT INTO `Job` VALUES (1,'qualification 1','Kandy','experience 1','description 1',NULL,NULL),(2,'qualification2','Colombo ','experience 2','description 2',NULL,NULL),(3,'qualification 1','Kandy','experience 1','description 1',NULL,NULL),(4,'qualification2','Colombo ','experience 2','description 2',NULL,NULL),(5,'qualification 3','Matara','experience 3','A computer of arithmetic or logical operations (computation) automatically.',NULL,NULL);
/*!40000 ALTER TABLE `Job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Location`
--

DROP TABLE IF EXISTS `Location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Location` (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `location_label` varchar(255) DEFAULT NULL,
  `location_title` varchar(255) DEFAULT NULL,
  `location_description` text,
  `location_g_map_location` varchar(255) DEFAULT NULL,
  `location_amenity_1` varchar(255) DEFAULT NULL,
  `location_amenity_1_details` text,
  `location_amenity_2` varchar(255) DEFAULT NULL,
  `location_amenity_2_details` text,
  `location_amenity_3` varchar(255) DEFAULT NULL,
  `location_amenity_3_details` text,
  `location_amenity_4` varchar(255) DEFAULT NULL,
  `location_amenity_4_details` text,
  `project_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Location`
--

LOCK TABLES `Location` WRITE;
/*!40000 ALTER TABLE `Location` DISABLE KEYS */;
INSERT INTO `Location` VALUES (1,'location_label 2','location_label ds2','dsds','https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d571.7728189459077!2d79.90596060484839!3d6.833277594945552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1674933918993!5m2!1sen!2slk','dsd 2','dsdsds','dsds 2','Ansdsdwer 2','dsd','questidsdson 2','Ansdsdswer 2','dsdsd',1,NULL,NULL),(2,'locationdsdsd_label 2','location_dsdsdlabel ds2','ddsdsdsdsds','location_amenisdsdsdty_2 2','ddsdsdsd 2','dsdsdsdsddsds','dsdssdsdsdsd 2','Ansdsdwsdsdsder 2','dsdsdsdsdsd','questidsdsondsdsds 2','Adsdsdsdnsdsdswer 2','dsdsdsddsd',NULL,NULL,NULL),(3,'locationdsdshghghd_label 2','locasssddddddddddddtion_dsdsdlabel ds2','ddsdddddddddddsdsdsds','location_ameghdsdsdssssssssssssnisdsdsddsdsty_2 2','ddsdsdsdsdsdsdsd 2','dsdsdddddddddddddsdsddsds','dsdssdsdsdsdhghg 2','Ansdsdwsdsdsder 2','dsdsdsdsdsfdfrfhghgdsdsdsd','questidsdsondsdsdhghgs 2','Adsdsdsdnsdhghghgsdswer 2','dsdshghghghdsddsd',NULL,NULL,NULL),(4,'mount lvilia','mount lvilia',' Prime Houses; Changing a Dream Into a Reality! Everyone has a dream about their ideal home; a luxury villa amidst lush gardens; a place to call your own','','From DMT dep','14Min','Near Ground','0.5km','near','CCC','far from school','1km',3,'2023-01-29 16:18:17','2023-01-29 16:18:17');
/*!40000 ALTER TABLE `Location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Project`
--

DROP TABLE IF EXISTS `Project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Project` (
  `project_id` int NOT NULL AUTO_INCREMENT,
  `district` varchar(100) DEFAULT NULL,
  `matter_port` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slider_1_img` varchar(512) DEFAULT NULL,
  `slider_1_atl` varchar(100) DEFAULT NULL,
  `slider_2_img` varchar(512) DEFAULT NULL,
  `slider_2_atl` varchar(100) DEFAULT NULL,
  `slider_3_img` varchar(512) DEFAULT NULL,
  `slider_3_atl` varchar(100) DEFAULT NULL,
  `slider_4_img` varchar(512) DEFAULT NULL,
  `slider_4_atl` varchar(100) DEFAULT NULL,
  `facility_label` varchar(100) DEFAULT NULL,
  `facility_title` varchar(255) DEFAULT NULL,
  `facility_description` text,
  `facility_1` varchar(255) DEFAULT NULL,
  `icon_1` varchar(512) DEFAULT NULL,
  `facility_2` varchar(255) DEFAULT NULL,
  `icon_2` varchar(512) DEFAULT NULL,
  `facility_3` varchar(255) DEFAULT NULL,
  `icon_3` varchar(512) DEFAULT NULL,
  `facility_4` varchar(255) DEFAULT NULL,
  `icon_4` varchar(512) DEFAULT NULL,
  `facility_5` varchar(255) DEFAULT NULL,
  `icon_5` varchar(512) DEFAULT NULL,
  `facility_6` varchar(255) DEFAULT NULL,
  `icon_6` varchar(512) DEFAULT NULL,
  `project_details_label` varchar(255) DEFAULT NULL,
  `project_details_title` varchar(255) DEFAULT NULL,
  `project_details_location` varchar(255) DEFAULT NULL,
  `project_details_number_of_bedrooms` int DEFAULT NULL,
  `project_details_number_of_floors` int DEFAULT NULL,
  `project_details_property_type` varchar(255) DEFAULT NULL,
  `project_details_number_of_units` int DEFAULT NULL,
  `project_details_car_park_spaces` int DEFAULT NULL,
  `project_details_architect` varchar(255) DEFAULT NULL,
  `project_details_developer` varchar(255) DEFAULT NULL,
  `property_id` int DEFAULT NULL,
  `video_url` varchar(512) DEFAULT NULL,
  `ameneties_id` int DEFAULT NULL,
  `design_label` varchar(255) DEFAULT NULL,
  `design_title` varchar(255) DEFAULT NULL,
  `design_description_1` text,
  `design_image_1` varchar(512) DEFAULT NULL,
  `design_image_1_alt` varchar(100) DEFAULT NULL,
  `design_image_1_title` varchar(255) DEFAULT NULL,
  `design_image_2` varchar(512) DEFAULT NULL,
  `design_image_2_alt` varchar(100) DEFAULT NULL,
  `design_image_2_title` varchar(255) DEFAULT NULL,
  `design_description_2` text,
  `design_image_horizontal` varchar(512) DEFAULT NULL,
  `design_image_horizontal_alt` varchar(100) DEFAULT NULL,
  `design_image_horizontal_title` varchar(255) DEFAULT NULL,
  `architecture_id` int DEFAULT NULL,
  `project_plan_label` varchar(255) DEFAULT NULL,
  `project_plan_title` varchar(255) DEFAULT NULL,
  `project_plan_description` text,
  `project_plan_image` varchar(512) DEFAULT NULL,
  `project_plan_alt` varchar(255) DEFAULT NULL,
  `faq_label` varchar(255) DEFAULT NULL,
  `faq_title` varchar(255) DEFAULT NULL,
  `faq_description` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `status` varchar(50) DEFAULT NULL,
  `Projectcol` varchar(45) DEFAULT NULL,
  `seo_id` int DEFAULT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Project`
--

LOCK TABLES `Project` WRITE;
/*!40000 ALTER TABLE `Project` DISABLE KEYS */;
INSERT INTO `Project` VALUES (1,'district ','matter_port ','type ','Malabe','https://www.w3schools.com/html/pic_trulli.jpg ','slider_1_atl ','https://www.w3schools.com/html/pic_trulli.jpg ','slider_2_atl','https://www.w3schools.com/html/pic_trulli.jpg ','slider_3_atl','https://www.w3schools.com/html/pic_trulli.jpg ','slider_4_atl','facilitfy_label','facilitfdy_title ','facilitfdy_description','Swimming Pool','icon_1 ','Play area ','icon_2 ','Gym facility','icon_fd3 ','kids Play ground','iconfd_4 ','Security','icofdn_5 ','Clubs ','icon_6 ','project_details_label ','project_dfdfetails_title ','Malabe',2,3,'Residential',5,2,'Saman Kumara','Kumara Fernando',1,'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',1,'design_label ','design_title','design_description_1','https://www.w3schools.com/html/pic_trulli.jpg','design_image_1_alt ','design_image_1_title','https://www.w3schools.com/html/pic_trulli.jpg','design_image_2_alt','design_image_2_title','design_description_2','https://www.w3schools.com/html/pic_trulli.jpg','design_image_horizontal_alt','design_image_horizontal_title',1,'project_plan_label','project_plan_title','project_plan_description','https://www.w3schools.com/html/pic_trulli.jpg','project_plan_alt','faq_label','faq_title','faq_description',NULL,NULL,NULL,NULL,NULL),(2,'district ','matter_port ','type ','name ','https://www.w3schools.com/html/pic_trulli.jpg ','slider_1fdfd_atl ','https://www.w3schools.com/html/img_chania.jpg ','slider_2fdfd_atl','https://www.w3schools.com/html/pic_trulli.jpg ','slider_3fdf_atl','https://www.w3schools.com/html/img_chania.jpg','slider_4fd_atl','facilitfy_fdflabel','facilitfdy_title ','facilitfdy_description','facility_1','icon_1 ','facility_2 ','icon_2 ','facility_3','icon_fd3 ','facildfity_4','iconfd_4 ','facifdlity_5','icofdn_5 ','facility_6','icon_6 ','project_details_label ','project_dfdfetails_title ','project_details_location ',2,3,'Apartment',5,2,'project_details_architect','project_details_developer ',2,'video_url ',2,'design_label ','design_title','design_description_1','https://www.w3schools.com/html/img_chania.jpg','design_image_1_alt ','design_image_1_title','https://www.w3schools.com/html/pic_trulli.jpg','design_image_2_alt','design_image_2_title','design_description_2','https://www.w3schools.com/html/pic_trulli.jpg','design_image_horizontal_alt','design_image_horizontal_title',2,'project_plan_label','project_plan_title','project_plan_description','https://www.w3schools.com/html/img_chania.jpg','project_plan_alt','faq_label','faq_title','faq_description',NULL,NULL,NULL,NULL,NULL),(3,'Colombo','','Housing','Heaven in Colombo','https://homezonline.in/wp-content/uploads/2022/07/Simplex-single-floor-home.jpg','alt_1','https://homezonline.in/wp-content/uploads/2022/07/Simplex-single-floor-home.jpg','alt_2','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','alt_3','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','alt_4','Facilities in colombo','Facilities in colombo','Offering best lands and houses for sale in Sri Lanka, Prime Lands provide land and housing projects with all the facilities and amenities.','Pool','a','play ground','a','Wine',' a','Gym',' a','Swimming',' a','Runninng',' a','Heavan in colombo',' Heavan in colombo','Malabe',3,5,'Housing',10,12,'Saman kumara','anura kumara',NULL,'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',NULL,'Hevan in Colombo 10','Hevan in Colombo 10',' Prime Houses; Changing a Dream Into a Reality! Everyone has a dream about their ideal home; a luxury villa amidst lush gardens; a place to call your own','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','atl_1','','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','atl_1','Hevan in Colombo 11',' Prime Houses; Changing a Dream Into a Reality! Everyone has a dream about their ideal home; a luxury villa amidst lush gardens; a place to call your own','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','atl_1','Hevan in Colombo 514',NULL,'Heavan mount lavinea','Heavan mount lavinea2',' Prime Houses; Changing a Dream Into a Reality! Everyone has a dream about their ideal home; a luxury villa amidst lush gardens; a place to call your own','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','atl_1','Faqs','Requsted answers',' Prime Houses; Changing a Dream Into a Reality! Everyone has a dream about their ideal home; a luxury villa amidst lush gardens; a place to call your own','2023-01-29 16:18:17','2023-01-29 16:18:17','trending',NULL,NULL);
/*!40000 ALTER TABLE `Project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Project_unit`
--

DROP TABLE IF EXISTS `Project_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Project_unit` (
  `project_unit_id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `alt` varchar(255) DEFAULT NULL,
  `beds` int DEFAULT NULL,
  `baths` int DEFAULT NULL,
  `floor_area` int DEFAULT NULL,
  `floors_zones` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `plan` varchar(255) DEFAULT NULL,
  `project_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`project_unit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Project_unit`
--

LOCK TABLES `Project_unit` WRITE;
/*!40000 ALTER TABLE `Project_unit` DISABLE KEYS */;
INSERT INTO `Project_unit` VALUES (1,'type 1','name 1','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6atpH9ECUEhoKWvWKVjigfHYjsutcnut1Q&usqp=CAU','alt',4,10,12,5,15000,'Plan 1',1,NULL,NULL),(2,'type 2','name 2','https://media.licdn.com/dms/image/C5616AQHu2s5CjWyyTQ/profile-displaybackgroundimage-shrink_350_1400/0/1640621223062?e=1679529600&v=beta&t=W6RlrP72BsQFN5lBE8dpSQhlNK6_loDDs6PwJbwuE7s','alt',4,10,12,5,15000,'Plan 2',2,NULL,NULL),(3,'type 3','name 3','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','alt',5,20,15,5,16000,'Plan 3',3,NULL,NULL),(4,'Single unit','Isurupura','https://st.hzcdn.com/simgs/24313e6901126d55_14-8815/home-design.jpg','alt_11',4,2,40,2,2000000,'http://cdn.home-designing.com/wp-content/uploads/2014/07/single-floor-3-bedroom-house-plans.jpeg',3,'2023-01-29 16:18:17','2023-01-29 16:18:17');
/*!40000 ALTER TABLE `Project_unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Property`
--

DROP TABLE IF EXISTS `Property`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Property` (
  `property_id` int NOT NULL AUTO_INCREMENT,
  `property_label` varchar(255) DEFAULT NULL,
  `property_title` varchar(255) DEFAULT NULL,
  `property_image` varchar(512) DEFAULT NULL,
  `property_image_alt` varchar(255) DEFAULT NULL,
  `property_brochure` text,
  `property_brochure_alt` varchar(255) DEFAULT NULL,
  `property_description` text,
  `property_spec_label` varchar(255) DEFAULT NULL,
  `property_spec_title` varchar(255) DEFAULT NULL,
  `property_spec_details_spec_1_title` varchar(255) DEFAULT NULL,
  `property_spec_details_spec_1_details` varchar(255) DEFAULT NULL,
  `property_spec_details_spec_2_title` varchar(255) DEFAULT NULL,
  `property_spec_details_spec_2_details` text,
  `property_spec_details_spec_3_title` varchar(255) DEFAULT NULL,
  `property_spec_details_spec_3_details` text,
  `property_spec_details_spec_4_title` varchar(255) DEFAULT NULL,
  `property_spec_details_spec_4_details` text,
  `property_spec_slider_image_1` varchar(512) DEFAULT NULL,
  `property_spec_slider_image_1_alt` varchar(255) DEFAULT NULL,
  `property_spec_slider_image_2` varchar(512) DEFAULT NULL,
  `property_spec_slider_image_2_alt` varchar(255) DEFAULT NULL,
  `property_spec_slider_image_3` varchar(512) DEFAULT NULL,
  `property_spec_slider_image_3_alt` varchar(255) DEFAULT NULL,
  `property_spec_slider_image_4` varchar(512) DEFAULT NULL,
  `property_spec_slider_image_4_alt` varchar(255) DEFAULT NULL,
  `project_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `property_type` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`property_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Property`
--

LOCK TABLES `Property` WRITE;
/*!40000 ALTER TABLE `Property` DISABLE KEYS */;
INSERT INTO `Property` VALUES (1,'selected','FEATURED PROPERTIES','https://i.pinimg.com/originals/c8/40/eb/c840eb17c7bc9e681525c5561604935a.jpg','sds','https://wpmedia.roomsketcher.com/content/uploads/2022/01/06145940/What-is-a-floor-plan-with-dimensions.png','dsds','fdfd','specification','apartment specifications','Flooring','Burma Teak Parquet Floor','Bathrooms','hgh','Pantries','h','Other Specifications','hghg','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','hghg','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','ghg','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','hgh','trtr','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',1,NULL,NULL,'Residential'),(2,'property_laddddbel','dsd','https://cplusdesign.lk/wp-content/uploads/2019/11/apartment-plans-in-Sri-Lanka.jpg','sddsdsdsdsds','dsccxcxcds','dscxcxcxcxds','cxccxc','vvdsdsds','vcv','vcv','hgcxxcxchg','hgh','hgcxcxh','hgcxcx','hcxcxxcxc','hghcxcxcxg','hghcxcxg','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','hghg','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','ghgcxcxc','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','hcxcxgh','trcxcxtr','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',NULL,NULL,NULL,NULL),(3,'property_laddddbecxcxcxl','dcxcxcxcsd','https://media.istockphoto.com/id/1393537665/photo/modern-townhouse-design.jpg?b=1&s=170667a&w=0&k=20&c=vlUsVGOI_lm_cZUwwHZWeBL5RRfxYHExELD5vOGTwV8=','sddsdsdsdsds','dscccxcxxcxcds','dscxcxcxcxds','cxccxcxcxcxc','vvdsdsccxcxcxxcxcxds','vcv','vcv','hgcxxcxcxcxchg','hgcxcxh','hgcxcxccxcxh','hgcxcxcxcxcx','hcxcxcxcxxxcxc','cxcx','hghcxcxg','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','hghg','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','cxcx','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','hcxccxcxcxcxgh','txcxcxcxcxcxcxrcxcxtr','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',NULL,NULL,NULL,NULL),(4,'Heavan in colombo 2','Heavan in colombo 2','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','alt_1','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','alt_2','Prime Houses; Changing a Dream Into a Reality! Everyone has a dream about their ideal home; a luxury villa amidst lush gardens; a place to call your own','Heavan in Malabe','Heavan in Malabe','Bathroom',' Architectural Works ','pantry',' Architectural Works 1','Tv Room',' Architectural Works 2','Garage',' Architectural Works 3','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','alt_1','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','alt_2','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','alt_3','https://i.ytimg.com/vi/Ueg-pvEJDiI/maxresdefault.jpg','alt_4',3,'2023-01-29 16:18:17','2023-01-29 16:18:17',NULL);
/*!40000 ALTER TABLE `Property` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SEO`
--

DROP TABLE IF EXISTS `SEO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SEO` (
  `seo_id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `meta` text,
  `project_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`seo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SEO`
--

LOCK TABLES `SEO` WRITE;
/*!40000 ALTER TABLE `SEO` DISABLE KEYS */;
INSERT INTO `SEO` VALUES (1,'project_malabe_home','meta 1',1,NULL,NULL),(2,'https://www.facebook.com/','meta 2',2,NULL,NULL),(3,'gfgfg','meta 3',3,NULL,NULL),(4,'heavan-in-colombo','Prime Houses; Changing a Dream Into a Reality! Everyone has a dream about their ideal home; a luxury villa amidst lush gardens; a place to call your own',3,'2023-01-29 16:18:17','2023-01-29 16:18:17');
/*!40000 ALTER TABLE `SEO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tower`
--

DROP TABLE IF EXISTS `Tower`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tower` (
  `tower_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `project_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`tower_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tower`
--

LOCK TABLES `Tower` WRITE;
/*!40000 ALTER TABLE `Tower` DISABLE KEYS */;
INSERT INTO `Tower` VALUES (1,'Tower 1',1,NULL,NULL),(2,'Tower 2',2,NULL,NULL),(3,'Tower 3',3,NULL,NULL);
/*!40000 ALTER TABLE `Tower` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Unit`
--

DROP TABLE IF EXISTS `Unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Unit` (
  `unit_id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `number_of_units` int DEFAULT NULL,
  `zone_id` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`unit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Unit`
--

LOCK TABLES `Unit` WRITE;
/*!40000 ALTER TABLE `Unit` DISABLE KEYS */;
INSERT INTO `Unit` VALUES (1,'type 1',2,1,NULL,NULL),(2,'type 2',5,2,NULL,NULL),(3,'type 3',4,3,NULL,NULL);
/*!40000 ALTER TABLE `Unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Zone`
--

DROP TABLE IF EXISTS `Zone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Zone` (
  `zone_id` int NOT NULL AUTO_INCREMENT,
  `project_id` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`zone_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Zone`
--

LOCK TABLES `Zone` WRITE;
/*!40000 ALTER TABLE `Zone` DISABLE KEYS */;
INSERT INTO `Zone` VALUES (1,1,'Zone 1',NULL,NULL),(2,2,'Zone 2',NULL,NULL),(3,3,'Zone 3',NULL,NULL),(4,3,'test zone api',NULL,NULL),(6,5,'test zone api 3','2023-01-20 13:51:09','2023-01-20 13:51:09'),(7,NULL,'saman','2023-01-27 19:09:08','2023-01-27 19:09:08');
/*!40000 ALTER TABLE `Zone` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-29 22:47:48
