

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
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
 SET character_set_client = utf8mb4 ;
CREATE TABLE `amministratori` (
  `id_amministratore_pk` int(11) NOT NULL AUTO_INCREMENT,
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
 SET character_set_client = utf8mb4 ;
CREATE TABLE `citta` (
  `id_citta_pk` int(11) NOT NULL AUTO_INCREMENT,
  `nome_citta` varchar(40) NOT NULL,
  PRIMARY KEY (`id_citta_pk`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `citta`
--

LOCK TABLES `citta` WRITE;
/*!40000 ALTER TABLE `citta` DISABLE KEYS */;
INSERT INTO `citta` VALUES (1,'roma'),(2,'palermo'),(3,'milano'),(4,'genova'),(5,'napoli'),(6,'firenze'),(7,'torino'),(8,'latina'),(9,'pisa'),(10,'venezia'),(11,'monza'),(12,'viterbo'),(13,'macerata'),(14,'rimini');
/*!40000 ALTER TABLE `citta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moderatori`
--

DROP TABLE IF EXISTS `moderatori`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `moderatori` (
  `id_moderatore_pk` int(11) NOT NULL AUTO_INCREMENT,
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
 SET character_set_client = utf8mb4 ;
CREATE TABLE `post` (
  `id_post_pk` int(11) NOT NULL AUTO_INCREMENT,
  `titolo_post` varchar(150) NOT NULL,
  `contenuto_post` text NOT NULL,
  `id_utente_fk` int(11) NOT NULL,
  `id_citta_fk` int(11) NOT NULL,
  PRIMARY KEY (`id_post_pk`),
  KEY `id_citta_fk` (`id_citta_fk`),
  KEY `id_utente_fk` (`id_utente_fk`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`id_citta_fk`) REFERENCES `citta` (`id_citta_pk`),
  CONSTRAINT `post_ibfk_2` FOREIGN KEY (`id_utente_fk`) REFERENCES `utenti` (`id_utente_pk`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'metro a chiusa per manutenzione straordianria','attenzione per tutta la settimana la metro a sarà chiusa per manutenzione straordinaria',1,1),(2,'rallentamenti in via genova','attenzione dalle 8.30 di stamattiana la viabilità è molto lenta in via genoava',5,13),(3,'serata karaoke','serata karaoke al bar del corso inizio 20.30',3,11);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `risposte`
--

DROP TABLE IF EXISTS `risposte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `risposte` (
  `id_risposta_pk` int(11) NOT NULL AUTO_INCREMENT,
  `contenuto_risposta` text NOT NULL,
  `id_post_fk` int(11) NOT NULL,
  `id_utente_fk` int(11) NOT NULL,
  PRIMARY KEY (`id_risposta_pk`),
  KEY `id_utente_fk` (`id_utente_fk`),
  KEY `id_post_fk` (`id_post_fk`),
  CONSTRAINT `risposte_ibfk_1` FOREIGN KEY (`id_utente_fk`) REFERENCES `utenti` (`id_utente_pk`),
  CONSTRAINT `risposte_ibfk_2` FOREIGN KEY (`id_post_fk`) REFERENCES `post` (`id_post_pk`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `risposte`
--

LOCK TABLES `risposte` WRITE;
/*!40000 ALTER TABLE `risposte` DISABLE KEYS */;
INSERT INTO `risposte` VALUES (1,'passando da via roma si scorre normalmente',2,12);
/*!40000 ALTER TABLE `risposte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `strike`
--

DROP TABLE IF EXISTS `strike`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `strike` (
  `id_strike_pk` int(11) NOT NULL AUTO_INCREMENT,
  `motivazione` text NOT NULL,
  `id_utente_fk` int(11) NOT NULL,
  `id_moderatore_fk` int(11) NOT NULL,
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
 SET character_set_client = utf8mb4 ;
CREATE TABLE `utenti` (
  `id_utente_pk` int(11) NOT NULL AUTO_INCREMENT,
  `nome_utente` varchar(45) NOT NULL,
  `mail_utente` varchar(320) NOT NULL,
  `password_utente` varchar(100) NOT NULL,
  `stato_utente` enum('attivo','bannato') NOT NULL DEFAULT 'attivo',
  `id_citta_fk` int(11) NOT NULL,
  PRIMARY KEY (`id_utente_pk`),
  KEY `id_citta_fk` (`id_citta_fk`),
  CONSTRAINT `utenti_ibfk_1` FOREIGN KEY (`id_citta_fk`) REFERENCES `citta` (`id_citta_pk`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utenti`
--

LOCK TABLES `utenti` WRITE;
/*!40000 ALTER TABLE `utenti` DISABLE KEYS */;
INSERT INTO `utenti` VALUES (1,'filippo02','filippo02@gmail.com','asdrth678','attivo',1),(2,'pietro99','pietro99@libero.it','weghjdlkj','attivo',13),(3,'giulia24','giulia24@outlook.it','hfncpkio4','attivo',11),(4,'marco332','marco332@gmail.com','asgh5569opo','attivo',2),(5,'claudia78','claudia78@outlook.it','ddgg87ujop09','attivo',6),(6,'fabio39','fabio39@libero.it','ahfknvb678iopf','attivo',10),(7,'andrea04','andrea04@gmail.com','ghytuoop56','attivo',12),(8,'andrea877','andrea877@gmail.com','ghjuoposh678','attivo',6),(9,'giuseppe133','giuseppe133@libero.it','gjkcnml57yu','attivo',5),(10,'fabrizio22','fabrizio22@gmail.com','ghjlp098bghj','attivo',3),(11,'sara4432','sara4432@gmail.com','fgalpweert56','attivo',14),(12,'martina98','martina98@libero.it','fmbvlop056ty','attivo',13),(13,'paola08','paola08@outlook.it','fnvxalrp0346hi','attivo',9),(14,'michele75','michele75@outlook.it','ascjuiope456mlop09','attivo',7),(15,'maurizio80','maurizio80@libero.it','fgrbzaqlopo456iu9','attivo',8),(16,'luca44','luca44@gmail.com','fvwpo9045ghj','attivo',4);
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

