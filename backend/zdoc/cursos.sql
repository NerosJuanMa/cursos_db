-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 07-01-2026 a las 14:19:58
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cursos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apuntes`
--

CREATE TABLE `apuntes` (
  `id_apunte` int(11) NOT NULL,
  `id_curso` int(11) DEFAULT NULL,
  `modulo` varchar(10) DEFAULT NULL,
  `unidad_formativa` varchar(10) DEFAULT NULL,
  `tema` varchar(50) DEFAULT NULL,
  `pdf` longblob DEFAULT NULL,
  `resumen` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `id_curso` int(11) NOT NULL,
  `id_especialidad` int(11) DEFAULT NULL,
  `nombre_curso` varchar(150) DEFAULT NULL,
  `fecha_realizacion` varchar(50) DEFAULT NULL,
  `FechaCalculadaAño` year(4) DEFAULT NULL,
  `practicas` tinyint(1) DEFAULT NULL,
  `id_practicas` int(11) DEFAULT NULL,
  `duracion_curso` varchar(50) DEFAULT NULL,
  `conocimientos_adquiridos` varchar(500) DEFAULT NULL,
  `Centro_Estudio` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`id_curso`, `id_especialidad`, `nombre_curso`, `fecha_realizacion`, `FechaCalculadaAño`, `practicas`, `id_practicas`, `duracion_curso`, `conocimientos_adquiridos`, `Centro_Estudio`) VALUES
(1, 2, 'Técnico en Ofimática', 'JUL. 1999', '1999', 0, NULL, '184 horas', NULL, 'Instituto Informático Hispalense'),
(2, 3, 'TÉCNICO EN EQUIPOS INFORMÁTICOS', 'JUN. 2001 ', '2001', 0, NULL, '171 horas', NULL, 'Instituto Informático Hispalense'),
(3, 4, 'TECNICO AUXILIAR DE DISEÑO GRAFICO', 'OCT.03- MAY.04', '2004', 0, NULL, '630 horas.', 'Diseño gráfico, composición, reproducción gráfica, ilustración', 'B.C. PROYECTOS Y SISTEMAS DE CONTROL, S.C.'),
(4, 4, 'DISEÑO DE PAGINAS WEB', 'ENE.- ABR. 2005 ', '2005', 0, NULL, '300 horas', 'Diseño multimedia', 'ACADEMIA E.A.I.G'),
(7, 5, 'TRÁMITES DE CONSTITUCIÓN DEL EMPRESARIO INDIVIDUAL', 'JUN. 2005', '2005', 0, NULL, '8 horas ', 'Pequeña empresa e iniciativa emprendedora ', 'FUNDACIÓN FORJA XXI'),
(8, 5, 'DERECHOS Y OBLIGACIONES, CONTROL DE INGRESOS Y GASTOS DEL EMPRESARIO INDIVIDUAL', 'JUN. 2005', '2005', 0, NULL, '6 horas', 'Pequeña empresa e iniciativa emprendedora ', 'FUNDACIÓN FORJA XXI'),
(9, 1, 'F.P.E. PROGRAMACION PARA SOLUCIONES DE IOT Y SMART CITY APLICABLES A ENTORNOS 5G, (IFCD97)', 'MAY. 2023 — JUN. 2023', '2023', 0, NULL, '150 horas.', 'Formación en tecnología 5G', ' VODAFONE ESPAÑA & INTEGRA CONOCIMIENT');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas`
--

CREATE TABLE `empresas` (
  `id_empresa` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `ubicacion` varchar(50) DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  `web` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `persona_contacto` varchar(50) DEFAULT NULL,
  `mobil_contacto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empresas`
--

INSERT INTO `empresas` (`id_empresa`, `nombre`, `ubicacion`, `telefono`, `web`, `email`, `persona_contacto`, `mobil_contacto`) VALUES
(1, 'Laybet', 'Sevilla', NULL, NULL, NULL, 'Laybet Colmenares', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `especialidad`
--

CREATE TABLE `especialidad` (
  `id_especialidad` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `familia` varchar(50) DEFAULT NULL,
  `aplicaciones` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `especialidad`
--

INSERT INTO `especialidad` (`id_especialidad`, `nombre`, `familia`, `aplicaciones`) VALUES
(1, '5G', 'Informatica', NULL),
(2, 'Ofimatica', 'Administracion', 'Escribir cartas, etc.'),
(3, 'Tecnico Hardware', 'Informatica', NULL),
(4, 'Diseño Gráfico', 'Diseño', NULL),
(5, 'Empresa', 'Administracion', 'Creacion de empresa, tramites, decrechos y obligaciones');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `likes`
--

CREATE TABLE `likes` (
  `id` int(11) NOT NULL,
  `page_id` varchar(255) NOT NULL,
  `user_ip` varchar(45) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `likes`
--

INSERT INTO `likes` (`id`, `page_id`, `user_ip`, `created_at`) VALUES
(9, 'mi_pagina_unica', '::1', '2026-01-07 11:21:47');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `practicas`
--

CREATE TABLE `practicas` (
  `id_practica` int(11) NOT NULL,
  `id_empresa` int(11) NOT NULL,
  `duracion` varchar(10) DEFAULT NULL,
  `feed-back` text DEFAULT NULL,
  `aptitudes_adquiridas` text DEFAULT NULL,
  `observaciones` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `pasword` varchar(50) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `activo` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `nombre`, `email`, `pasword`, `fecha_nacimiento`, `activo`) VALUES
(1, 'admin', 'jmmudarra@gmail.com', '28640522w', '1979-04-09', 1),
(2, 'invitado', 'invitado@example.es', '', '0000-00-00', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `apuntes`
--
ALTER TABLE `apuntes`
  ADD PRIMARY KEY (`id_apunte`),
  ADD KEY `FK_id_curso` (`id_curso`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id_curso`),
  ADD KEY `FK_id_especialidad_idx` (`id_especialidad`),
  ADD KEY `FK_id_practicas_idx` (`id_practicas`);

--
-- Indices de la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`id_empresa`);

--
-- Indices de la tabla `especialidad`
--
ALTER TABLE `especialidad`
  ADD PRIMARY KEY (`id_especialidad`);

--
-- Indices de la tabla `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `page_id` (`page_id`,`user_ip`);

--
-- Indices de la tabla `practicas`
--
ALTER TABLE `practicas`
  ADD PRIMARY KEY (`id_practica`),
  ADD KEY `FK_id_empresa_idx` (`id_empresa`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `apuntes`
--
ALTER TABLE `apuntes`
  MODIFY `id_apunte` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id_curso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `empresas`
--
ALTER TABLE `empresas`
  MODIFY `id_empresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `especialidad`
--
ALTER TABLE `especialidad`
  MODIFY `id_especialidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `practicas`
--
ALTER TABLE `practicas`
  MODIFY `id_practica` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `apuntes`
--
ALTER TABLE `apuntes`
  ADD CONSTRAINT `FK_id_curso` FOREIGN KEY (`id_curso`) REFERENCES `cursos` (`id_curso`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD CONSTRAINT `FK_id_especialidad` FOREIGN KEY (`id_especialidad`) REFERENCES `especialidad` (`id_especialidad`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_id_practicas` FOREIGN KEY (`id_practicas`) REFERENCES `practicas` (`id_practica`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `practicas`
--
ALTER TABLE `practicas`
  ADD CONSTRAINT `FK_id_empresa` FOREIGN KEY (`id_empresa`) REFERENCES `empresas` (`id_empresa`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
