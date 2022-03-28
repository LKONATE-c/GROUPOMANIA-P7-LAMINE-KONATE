-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: groupomania
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `content` varchar(500) NOT NULL,
  `imageUrl` varchar(500) DEFAULT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  `userid` int NOT NULL,
  PRIMARY KEY (`id`,`userid`),
  KEY `userid_idx` (`userid`),
  CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (11,'My new dog','MON toutou ','http://localhost:3001/api/images/CHIEN.jpg1647979432695.jpg','2022-03-22 21:03:52',3),(12,'Pour les parents','profiter des places cinés au CE pour aller le voir avec vos enfants','http://localhost:3001/api/images/SONIC2.webp1648023670664.undefined','2022-03-23 09:21:10',14),(13,'disney','qui viens avec nous le week-end prochain??',NULL,'2022-03-23 10:34:03',3),(14,'Football','Benzema blessé','http://localhost:3001/api/images/BENZEMA.jpeg1648032256987.jpg','2022-03-23 10:39:18',3),(15,'Élection déjà gagné  ??','','http://localhost:3001/api/images/Emmanuel_Macron_(cropped).jpg1648111879588.jpg','2022-03-24 09:51:19',8);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commentaire`
--

DROP TABLE IF EXISTS `commentaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commentaire` (
  `id` int NOT NULL AUTO_INCREMENT,
  `articleid` int NOT NULL,
  `userid` int NOT NULL,
  `comment` varchar(450) DEFAULT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`articleid`,`userid`),
  KEY `fk_article_has_user_user1_idx` (`userid`),
  KEY `fk_article_has_user_article1_idx` (`articleid`),
  CONSTRAINT `fk_article_has_user_article1` FOREIGN KEY (`articleid`) REFERENCES `article` (`id`),
  CONSTRAINT `fk_article_has_user_user1` FOREIGN KEY (`userid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentaire`
--

LOCK TABLES `commentaire` WRITE;
/*!40000 ALTER TABLE `commentaire` DISABLE KEYS */;
INSERT INTO `commentaire` VALUES (12,11,14,'trop mignon ','2022-03-23 09:04:31'),(14,14,8,'On le veut en forme pour la coupe du monde','2022-03-24 09:44:51'),(15,15,3,'je pense qu\'il va gagner','2022-03-25 15:10:32');
/*!40000 ALTER TABLE `commentaire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `connection`
--

DROP TABLE IF EXISTS `connection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `connection` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date_log` datetime DEFAULT CURRENT_TIMESTAMP,
  `userid` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `connection`
--

