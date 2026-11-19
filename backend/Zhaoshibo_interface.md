# 接口记录（按时间追加）

## 2026-11-19 | 新增 | 数据库连接测试接口
- 接口路径：/api/Zhaoshibo_database/test
- HTTP 方法：POST
- 请求参数（JSON）：
  ```json
  { "Zhaoshibo_username": "root", "Zhaoshibo_password": "123456" }
  ```
- 响应格式：
  ```json
  成功：{ "code": 0, "msg": "数据库连接成功", "data": { "host": "localhost", "database": "Zhaoshibo_db", "version": "9.2.0", "tableCount": 2 } }
  失败：{ "code": 2, "msg": "数据库连接失败：<错误信息>", "data": null }
  ```
- 修改时间：2026-11-19

## 2026-11-19 | 新增 | 科技新闻列表接口
- 接口路径：/api/Zhaoshibo_news
- HTTP 方法：GET
- 请求参数：无
- 响应格式：
  ```json
  {
    "code": 0,
    "msg": "获取新闻列表成功",
    "data": [
      {
        "Zhaoshibo_id": 1,
        "Zhaoshibo_title": "人工智能大模型进入多模态时代",
        "Zhaoshibo_category": "人工智能",
        "Zhaoshibo_content": "新一代大语言模型已具备理解图像、音频和视频的能力……",
        "Zhaoshibo_author": "科技观察员",
        "Zhaoshibo_publish_time": "2026-11-18T01:30:00.000Z"
      }
    ]
  }
  ```
- 修改时间：2026-11-19

## 2026-11-19 | 新增 | 图文列表接口
- 接口路径：/api/Zhaoshibo_gallery
- HTTP 方法：GET
- 请求参数：无
- 响应格式：
  ```json
  {
    "code": 0,
    "msg": "获取图文列表成功",
    "data": [
      {
        "Zhaoshibo_id": 1,
        "Zhaoshibo_title": "数据中心夜景",
        "Zhaoshibo_image_url": "https://picsum.photos/id/0/600/400",
        "Zhaoshibo_description": "云计算数据中心的机房内部……",
        "Zhaoshibo_created_at": "2026-11-18T02:00:00.000Z"
      }
    ]
  }
  ```
- 修改时间：2026-11-19
