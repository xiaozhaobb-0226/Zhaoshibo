/*
 * 姓名：赵士渤 | 学号：24001050205 | 时间：2026-11-19 | 大模型：Auto
 * 图文模型：操作 Zhaoshibo_gallery 表
 */
const ZhaoshiboPool = require('../config/Zhaoshibo_db');

// 查询全部图文，按创建时间倒序
async function ZhaoshiboFindAllGallery() {
  const sql = 'SELECT * FROM Zhaoshibo_gallery ORDER BY Zhaoshibo_created_at DESC';
  const [rows] = await ZhaoshiboPool.query(sql);
  return rows;
}

module.exports = { ZhaoshiboFindAllGallery };
