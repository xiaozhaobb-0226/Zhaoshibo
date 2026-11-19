/*
 * 姓名：赵士渤 | 学号：24001050205 | 时间：2026-11-19 | 大模型：Auto
 * 路由汇总：所有接口以 /api/ 为前缀
 */
const express = require('express');
const router = express.Router();

const ZhaoshiboDatabaseCtrl = require('../controllers/Zhaoshibo_database.controller');
const ZhaoshiboNewsCtrl = require('../controllers/Zhaoshibo_news.controller');
const ZhaoshiboGalleryCtrl = require('../controllers/Zhaoshibo_gallery.controller');

// 数据库连接测试
router.post('/Zhaoshibo_database/test', ZhaoshiboDatabaseCtrl.ZhaoshiboTestConnection);

// 科技新闻列表
router.get('/Zhaoshibo_news', ZhaoshiboNewsCtrl.ZhaoshiboGetNews);

// 图文列表
router.get('/Zhaoshibo_gallery', ZhaoshiboGalleryCtrl.ZhaoshiboGetGallery);

module.exports = router;
