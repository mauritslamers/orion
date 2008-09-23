# CocoaMySQL dump
# Version 0.7b5
# http://cocoamysql.sourceforge.net
#
# Host: localhost (MySQL 5.0.37)
# Database: toelatingsexamen
# Generation Time: 2008-09-22 21:54:22 +0200
# ************************************************************

# Dump of table adviezen
# ------------------------------------------------------------

DROP TABLE IF EXISTS `adviezen`;

CREATE TABLE `adviezen` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(200) default NULL,
  `year` int(11) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;



# Dump of table conclusies
# ------------------------------------------------------------

DROP TABLE IF EXISTS `conclusies`;

CREATE TABLE `conclusies` (
  `id` int(11) NOT NULL auto_increment,
  `name` varchar(200) default NULL,
  `year` int(11) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;

INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('1','Mogelijke kandidaat','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('2','Niet toegelaten','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('3','Niet geweest','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('4','Bespreekgeval','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('5','BO/AD','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('6','BO/SD','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('7','BO/Compositie','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('8','BO/MP&P(f)/MT&P(f)','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('9','BO/C&MP/C&MT','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('10','BO/C&SD for AS','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('11','Prop AD','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('12','Prop AD voorwaardelijk','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('13','Prop CvM ','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('14','Prop CvM voorwaardelijk','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('15','Prop CEM','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('16','Prop CEM voorwaardelijk','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('17','Prop C&MP','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('18','Prop C&MP voorwaardelijk','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('19','Prop C&MT','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('20','Prop C&MT voorwaardelijk','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('21','Prop C&SD for AS','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('22','Prop C&SD for AS voorwaardelijk','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('23','Prop MP&P(f)','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('24','Prop MP&P(f) voorwaardelijk','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('25','Prop MT&P(f) ','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('26','Prop MT&P(f) voorwaardelijk','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('27','Prop SD','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('28','Prop SD voorwaardelijk','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('29','Wachtlijst AD','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('30','Wachtlijst SD','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('31','Wachtlijst C&MP','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('32','Wachtlijst C&MT','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('33','Toegelaten tot hogere jaar Muziek','2008');
INSERT INTO `conclusies` (`id`,`name`,`year`) VALUES ('34','Toegelaten tot hogere jaar Kunst&Techniek','2008');


# Dump of table docenten
# ------------------------------------------------------------

DROP TABLE IF EXISTS `docenten`;

CREATE TABLE `docenten` (
  `id` int(11) NOT NULL auto_increment,
  `username` varchar(30) default NULL,
  `firstname` varchar(100) default NULL,
  `inbetween` varchar(15) default NULL,
  `lastname` varchar(100) default NULL,
  `email` varchar(100) default NULL,
  `orion_user_id` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;



# Dump of table examens
# ------------------------------------------------------------

DROP TABLE IF EXISTS `examens`;

CREATE TABLE `examens` (
  `id` int(11) NOT NULL auto_increment,
  `kandidaat_id` int(11) default NULL,
  `datum` date default NULL,
  `drive_ambitie` tinyint(4) default NULL,
  `realistisch_beeld` tinyint(4) default NULL,
  `geloofwaardigheid` tinyint(4) default NULL,
  `muzikale_ervaring` tinyint(4) default NULL,
  `technologische_ervaring` tinyint(4) default NULL,
  `productionele_ervaring` tinyint(4) default NULL,
  `muzikaliteit` tinyint(4) default NULL,
  `productie_niveau` tinyint(4) default NULL,
  `technologie_niveau` tinyint(4) default NULL,
  `conclusie_id` int(11) default NULL,
  `opmerkingen_intern` text,
  `performance_ervaring` tinyint(4) default NULL,
  `spelniveau` tinyint(4) default NULL,
  `ensemble_ervaring` tinyint(4) default NULL,
  `van_blad_lezen` tinyint(4) default NULL,
  `improviseren` tinyint(4) default NULL,
  `samen_spelen` tinyint(4) default NULL,
  `geschiktheid_voor_performance` tinyint(4) default NULL,
  `intervallen_dictee` int(11) default NULL,
  `ritme_dictee` int(11) default NULL,
  `melodisch_dictee` int(11) default NULL,
  `accoorden_dictee` int(11) default NULL,
  `instrumenten_dictee` int(11) default NULL,
  `interval_notatie` int(11) default NULL,
  `accoord_notatie` int(11) default NULL,
  `algemene_muziekleer` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;



# Dump of table examens_adviezen
# ------------------------------------------------------------

DROP TABLE IF EXISTS `examens_adviezen`;

CREATE TABLE `examens_adviezen` (
  `id` int(11) NOT NULL auto_increment,
  `examen_id` int(11) default NULL,
  `advies_id` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;



# Dump of table examens_docenten
# ------------------------------------------------------------

DROP TABLE IF EXISTS `examens_docenten`;

CREATE TABLE `examens_docenten` (
  `id` int(11) NOT NULL auto_increment,
  `examen_id` int(11) default NULL,
  `docent_id` int(11) default NULL,
  `functie_docent` int(11) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;



# Dump of table kandidaten
# ------------------------------------------------------------

DROP TABLE IF EXISTS `kandidaten`;

CREATE TABLE `kandidaten` (
  `id` int(11) NOT NULL auto_increment,
  `firstname` varchar(100) default NULL,
  `inbetween` varchar(30) default NULL,
  `lastname` varchar(100) default NULL,
  `adres` varchar(100) default NULL,
  `postcode` varchar(6) default NULL,
  `woonplaats` varchar(100) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;



