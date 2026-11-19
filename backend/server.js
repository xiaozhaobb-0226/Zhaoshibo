/*
 * 姓名：赵士渤 | 学号：24001050205 | 时间：2026-11-19 | 大模型：Auto
 * 后端入口：Express 服务，端口 8205，托管 frontend/ 静态资源，允许所有跨域
 */
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const ZhaoshiboRoutes = require('./routes/Zhaoshibo_index.routes');

const app = express();
const ZhaoshiboPort = process.env.ZHAOSHIBO_PORT || 8205;

// 允许所有跨域访问
app.use(cors());

// 解析 JSON 与表单请求体
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 托管前端静态目录
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// /api/ 路由
app.use('/api', ZhaoshiboRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ code: 404, msg: '接口不存在', data: null });
});

// 统一错误处理
app.use((err, req, res, next) => {
  console.error('[Zhaoshibo] server error:', err.message);
  res.status(500).json({ code: 500, msg: '服务器内部错误：' + err.message, data: null });
});

app.listen(ZhaoshiboPort, () => {
  console.log(`[Zhaoshibo] server running at http://localhost:${ZhaoshiboPort}`);
});
