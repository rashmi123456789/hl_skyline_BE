-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: skyline
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.22.04.1

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ameneties`
--

LOCK TABLES `Ameneties` WRITE;
/*!40000 ALTER TABLE `Ameneties` DISABLE KEYS */;
INSERT INTO `Ameneties` VALUES (1,'ameneties_labelccc','ameneties_titleccc','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_image alt','amenetcccccies_details description','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_lacccbel','amenetcccies_label','ameneties_label','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_label','ameneties_label','ameneties_label','amenetiesccc_label','ameneties_label','ameneties_ccclabel','ameneties_labecccl','dsds','dsds','dsds',NULL,NULL,NULL),(2,'ameneties_ldddddddddddddddabelccc','dddd','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','ameneties_image altfdfd','amenetcccccies_details description','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_lacccbel sdsds','fd','ddsdsdsds sdsd','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_labe sdsdsl','ameneties_label dsd','ameneties_labelds','amenetiesccc_label','ameneties_label','ameneties_ccclabel','ameneties_labecccldsds','dsdsdsdsd','dsddsdsdsds','dsdsdsds',NULL,NULL,NULL),(3,'ameneties_ldddddddddddddddabelccc','dddd','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','ameneties_image altfdfd','amenetcccccies_details description','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_lacccbel sdsds','fd','ddsdsdsds sdsd','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_labe sdsdsl','ameneties_label dsd','ameneties_labelds','amenetiesccc_label','ameneties_label','ameneties_ccclabel','ameneties_labecccldsds','dsdsdsdsd','dsddsdsdsds','dsdsdsds',NULL,NULL,NULL),(4,'ameneties_labccccel','ccccc','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_image alt','ccc description','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','dsdsd','amenecties_label','ameneties_label','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_label','ameneties_label','ameneties_label','c','ameneties_label','cx','cx','cx','amenecxcties_label','ameneties_label',NULL,NULL,NULL),(5,'ameneties_labccccel','ccccc','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_image alt','ccc description','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','dsdsd','amenecties_label','ameneties_label','https://i1.wp.com/www.differencebetween.com/wp-content/uploads/2016/11/Difference-Between-Facilities-and-Amenities-2.jpg?w=640&ssl=1','ameneties_label','ameneties_label','ameneties_label','c','ameneties_label','cx','cx','cx','amenecxcties_label','ameneties_label',NULL,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Architecture`
--

