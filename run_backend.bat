@echo off
rem 姓名：赵士渤 | 学号：24001050205 | 时间：2026-11-19 | 大模型：Auto
title Zhaoshibo backend server
cd /d %~dp0backend
echo Starting backend server on port 8205 ...
node server.js
pause
