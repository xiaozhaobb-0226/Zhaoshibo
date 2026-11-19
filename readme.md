# 全栈开发项目 — 科技资讯平台

姓名：赵士渤
学号：24001050205
时间：2026-11-19

## 项目简介
- 前端：原生 HTML / CSS / JavaScript（无第三方库、无 CDN）
- 后端：Node.js + Express（RESTful + MVC），端口 8205，接口前缀 /api/
- 数据库：MySQL
- 统一响应格式：{ "code": 0, "msg": "提示信息", "data": {...} }

## 目录结构
- frontend/  前端页面（css/ js/ fonts/ images/）
- backend/   后端服务（config/ models/ controllers/ routes/）

## 运行方式
1. 配置数据库连接：编辑 backend/.env
2. 双击根目录 run_backend.bat 启动后端（自动托管前端静态页面）
3. 浏览器访问 http://localhost:8205
