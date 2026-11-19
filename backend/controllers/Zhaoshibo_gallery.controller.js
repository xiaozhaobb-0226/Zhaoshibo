/*
 * 姓名：赵士渤 | 学号：24001050205 | 时间：2026-11-19 | 大模型：Auto
 * 图文控制器：图文列表接口
 */
const ZhaoshiboGalleryModel = require('../models/Zhaoshibo_gallery.model');

// GET /api/Zhaoshibo_gallery 获取全部图文
async function ZhaoshiboGetGallery(req, res) {
  try {
    const rows = await ZhaoshiboGalleryModel.ZhaoshiboFindAllGallery();
    res.json({ code: 0, msg: '获取图文列表成功', data: rows });
  } catch (err) {
    console.error('[Zhaoshibo] get gallery error:', err.message);
    res.json({ code: 1, msg: '获取图文列表失败：' + err.message, data: null });
  }
}

module.exports = { ZhaoshiboGetGallery };
