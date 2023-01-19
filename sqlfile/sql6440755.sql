-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql6.freemysqlhosting.net
-- Generation Time: Sep 28, 2021 at 05:45 PM
-- Server version: 5.5.62-0ubuntu0.14.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql6440755`
--

-- --------------------------------------------------------

--
-- Table structure for table `amenties`
--

CREATE TABLE `amenties` (
  `amenties_id` int(11) NOT NULL,
  `economic_url` varchar(255) DEFAULT NULL,
  `economic_intro` text,
  `education_url` varchar(255) DEFAULT NULL,
  `ecucation_intro` text,
  `beauty_url` varchar(255) DEFAULT NULL,
  `beauty_intro` text,
  `service_url` varchar(255) DEFAULT NULL,
  `service_intro` text,
  `health_url` varchar(255) DEFAULT NULL,
  `health_intro` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `amenties`
--

INSERT INTO `amenties` (`amenties_id`, `economic_url`, `economic_intro`, `education_url`, `ecucation_intro`, `beauty_url`, `beauty_intro`, `service_url`, `service_intro`, `health_url`, `health_intro`) VALUES
(1, 'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3', 'We strive to bring about excellence in the field, bringing and adding land all over the island for the convenience of our customer to ensure that all needs are met. Our projects are curated by professionals who look into every intricate detail.', 'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3', 'We strive to bring about excellence in the field, bringing and adding land all over the island for the convenience of our customer to ensure that all needs are met. Our projects are curated by professionals who look into every intricate detail.', 'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3', 'We strive to bring about excellence in the field, bringing and adding land all over the island for the convenience of our customer to ensure that all needs are met. Our projects are curated by professionals who look into every intricate detail.', 'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3', 'We strive to bring about excellence in the field, bringing and adding land all over the island for the convenience of our customer to ensure that all needs are met. Our projects are curated by professionals who look into every intricate detail.', 'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3', 'We strive to bring about excellence in the field, bringing and adding land all over the island for the convenience of our customer to ensure that all needs are met. Our projects are curated by professionals who look into every intricate detail.');

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `blog_id` int(11) NOT NULL,
  `title` text,
  `image_path` varchar(255) DEFAULT NULL,
  `alt` varchar(255) DEFAULT NULL,
  `editor_text` mediumblob,
  `blog_post_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer_details`
--

CREATE TABLE `customer_details` (
  `customer_id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer_details`
--

INSERT INTO `customer_details` (`customer_id`, `first_name`, `last_name`, `email`, `phone`) VALUES
(1, 'Rashmi', 'Shehana', 'rashmishehana@gmail.com', 778240756);

-- --------------------------------------------------------

--
-- Table structure for table `districts`
--

CREATE TABLE `districts` (
  `district_id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `province` varchar(20) DEFAULT NULL,
  `intro_title` text,
  `intro` text,
  `image_path` varchar(100) DEFAULT NULL,
  `button_url` varchar(200) DEFAULT NULL,
  `district_url` varchar(255) DEFAULT NULL,
  `meta_data` tinytext,
  `amenties_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `districts`
--

INSERT INTO `districts` (`district_id`, `name`, `province`, `intro_title`, `intro`, `image_path`, `button_url`, `district_url`, `meta_data`, `amenties_id`) VALUES
(1, 'Colombo', 'Western', 'home According to your wish', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer Lorem Ipsum is simply ', 'Rectangle_100', 'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3', 'colombo', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsuown printer Lorem Ipsum is simply ', 1);

-- --------------------------------------------------------

--
-- Table structure for table `district_city`
--

CREATE TABLE `district_city` (
  `district_id` int(11) NOT NULL,
  `city_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `district_city`
--

INSERT INTO `district_city` (`district_id`, `city_name`) VALUES
(1, 'Baththaramulla'),
(1, 'Malabe');

-- --------------------------------------------------------

--
-- Table structure for table `land`
--

