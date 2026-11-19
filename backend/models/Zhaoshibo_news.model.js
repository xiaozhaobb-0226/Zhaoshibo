/*
 * 姓名：赵士渤 | 学号：24001050205 | 时间：2026-11-19 | 大模型：Auto
 * 新闻模型：操作 Zhaoshibo_news 表
 */
const ZhaoshiboPool = require('../config/Zhaoshibo_db');

// 查询全部新闻，按发布时间倒序
async function ZhaoshiboFindAllNews() {
  const sql = 'SELECT * FROM Zhaoshibo_news ORDER BY Zhaoshibo_publish_time DESC';
  const [rows] = await ZhaoshiboPool.query(sql);
  return rows;
}

module.exports = { ZhaoshiboFindAllNews };
