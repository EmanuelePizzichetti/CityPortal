

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
-- Table structure for table `amministratori`
--

DROP TABLE IF EXISTS `amministratori`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `amministratori` (
  `id_amministratore_pk` int NOT NULL AUTO_INCREMENT,
  `nome_amministratore` varchar(50) NOT NULL,
  `password_amministratore` varchar(100) NOT NULL,
  PRIMARY KEY (`id_amministratore_pk`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `amministratori`
--

LOCK TABLES `amministratori` WRITE;
/*!40000 ALTER TABLE `amministratori` DISABLE KEYS */;
INSERT INTO `amministratori` VALUES (1,'admin_laura21','hjopdrews5641mnf'),(2,'admin_giorgio27','ghewbu890trf');
/*!40000 ALTER TABLE `amministratori` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `citta`
--

DROP TABLE IF EXISTS `citta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `citta` (
  `id_citta_pk` int NOT NULL AUTO_INCREMENT,
  `nome_citta` varchar(40) NOT NULL,
  PRIMARY KEY (`id_citta_pk`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `citta`
--

LOCK TABLES `citta` WRITE;
/*!40000 ALTER TABLE `citta` DISABLE KEYS */;
INSERT INTO `citta` VALUES (1,'roma'),(2,'palermo'),(3,'milano'),(4,'genova'),(5,'napoli'),(6,'firenze'),(7,'torino'),(8,'latina'),(9,'pisa'),(10,'venezia'),(11,'monza'),(12,'viterbo'),(13,'macerata'),(14,'rimini'),(15,'frosinone');
/*!40000 ALTER TABLE `citta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moderatori`
--

DROP TABLE IF EXISTS `moderatori`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moderatori` (
  `id_moderatore_pk` int NOT NULL AUTO_INCREMENT,
  `nome_moderatore` varchar(50) NOT NULL,
  `password_moderatore` varchar(100) NOT NULL,
  PRIMARY KEY (`id_moderatore_pk`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moderatori`
--

LOCK TABLES `moderatori` WRITE;
/*!40000 ALTER TABLE `moderatori` DISABLE KEYS */;
INSERT INTO `moderatori` VALUES (1,'mod_paolo45','odhggjso567pkh'),(2,'mod_mario87','jgerwqas76230plfgd');
/*!40000 ALTER TABLE `moderatori` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id_post_pk` int NOT NULL AUTO_INCREMENT,
  `titolo_post` varchar(150) NOT NULL,
  `contenuto_post` text NOT NULL,
  `id_utente_fk` int NOT NULL,
  `id_citta_fk` int NOT NULL,
  PRIMARY KEY (`id_post_pk`),
  KEY `id_citta_fk` (`id_citta_fk`),
  KEY `id_utente_fk` (`id_utente_fk`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`id_citta_fk`) REFERENCES `citta` (`id_citta_pk`),
  CONSTRAINT `post_ibfk_2` FOREIGN KEY (`id_utente_fk`) REFERENCES `utenti` (`id_utente_pk`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (16,'Rallentamenti in Via Genova','Ci sono rallentamenti in Via Genova per lavori in corso',19,1),(18,'Lezioni di chitarra','Lezioni di chitarra a Palermo, se interessati contattatemi tramite mail all\'indirizzo pietro99@libero.it',23,2),(19,'Concerto di beneficenza','Concerto di musica classica all\' auditorium Giuseppe Verdi, venerdì alle 21.00, il ricavato verrà devoluto in beneficenza',21,10),(20,'Metro A chiusa per manutenzione straordinaria','Attenzione per tutta la settimana la metro A sarà chiusa per manutenzione straordinaria',30,3),(21,'Domenica visite gratuite al Colosseo','Per chiunque volesse visitare il Colosseo, domenica è aperto gratuitamente ai visitatori',22,1),(22,'Serata karaoke','Serata karaoke al bar del corso, inizio 20.30',26,8);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `risposte`
--

DROP TABLE IF EXISTS `risposte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `risposte` (
  `id_risposta_pk` int NOT NULL AUTO_INCREMENT,
  `contenuto_risposta` text NOT NULL,
  `id_post_fk` int NOT NULL,
  `id_utente_fk` int NOT NULL,
  PRIMARY KEY (`id_risposta_pk`),
  KEY `id_utente_fk` (`id_utente_fk`),
  KEY `id_post_fk` (`id_post_fk`),
  CONSTRAINT `risposte_ibfk_1` FOREIGN KEY (`id_utente_fk`) REFERENCES `utenti` (`id_utente_pk`),
  CONSTRAINT `risposte_ibfk_2` FOREIGN KEY (`id_post_fk`) REFERENCES `post` (`id_post_pk`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `risposte`
--

LOCK TABLES `risposte` WRITE;
/*!40000 ALTER TABLE `risposte` DISABLE KEYS */;
INSERT INTO `risposte` VALUES (4,'Passando da Via Roma si scorre normalmente',16,22),(5,'Attenzione, l\'ingresso è gratuito solo per la mattina',21,35),(6,'Che io sappia l\'ingresso è gratuito anche la domenica successiva',21,19);
/*!40000 ALTER TABLE `risposte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `strike`
--

DROP TABLE IF EXISTS `strike`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `strike` (
  `id_strike_pk` int NOT NULL AUTO_INCREMENT,
  `motivazione` text NOT NULL,
  `id_utente_fk` int NOT NULL,
  `id_moderatore_fk` int NOT NULL,
  PRIMARY KEY (`id_strike_pk`),
  KEY `id_utente_fk` (`id_utente_fk`),
  KEY `id_moderatore_fk` (`id_moderatore_fk`),
  CONSTRAINT `strike_ibfk_1` FOREIGN KEY (`id_utente_fk`) REFERENCES `utenti` (`id_utente_pk`),
  CONSTRAINT `strike_ibfk_2` FOREIGN KEY (`id_moderatore_fk`) REFERENCES `moderatori` (`id_moderatore_pk`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `strike`
--

LOCK TABLES `strike` WRITE;
/*!40000 ALTER TABLE `strike` DISABLE KEYS */;
/*!40000 ALTER TABLE `strike` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utenti`
--

DROP TABLE IF EXISTS `utenti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utenti` (
  `id_utente_pk` int NOT NULL AUTO_INCREMENT,
  `nome_utente` varchar(45) NOT NULL,
  `mail_utente` varchar(320) NOT NULL,
  `password_utente` varchar(100) NOT NULL,
  `stato_utente` enum('attivo','bannato') NOT NULL DEFAULT 'attivo',
  `id_citta_fk` int NOT NULL,
  PRIMARY KEY (`id_utente_pk`),
  KEY `id_citta_fk` (`id_citta_fk`),
  CONSTRAINT `utenti_ibfk_1` FOREIGN KEY (`id_citta_fk`) REFERENCES `citta` (`id_citta_pk`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utenti`
--

LOCK TABLES `utenti` WRITE;
/*!40000 ALTER TABLE `utenti` DISABLE KEYS */;
INSERT INTO `utenti` VALUES (19,'LorenzoBianchi91','lorenzo.bianchi@gmail.com','$2b$10$us1cdsInWfZekmfJXV8C2uL9ZbITMTd8Qlo1enx4.pVoqISzfAq7O','attivo',1),(20,'andrea977','andrea977@libero.it','$2b$10$Nhdj/cslYq3nX2UWNsraxelSXphcS4tLdhmDg9agJySeoKmE/nwb6','attivo',13),(21,'maria_neri47','marianeri@gmail.com','$2b$10$lsfAX5M4iDUcFDzA1o6QGOGqR0AQY.iJE7FVOUGhAIkfyl7N5U43O','attivo',10),(22,'filippo02','filippo02@outlook.it','$2b$10$ph40qR877whpv8Mgmlcm/.6KpzHpbN9T8PUWNbuH63asZyRsC6.O.','attivo',1),(23,'pietro99','pietro99@libero.it','$2b$10$YDdAVDc84s5UofedmYpsAet385m2s1Xbdp63onzNgPq.SmR/pCxyq','attivo',2),(24,'giulia24','giulia24@outlook.it','$2b$10$p13GznR/jp.4A.9eWhPXTOb6b1OjRUuSD2jrp4fNs5O.BZoG8M1A6','attivo',9),(25,'marco332','marco332@gmail.com','$2b$10$0VH7911P37d1qwVhmh1sWuL2B5Kopb6b5h7vcfhlN0utt5oKoyLP6','attivo',11),(26,'claudia78','claudia78@outlook.it','$2b$10$3/ZdZdaB0m7dJrFdmD.gNe50gwgQ3IOuRc.JBGqrGxcjZ6i1cfxjK','attivo',8),(27,'fabio39','fabio39@libero.it','$2b$10$djycispVRH68IX4WhyWCK.VC.2rhSVm1COsWAFGlEQoGRE56Fu1mW','attivo',6),(28,'andrea04','andrea04@gmail.com','$2b$10$K1/eoeSsBNuMWmi1UtBE9.BIEI/Q4O.gJMakosprOusX9ownPs.xu','attivo',5),(29,'andrea877','andrea877@gmail.com','$2b$10$2XGibndHPMWolJHNhJWfDe8PlBRzoI4l/wzXfB.4aj7W1.YCZF40K','attivo',4),(30,'giuseppe133','giuseppe133@libero.it','$2b$10$RPDETUAMCldG6RXdWjxBZe1kxOnuJ6XdP9O6mzAEqq26o.PZkI4QS','attivo',3),(31,'fabrizio22','fabrizio22@gmail.com','$2b$10$adNht9UNfn3uxvXIiYIZyuOIFZ/OEEfORpU2im7./FcDOxPKxI4IC','attivo',12),(32,'sara4432','sara4432@gmail.com','$2b$10$wcU45yQhYEpjbeY24s1lUuZ.XvpLlGUIl/RVuENtA701MLFkT7x/2','attivo',7),(33,'martina98','martina98@libero.it','$2b$10$X8z01qHLlWzXnlJRMY6Re.ZvFHu0OH.PkymbLWalH5Y3AB7Ysr.Xe','attivo',14),(34,'paola08','paola08@outlook.it','$2b$10$qXxwlSNuQl0Mh6F7x7iQE.f6Ro6tR/FZYSZgAmQpWBdB.hZpQ.ZEK','attivo',15),(35,'MarcoRossi97','marco.rossi@gmail.com','$2b$10$5ZHezFzE.YTr5pecSHIDhOL.aHlPJ53hYgwnKiiD3HJbvK5xyAdn2','attivo',1);
/*!40000 ALTER TABLE `utenti` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