CREATE TABLE `land` (
  `land_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(20) DEFAULT NULL,
  `district` varchar(50) DEFAULT NULL,
  `total_blocks` int(4) DEFAULT NULL,
  `city_name` varchar(100) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `image_path_1` varchar(100) DEFAULT NULL,
  `image_path_2` varchar(100) DEFAULT NULL,
  `image_path_3` varchar(100) DEFAULT NULL,
  `description` text,
  `province` varchar(50) DEFAULT NULL,
  `extent` int(20) DEFAULT NULL,
  `water` tinyint(1) DEFAULT NULL,
  `electricity` tinyint(1) DEFAULT NULL,
  `school` tinyint(1) DEFAULT NULL,
  `hospital` tinyint(1) DEFAULT NULL,
  `amenties_id` int(11) DEFAULT NULL,
  `button_url` varchar(100) DEFAULT NULL,
  `project_plan_image_path` varchar(100) DEFAULT NULL,
  `project_plan_intro` text,
  `location_lan` float DEFAULT NULL,
  `location_lat` float DEFAULT NULL,
  `project_url` varchar(100) DEFAULT NULL,
  `meta_data` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `land_proposal_land_info`
--

CREATE TABLE `land_proposal_land_info` (
  `land_proposal_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `district_id` int(10) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `zipcode` varchar(10) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `extend` int(10) DEFAULT NULL,
  `description` text,
  `proposal` text,
  `attachment_path` varchar(255) DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `land_proposal_land_info`
--

INSERT INTO `land_proposal_land_info` (`land_proposal_id`, `customer_id`, `district_id`, `city`, `zipcode`, `state`, `address`, `extend`, `description`, `proposal`, `attachment_path`, `is_read`) VALUES
(1, 1, 1, 'Malabe', '10115', 'Western', '852/3,Susithapura,Malabe', 200, 'Explanation about the block plan. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, Lorem Ipsum has been the industry\'s ', 'Explanation about the block plan. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, Lorem Ipsum has been the industry\'s ', '/some/path.pdf', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_messages`
--

CREATE TABLE `user_messages` (
  `message_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `subject` text,
  `message` text,
  `is_read` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_messages`
--

INSERT INTO `user_messages` (`message_id`, `customer_id`, `subject`, `message`, `is_read`) VALUES
(1, 1, 'It’s time to call', 'Explanation about the block plan. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, Lorem Ipsum has been the industry\'s ', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `amenties`
--
ALTER TABLE `amenties`
  ADD PRIMARY KEY (`amenties_id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`blog_id`);

--
-- Indexes for table `customer_details`
--
ALTER TABLE `customer_details`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `districts`
--
ALTER TABLE `districts`
  ADD PRIMARY KEY (`district_id`);

--
-- Indexes for table `district_city`
--
ALTER TABLE `district_city`
  ADD PRIMARY KEY (`district_id`,`city_name`);

--
-- Indexes for table `land`
--
ALTER TABLE `land`
  ADD PRIMARY KEY (`land_id`);

--
-- Indexes for table `land_proposal_land_info`
--
ALTER TABLE `land_proposal_land_info`
  ADD PRIMARY KEY (`land_proposal_id`);

--
-- Indexes for table `user_messages`
--
ALTER TABLE `user_messages`
  ADD PRIMARY KEY (`message_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `amenties`
--
ALTER TABLE `amenties`
  MODIFY `amenties_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `blog_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `customer_details`
--
ALTER TABLE `customer_details`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `districts`
--
ALTER TABLE `districts`
  MODIFY `district_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `district_city`
--
ALTER TABLE `district_city`
  MODIFY `district_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `land`
--
ALTER TABLE `land`
  MODIFY `land_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `land_proposal_land_info`
--
ALTER TABLE `land_proposal_land_info`
  MODIFY `land_proposal_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `user_messages`
--
ALTER TABLE `user_messages`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