LOCK TABLES `connection` WRITE;
/*!40000 ALTER TABLE `connection` DISABLE KEYS */;
INSERT INTO `connection` VALUES (1,'2022-01-03 20:40:52','1'),(2,'2022-01-11 17:57:34','1'),(3,'2022-01-11 17:58:08','1'),(4,'2022-01-13 16:33:15','1'),(5,'2022-01-13 16:42:46','1'),(6,'2022-01-13 17:34:02','1'),(7,'2022-01-13 17:38:10','1'),(8,'2022-01-13 19:33:09','1'),(9,'2022-01-13 19:40:27','1'),(10,'2022-01-13 19:44:47','1'),(11,'2022-01-13 20:13:17','1'),(12,'2022-01-13 20:15:34','1'),(13,'2022-01-13 20:25:57','1'),(14,'2022-01-14 17:04:19','1'),(15,'2022-01-14 17:06:19','1'),(16,'2022-01-14 17:13:01','1'),(17,'2022-01-14 17:15:42','1'),(18,'2022-01-14 17:18:13','1'),(19,'2022-01-14 17:28:27','1'),(20,'2022-01-14 20:08:19','1'),(21,'2022-01-14 20:31:51','1'),(22,'2022-01-14 20:34:02','1'),(23,'2022-01-14 20:35:38','1'),(24,'2022-01-14 20:46:27','1'),(25,'2022-01-14 20:51:39','1'),(26,'2022-01-16 14:17:22','1'),(27,'2022-01-16 14:20:00','1'),(28,'2022-01-16 21:54:50','1'),(29,'2022-01-16 22:23:30','1'),(30,'2022-01-16 22:24:37','1'),(31,'2022-01-16 22:42:06','1'),(32,'2022-01-16 23:08:31','1'),(33,'2022-01-16 23:15:42','1'),(34,'2022-01-16 23:19:33','1'),(35,'2022-01-17 09:39:05','1'),(36,'2022-01-17 09:56:22','1'),(37,'2022-01-17 09:57:10','1'),(38,'2022-01-17 09:58:39','1'),(39,'2022-01-17 10:00:19','1'),(40,'2022-01-17 18:49:34','1'),(41,'2022-01-17 18:57:29','1'),(42,'2022-01-17 18:58:49','1'),(43,'2022-01-17 19:01:12','1'),(44,'2022-01-17 19:07:57','1'),(45,'2022-01-17 19:16:58','1'),(46,'2022-01-18 15:43:23','1'),(47,'2022-01-19 09:25:04','1'),(48,'2022-01-19 09:34:11','1'),(49,'2022-01-19 09:36:41','1'),(50,'2022-01-19 09:39:08','1'),(51,'2022-01-19 09:41:23','1'),(52,'2022-01-19 10:27:23','1'),(53,'2022-01-19 10:30:57','1'),(54,'2022-01-19 20:19:28','1'),(55,'2022-01-19 20:55:42','1'),(56,'2022-01-19 21:00:26','1'),(57,'2022-01-19 21:17:14','1'),(58,'2022-01-19 21:25:13','1'),(59,'2022-01-19 21:37:49','1'),(60,'2022-01-25 18:11:21','1'),(61,'2022-01-25 20:40:46','1'),(62,'2022-01-25 20:53:43','1'),(63,'2022-01-25 20:57:07','1'),(64,'2022-01-25 21:58:48','1'),(65,'2022-01-25 22:00:52','1'),(66,'2022-01-25 22:05:32','1'),(67,'2022-01-26 21:57:34','1'),(68,'2022-01-26 22:06:38','1'),(69,'2022-01-26 22:18:06','1'),(70,'2022-01-27 10:26:49','1'),(71,'2022-01-27 16:58:40','1'),(72,'2022-01-27 17:17:33','1'),(73,'2022-01-27 17:53:05','1'),(74,'2022-01-27 17:57:22','1'),(75,'2022-01-27 18:18:00','1'),(76,'2022-01-27 18:23:32','1'),(77,'2022-01-28 13:27:51','1'),(78,'2022-01-28 13:34:24','1'),(79,'2022-01-28 13:35:40','1'),(80,'2022-01-28 13:37:41','1'),(81,'2022-01-28 13:51:28','1'),(82,'2022-01-28 13:55:22','1'),(83,'2022-01-28 18:41:49','1'),(84,'2022-01-28 20:39:54','1'),(85,'2022-01-30 12:18:20','1'),(86,'2022-01-31 21:55:24','1'),(87,'2022-01-31 22:42:27','1'),(88,'2022-02-02 23:02:45','1'),(89,'2022-02-03 14:30:35','1'),(90,'2022-02-03 14:35:02','1'),(91,'2022-02-03 14:38:24','1'),(92,'2022-02-03 14:39:17','1'),(93,'2022-02-03 14:40:13','1'),(94,'2022-02-03 14:41:15','1'),(95,'2022-02-03 14:45:07','1'),(96,'2022-02-03 15:07:33','1'),(97,'2022-02-03 15:08:47','1'),(98,'2022-02-03 15:09:33','1'),(99,'2022-02-03 15:10:52','1'),(100,'2022-02-03 15:11:41','1'),(101,'2022-02-04 10:16:08','1'),(102,'2022-02-04 11:43:43','1'),(103,'2022-02-04 11:52:53','1'),(104,'2022-02-16 21:05:50','1'),(105,'2022-02-22 09:24:32','1'),(106,'2022-02-22 14:17:37','1'),(107,'2022-02-22 14:41:49','1'),(108,'2022-02-22 15:00:42','1'),(109,'2022-02-24 13:33:18','1'),(110,'2022-02-24 13:37:53','1'),(111,'2022-02-24 13:39:34','1'),(112,'2022-02-24 20:42:34','1'),(113,'2022-02-27 22:06:08','1'),(114,'2022-02-27 22:58:34','1'),(115,'2022-02-28 10:08:40','1'),(116,'2022-02-28 10:24:30','1'),(117,'2022-02-28 10:38:44','1'),(118,'2022-02-28 11:06:33','1'),(119,'2022-02-28 11:10:49','1'),(120,'2022-03-01 20:14:53','1'),(121,'2022-03-01 20:27:01','1'),(122,'2022-03-01 20:29:31','1'),(123,'2022-03-01 20:37:04','1'),(124,'2022-03-01 20:56:15','1'),(125,'2022-03-01 20:58:52','1');
/*!40000 ALTER TABLE `connection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `articleid` int NOT NULL,
  `userid` int NOT NULL,
  PRIMARY KEY (`id`,`articleid`,`userid`),
  KEY `fk_article_has_user_user2_idx` (`userid`),
  KEY `fk_article_has_user_article2_idx` (`articleid`),
  CONSTRAINT `fk_article_has_user_article2` FOREIGN KEY (`articleid`) REFERENCES `article` (`id`),
  CONSTRAINT `fk_article_has_user_user2` FOREIGN KEY (`userid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log`
--

DROP TABLE IF EXISTS `log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userid` int NOT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log`
--

LOCK TABLES `log` WRITE;
/*!40000 ALTER TABLE `log` DISABLE KEYS */;
INSERT INTO `log` VALUES (1,3,'2022-03-23 12:04:02'),(2,3,'2022-03-23 12:08:04'),(3,3,'2022-03-24 09:25:55'),(4,13,'2022-03-24 09:32:43'),(5,8,'2022-03-24 09:44:04'),(6,13,'2022-03-24 10:05:56'),(7,3,'2022-03-25 10:32:14'),(8,3,'2022-03-25 10:32:20'),(9,3,'2022-03-25 15:09:36'),(10,3,'2022-03-25 15:19:13');
/*!40000 ALTER TABLE `log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(345) NOT NULL,
  `password` varchar(450) NOT NULL,
  `create_on` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `role` varchar(45) NOT NULL DEFAULT 'customer',
  `picture` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user-id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (3,'morad','tard','tard@mail.com','$2b$10$n/8cOMuO2x9aXph0OtgdMOCx0Fj56UzBqImWhuFPgNrO/wc7U2OHe','2022-03-07 11:37:32','customer',NULL),(7,'Jean','Dupond','test@mail.com','$2b$10$kX.s9Hj9sb2V.B4D2CiLfO9GC96Sn71pH2Mo7TBmqlCO3IqFiF6tm','2022-03-11 17:28:25','customer',NULL),(8,'pierre','marie','pierre@mail.com','$2b$10$VqODpROFyTkroBMyebkN3uRZ0IB/uYqV25OzriiykLMVMBERUzc7e','2022-03-11 18:08:02','customer',NULL),(13,'kobbe','bryant','kob@mail.com','$2b$10$EJxXrXpovMy5.B0zygJueuNH/1JP3WtNaw/KdhqEHhlk5awQ6/S4m','2022-03-22 19:25:48','Admin',NULL),(14,'jack','delan','delan@mail.com','$2b$10$M8Tgu4R0hNHIfKtXqvKvDOYAR21.Sz6NhEsnnpJ5tNbP0GMbAM41e','2022-03-23 09:01:55','customer',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-27 21:09:04
