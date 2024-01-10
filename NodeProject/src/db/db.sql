
-- 1. Susikuriame keturias lenteles duomenų bazėje:
-- pets (id, name, dob, client_email, isArchived);
CREATE TABLE `pets` (
  `pet_id` int(11) UNSIGNED  NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `client_email` varchar(255) NOT NULL,
  `isArchived` boolean NOT NULL DEFAULT '0',
  PRIMARY KEY (`pet_id`)
) ENGINE=InnoDB;

-- logs (id, pet_id, description, status);
CREATE TABLE `logs` (
  `log_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `pet_id` int(11) UNSIGNED NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  PRIMARY KEY (`log_id`)
) ENGINE=InnoDB;

-- medications (id, name, description);
CREATE TABLE `medications` (
  `medication_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`medication_id`)
) ENGINE=InnoDB;

-- prescriptions (id, medication_id, pet_id, comment, timestamp).
CREATE TABLE `prescriptions` (
  `prescription_id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `medication_id` int(11) UNSIGNED NOT NULL,
  `pet_id` int(11) UNSIGNED NOT NULL,
  `comment` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`prescription_id`)
) ENGINE=InnoDB;

-- 2. Užpildome lenteles pradiniais duomenimis (creative and funnes names):
-- pets
INSERT INTO `pets` (`pet_id`, `name`, `dob`, `client_email`, `isArchived`) VALUES
(1, 'Rex', '2018-01-01', 'rexowner@gmail.com', 0),
(2, 'Garfield', '2016-05-01', 'garfieldwner@gmail.com', 0),
(3, 'Scooby', '2017-04-20', 'Scooby@gmail.com', 0),
(4, 'Snoopy', '2015-12-12', 'snoopy@gmail.com', 0),
(5, 'Lassie', '2019-08-13', 'lassie@gmail.com', 0);
