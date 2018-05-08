-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 04, 2018 at 11:15 PM
-- Server version: 5.7.22-0ubuntu0.16.04.1
-- PHP Version: 7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baitapreact4`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` text NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `index` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`, `index`) VALUES
('12311', 'admin', '12345', 1),
('0.49762832978519456', 'danh', '12345', 59),
('0.2750445187790734', '123', '123', 60),
('0.1802065150627927', 'gg', 'gg', 61),
('0.7646749632104067', 'admin2', '123', 62);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` text NOT NULL,
  `username` text NOT NULL,
  `content` text NOT NULL,
  `countlike` int(11) NOT NULL,
  `index` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `username`, `content`, `countlike`, `index`) VALUES
('sggdfvg', 'danh', 'lap trinh redux', 36, 1),
('esyq64535', 'admin2', 'lap trinh php', 18, 2),
('regeg', 'dfd', 'ddfdgg', 15, 3),
('wfsdv', 'adfgf', 'fsd', 14, 4),
('0.7871702479079089', 'danh', 'hello', 5, 5),
('0.15947546359102752', 'danh', 'chÃºc má»«ng nÄƒm má»›i', 0, 6),
('0.8727892868898709', '123', 'hello', 0, 8),
('0.779553383383484', 'admin', 'rt', 0, 9),
('0.7613040197280273', 'admin', 'rt', 0, 10),
('0.6456781072967482', 'admin', '343', 0, 11),
('0.18787978048238882', 'admin', 'jhjh343', 0, 12),
('0.18736342171892842', 'admin', 'ff', 0, 13),
('0.6242751158999978', 'admin', 'fgfgrgrjgfjfvfhffvffgbgb', 0, 14),
('0.9295612116619584', 'gg', 'fvfv', 3, 20),
('0.7933646447894765', 'admin', 'jhhhjhjjh', 0, 22),
('0.8318512745498226', 'admin', 'hhhj', 0, 23),
('0.32767717198252416', 'admin', 'hhhjkjjkkj', 0, 24),
('0.25900481386017504', 'admin', 'fgff', 0, 25),
('0.46337582493515295', 'admin', 'jjhhj', 0, 26),
('0.1058884990456407', 'admin', 'admin', 0, 27);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`index`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `index` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `index` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
