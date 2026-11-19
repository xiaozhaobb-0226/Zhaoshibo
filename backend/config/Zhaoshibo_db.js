/*
 * 姓名：赵士渤 | 学号：24001050205 | 时间：2026-11-19 | 大模型：Auto
 * 数据库连接池配置（凭据来自 .env，禁止硬编码在代码中）
 */
const mysql = require('mysql2/promise');
require('dotenv').config();

const ZhaoshiboPool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'Zhaoshibo_db',
  waitForConnections: true,
  connectionLimit: 10,
  charset: 'utf8mb4'
});

module.exports = ZhaoshiboPool;
