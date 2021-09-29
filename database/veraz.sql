-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 28, 2021 at 11:19 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `veraz`
--

-- --------------------------------------------------------

--
-- Table structure for table `cliente`
--

CREATE TABLE `cliente` (
  `id_cliente` int(11) NOT NULL,
  `dni` int(8) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `apellido` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `direccion` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(150) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `cliente`
--

INSERT INTO `cliente` (`id_cliente`, `dni`, `nombre`, `apellido`, `direccion`, `telefono`, `correo`) VALUES
(1, 43488265, 'Bruno', 'Merino', 'Río Negro 972', '2996731008', 'brunoezequiel.merino@gmail.com'),
(6, 42943796, 'Agustín', 'Berruezo', 'Gascón 2231', '1550645698', 'aeberruezo@gmail.com'),
(7, 43488266, 'Ezequiel', 'Virumbrales', 'Río Negro 971', '2996731008', 'correo@gmail.com'),
(9, 18425721, 'Diego', 'Merino', 'Río Negro 971', '299556022', 'merino.diego@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `deuda`
--

CREATE TABLE `deuda` (
  `id_deuda` int(11) NOT NULL,
  `cliente` int(11) NOT NULL,
  `prestamista` varchar(11) COLLATE utf8_spanish_ci NOT NULL,
  `monto` int(11) NOT NULL,
  `fecha_Inicio` date DEFAULT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT 0,
  `fecha_Fin` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `deuda`
--

INSERT INTO `deuda` (`id_deuda`, `cliente`, `prestamista`, `monto`, `fecha_Inicio`, `estado`, `fecha_Fin`) VALUES
(7, 43488265, '20434882657', 200, '2021-09-27', 0, NULL),
(8, 43488265, '20434882657', 301, '2021-09-27', 1, '2021-09-28');

-- --------------------------------------------------------

--
-- Table structure for table `prestamista`
--

CREATE TABLE `prestamista` (
  `id_prestamista` int(11) NOT NULL,
  `cuil` varchar(11) COLLATE utf8_spanish_ci NOT NULL,
  `nombre_prestamista` text COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `prestamista`
--

INSERT INTO `prestamista` (`id_prestamista`, `cuil`, `nombre_prestamista`) VALUES
(1, '20434882657', 'Merino S.R.L.'),
(2, '20184257212', 'Diego S.R.L.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cliente`),
  ADD UNIQUE KEY `dni` (`dni`);

--
-- Indexes for table `deuda`
--
ALTER TABLE `deuda`
  ADD PRIMARY KEY (`id_deuda`),
  ADD KEY `cliente` (`cliente`),
  ADD KEY `prestamista` (`prestamista`);

--
-- Indexes for table `prestamista`
--
ALTER TABLE `prestamista`
  ADD PRIMARY KEY (`id_prestamista`),
  ADD KEY `cuil` (`cuil`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `deuda`
--
ALTER TABLE `deuda`
  MODIFY `id_deuda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `prestamista`
--
ALTER TABLE `prestamista`
  MODIFY `id_prestamista` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `deuda`
--
ALTER TABLE `deuda`
  ADD CONSTRAINT `deuda_ibfk_3` FOREIGN KEY (`cliente`) REFERENCES `cliente` (`dni`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
