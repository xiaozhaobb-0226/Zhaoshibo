/*
 * 姓名：赵士渤 | 学号：24001050205 | 时间：2026-11-19 | 大模型：Auto
 * 新闻控制器：科技新闻列表接口
 */
const ZhaoshiboNewsModel = require('../models/Zhaoshibo_news.model');

// GET /api/Zhaoshibo_news 获取全部科技新闻
async function ZhaoshiboGetNews(req, res) {
  try {
    const rows = await ZhaoshiboNewsModel.ZhaoshiboFindAllNews();
    res.json({ code: 0, msg: '获取新闻列表成功', data: rows });
  } catch (err) {
    console.error('[Zhaoshibo] get news error:', err.message);
    res.json({ code: 1, msg: '获取新闻列表失败：' + err.message, data: null });
  }
}

module.exports = { ZhaoshiboGetNews };
