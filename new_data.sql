-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-10-05 11:27:11
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidu_for_phone`
--

-- --------------------------------------------------------

--
-- 表的结构 `new_data`
--

CREATE TABLE `new_data` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `date` date NOT NULL,
  `image` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `type` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `new_data`
--

INSERT INTO `new_data` (`id`, `title`, `date`, `image`, `type`) VALUES
(30, '国行note7被曝四炸 机主：系官方标注安全版本', '2016-11-02', '1.JPEG', '推荐'),
(31, 'A股减持潮再度来袭 三季度十大减持王曝光', '2016-10-12', '2.JPG', '推荐'),
(32, '微信向左，QQ向右：腾讯的“双剑合璧”', '2016-11-02', '3.JPEG', '推荐'),
(33, '短租Airbnb酝酿大举入华，这次它能摆脱本土化', '2016-11-02', '4.JPEG', '百家'),
(34, '“时域·共生”-上海当代艺术十人展', '2016-11-02', '5.JPEG', '百家'),
(48, '德云社曹云金所晒发票1.4万相当现在多少钱', '2016-10-20', '6.JPEG', '百家'),
(54, '北京楼市还能火多久？是否还有投资的方向？', '2016-10-12', '7.JPEG', '本地'),
(55, '国庆假期北京市属医院急诊24小时全天候 各院门诊', '2016-10-20', '8.JPEG', '本地'),
(56, '阿里巴巴“诸神之战”全球选拔北京站技术性项目受到', '2016-10-18', '9.PNG', '本地');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `new_data`
--
ALTER TABLE `new_data`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `new_data`
--
ALTER TABLE `new_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