LOCK TABLES `Architecture` WRITE;
/*!40000 ALTER TABLE `Architecture` DISABLE KEYS */;
INSERT INTO `Architecture` VALUES (1,'architecture_label 1','architecture_label 1','dsds','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsds','architecture_label 1','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsds','architecture_label 1','dsds','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsds','dsds',NULL,NULL,NULL),(2,'architecturfdfde_label 1','architecture_fdfdlabel 1','dsfdfdfdds','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsfdfdds','architecture_label 1','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsds','architecture_label 1','fdfdfdfdffdfd','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsddfdfdfdfds','dfdfdfdfdsds',NULL,NULL,NULL),(3,'architecturfdfdgfgfgfe_label 1','archgfgfgfitecture_fdfdlabel 1','dsfdfdfdds','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsfgfgfdfdds','archfgfitecture_label 1','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsds','architectfgfgfgure_label 1','fdfdfdfdffdfd','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsddfdfdfdgfgfgfgffds','dfdfgfhgjhjhjdfdfdsds',NULL,NULL,NULL),(4,'architecturfdfdgfgfgfe_label 1','archgfgfgfitecture_fdfdlabel 1','dsfdfdfdds','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsfgfgfdfdds','archfgfitecture_label 1','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsds','architectfgfgfgure_label 1','fdfdfdfdffdfd','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','dsddfdfdfdgfgfgfgffds','dfdfgfhgjhjhjdfdfdsds',NULL,NULL,NULL);
/*!40000 ALTER TABLE `Architecture` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Faq`
--

LOCK TABLES `Faq` WRITE;
/*!40000 ALTER TABLE `Faq` DISABLE KEYS */;
INSERT INTO `Faq` VALUES (1,'question 1','Answer 1',1,NULL,NULL),(2,'question 2','Answer 2',2,NULL,NULL),(3,'question 3','Answer 3',3,NULL,NULL);
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
INSERT INTO `Floor` VALUES (1,'Floor 1','floor Name 1',2,1,NULL,NULL),(2,'Floor 2','floor Name 2',5,2,NULL,NULL),(3,'Floor 3','floor Name 3',6,3,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Location`
--

LOCK TABLES `Location` WRITE;
/*!40000 ALTER TABLE `Location` DISABLE KEYS */;
INSERT INTO `Location` VALUES (1,'location_label 2','location_label ds2','dsds','location_amenity_2 2','dsd 2','dsdsds','dsds 2','Ansdsdwer 2','dsd','questidsdson 2','Ansdsdswer 2','dsdsd',NULL,NULL,NULL),(2,'locationdsdsd_label 2','location_dsdsdlabel ds2','ddsdsdsdsds','location_amenisdsdsdty_2 2','ddsdsdsd 2','dsdsdsdsddsds','dsdssdsdsdsd 2','Ansdsdwsdsdsder 2','dsdsdsdsdsd','questidsdsondsdsds 2','Adsdsdsdnsdsdswer 2','dsdsdsddsd',NULL,NULL,NULL),(3,'locationdsdshghghd_label 2','locasssddddddddddddtion_dsdsdlabel ds2','ddsdddddddddddsdsdsds','location_ameghdsdsdssssssssssssnisdsdsddsdsty_2 2','ddsdsdsdsdsdsdsd 2','dsdsdddddddddddddsdsddsds','dsdssdsdsdsdhghg 2','Ansdsdwsdsdsder 2','dsdsdsdsdsfdfrfhghgdsdsdsd','questidsdsondsdsdhghgs 2','Adsdsdsdnsdhghghgsdswer 2','dsdshghghghdsddsd',NULL,NULL,NULL);
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
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Project`
--

LOCK TABLES `Project` WRITE;
/*!40000 ALTER TABLE `Project` DISABLE KEYS */;
INSERT INTO `Project` VALUES (1,'district ','matter_port ','type ','name ','https://www.w3schools.com/html/pic_trulli.jpg ','slider_1_atl ','https://www.w3schools.com/html/pic_trulli.jpg ','slider_2_atl','https://www.w3schools.com/html/pic_trulli.jpg ','slider_3_atl','https://www.w3schools.com/html/pic_trulli.jpg ','slider_4_atl','facilitfy_label','facilitfdy_title ','facilitfdy_description','facility_1','icon_1 ','facility_2 ','icon_2 ','facility_3','icon_fd3 ','facildfity_4','iconfd_4 ','facifdlity_5','icofdn_5 ','facility_6','icon_6 ','project_details_label ','project_dfdfetails_title ','project_details_location ',2,3,'project_details_property_type',5,2,'project_details_architect','project_details_developer ',1,'video_url ',1,'design_label ','design_title','design_description_1','https://www.w3schools.com/html/pic_trulli.jpg','design_image_1_alt ','design_image_1_title','https://www.w3schools.com/html/pic_trulli.jpg','design_image_2_alt','design_image_2_title','design_description_2','https://www.w3schools.com/html/pic_trulli.jpg','design_image_horizontal_alt','design_image_horizontal_title',1,'project_plan_label','project_plan_title','project_plan_description','https://www.w3schools.com/html/pic_trulli.jpg','project_plan_alt','faq_label','faq_title','faq_description',NULL,NULL),(2,'district ','matter_port ','type ','name ','https://www.w3schools.com/html/pic_trulli.jpg ','slider_1fdfd_atl ','https://www.w3schools.com/html/img_chania.jpg ','slider_2fdfd_atl','https://www.w3schools.com/html/pic_trulli.jpg ','slider_3fdf_atl','https://www.w3schools.com/html/img_chania.jpg','slider_4fd_atl','facilitfy_fdflabel','facilitfdy_title ','facilitfdy_description','facility_1','icon_1 ','facility_2 ','icon_2 ','facility_3','icon_fd3 ','facildfity_4','iconfd_4 ','facifdlity_5','icofdn_5 ','facility_6','icon_6 ','project_details_label ','project_dfdfetails_title ','project_details_location ',2,3,'project_details_property_type',5,2,'project_details_architect','project_details_developer ',2,'video_url ',2,'design_label ','design_title','design_description_1','https://www.w3schools.com/html/img_chania.jpg','design_image_1_alt ','design_image_1_title','https://www.w3schools.com/html/pic_trulli.jpg','design_image_2_alt','design_image_2_title','design_description_2','https://www.w3schools.com/html/pic_trulli.jpg','design_image_horizontal_alt','design_image_horizontal_title',2,'project_plan_label','project_plan_title','project_plan_description','https://www.w3schools.com/html/img_chania.jpg','project_plan_alt','faq_label','faq_title','faq_description',NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Project_unit`
--

LOCK TABLES `Project_unit` WRITE;
/*!40000 ALTER TABLE `Project_unit` DISABLE KEYS */;
INSERT INTO `Project_unit` VALUES (1,'type 1','name 1','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','alt',4,10,12,5,15000,'Plan 1',1,NULL,NULL),(2,'type 2','name 2','https://media.licdn.com/dms/image/C5616AQHu2s5CjWyyTQ/profile-displaybackgroundimage-shrink_350_1400/0/1640621223062?e=1679529600&v=beta&t=W6RlrP72BsQFN5lBE8dpSQhlNK6_loDDs6PwJbwuE7s','alt',4,10,12,5,15000,'Plan 2',2,NULL,NULL),(3,'type 3','name 3','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','alt',5,20,15,5,16000,'Plan 3',3,NULL,NULL);
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
  PRIMARY KEY (`property_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Property`
--

LOCK TABLES `Property` WRITE;
/*!40000 ALTER TABLE `Property` DISABLE KEYS */;
INSERT INTO `Property` VALUES (1,'property_label','','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','sds','dsds','dsds','fdfd','vvdsdsds','vcv','vcv','hghg','hgh','hgh','hg','h','hghg','hghg','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','hghg','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','ghg','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','hgh','trtr','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',NULL,NULL,NULL),(2,'property_laddddbel','dsd','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','sddsdsdsdsds','dsccxcxcds','dscxcxcxcxds','cxccxc','vvdsdsds','vcv','vcv','hgcxxcxchg','hgh','hgcxcxh','hgcxcx','hcxcxxcxc','hghcxcxcxg','hghcxcxg','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','hghg','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','ghgcxcxc','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','hcxcxgh','trcxcxtr','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',NULL,NULL,NULL),(3,'property_laddddbecxcxcxl','dcxcxcxcsd','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','sddsdsdsdsds','dscccxcxxcxcds','dscxcxcxcxds','cxccxcxcxcxc','vvdsdsccxcxcxxcxcxds','vcv','vcv','hgcxxcxcxcxchg','hgcxcxh','hgcxcxccxcxh','hgcxcxcxcxcx','hcxcxcxcxxxcxc','cxcx','hghcxcxg','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','hghg','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','cxcx','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png','hcxccxcxcxcxgh','txcxcxcxcxcxcxrcxcxtr','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',NULL,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SEO`
--

LOCK TABLES `SEO` WRITE;
/*!40000 ALTER TABLE `SEO` DISABLE KEYS */;
INSERT INTO `SEO` VALUES (1,'https://www.google.com/','meta 1',1,NULL,NULL),(2,'https://www.facebook.com/','meta 2',2,NULL,NULL),(3,'https://www.google.com/','meta 3',3,NULL,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Zone`
--

LOCK TABLES `Zone` WRITE;
/*!40000 ALTER TABLE `Zone` DISABLE KEYS */;
INSERT INTO `Zone` VALUES (1,1,'Zone 1',NULL,NULL),(2,2,'Zone 2',NULL,NULL),(3,3,'Zone 3',NULL,NULL),(4,3,'test zone api',NULL,NULL),(6,5,'test zone api 3','2023-01-20 13:51:09','2023-01-20 13:51:09');
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

-- Dump completed on 2023-01-20 23:49:36
