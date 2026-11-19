/*
 * 姓名：赵士渤 | 学号：24001050205 | 时间：2026-11-19 | 大模型：Auto
 * 数据库控制器：测试 MySQL 连接（凭据由前端页面提交）
 */
const mysql = require('mysql2/promise');
require('dotenv').config();

// POST /api/Zhaoshibo_database/test  body: { Zhaoshibo_username, Zhaoshibo_password }
async function ZhaoshiboTestConnection(req, res) {
  const { Zhaoshibo_username, Zhaoshibo_password } = req.body || {};

  if (!Zhaoshibo_username) {
    return res.json({ code: 1, msg: '用户名不能为空', data: null });
  }

  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: Zhaoshibo_username,
      password: Zhaoshibo_password || '',
      database: process.env.DB_NAME || 'Zhaoshibo_db',
      connectTimeout: 5000
    });
    const [rows] = await conn.query('SELECT VERSION() AS version');
    const [tables] = await conn.query('SHOW TABLES');
    await conn.end();

    res.json({
      code: 0,
      msg: '数据库连接成功',
      data: {
        host: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME || 'Zhaoshibo_db',
        version: rows[0].version,
        tableCount: tables.length
      }
    });
  } catch (err) {
    console.error('[Zhaoshibo] db test error:', err.message);
    res.json({ code: 2, msg: '数据库连接失败：' + err.message, data: null });
  }
}

module.exports = { ZhaoshiboTestConnection };
