# 数据库操作记录（按执行顺序追加，仅凭本文件可在新机器上完整重建数据库）

## 2026-11-19 | 建库、建表、插入测试数据

-- 建库
CREATE DATABASE IF NOT EXISTS Zhaoshibo_db DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE Zhaoshibo_db;

-- 科技新闻表
CREATE TABLE IF NOT EXISTS Zhaoshibo_news (
  Zhaoshibo_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '新闻ID',
  Zhaoshibo_title VARCHAR(200) NOT NULL COMMENT '新闻标题',
  Zhaoshibo_category VARCHAR(50) NOT NULL COMMENT '新闻分类',
  Zhaoshibo_content TEXT NOT NULL COMMENT '新闻内容摘要',
  Zhaoshibo_author VARCHAR(50) NOT NULL COMMENT '新闻作者',
  Zhaoshibo_publish_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '发布时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='科技新闻表';

INSERT INTO Zhaoshibo_news (Zhaoshibo_title, Zhaoshibo_category, Zhaoshibo_content, Zhaoshibo_author, Zhaoshibo_publish_time) VALUES
('人工智能大模型进入多模态时代', '人工智能', '新一代大语言模型已具备理解图像、音频和视频的能力，多模态融合成为行业主流方向，应用落地速度显著加快。', '科技观察员', '2026-11-18 09:30:00'),
('量子计算机实现千比特级突破', '前沿科技', '科研团队成功构建千比特级量子处理器，纠错能力大幅提升，量子计算距离实用化又迈出关键一步。', '量子前沿', '2026-11-17 14:20:00'),
('固态电池量产成本大幅下降', '新能源', '多家厂商宣布固态电池产线投产，能量密度提升40%以上，电动车续航有望突破1500公里。', '能源动态', '2026-11-16 10:05:00'),
('6G试验网完成首次外场测试', '通信技术', '6G试验网在多个城市完成外场测试，实测峰值速率达到5G的十倍，预计2030年实现商用部署。', '通信观察', '2026-11-15 16:40:00'),
('商业航天可回收火箭发射成功', '航天科技', '国产可回收运载火箭完成第三次发射并精准回收，商业航天发射成本进一步降低，太空经济加速发展。', '航天快讯', '2026-11-14 11:15:00'),
('脑机接口临床试验取得新进展', '生物科技', '侵入式脑机接口设备帮助瘫痪患者用意念操控机械臂，临床试验准确率达到95%以上。', '生命科学', '2026-11-13 08:50:00'),
('智能驾驶迎来无图方案时代', '智能出行', '多家车企发布不依赖高精地图的智能驾驶方案，城市领航辅助功能覆盖范围扩大至全国道路。', '汽车前沿', '2026-11-12 15:30:00'),
('开源芯片架构生态持续壮大', '半导体', '开源精简指令集芯片架构出货量累计突破百亿颗，全球开发者社区贡献活跃，产业链日趋完善。', '芯片情报', '2026-11-11 13:10:00');

-- 图文列表表
CREATE TABLE IF NOT EXISTS Zhaoshibo_gallery (
  Zhaoshibo_id INT AUTO_INCREMENT PRIMARY KEY COMMENT '图文ID',
  Zhaoshibo_title VARCHAR(200) NOT NULL COMMENT '图文标题',
  Zhaoshibo_image_url VARCHAR(500) NOT NULL COMMENT '图片地址',
  Zhaoshibo_description TEXT NOT NULL COMMENT '图文描述',
  Zhaoshibo_created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='图文列表表';

INSERT INTO Zhaoshibo_gallery (Zhaoshibo_title, Zhaoshibo_image_url, Zhaoshibo_description, Zhaoshibo_created_at) VALUES
('数据中心夜景', 'https://picsum.photos/id/0/600/400', '云计算数据中心的机房内部，服务器机柜整齐排列，蓝色指示灯闪烁运行。', '2026-11-18 10:00:00'),
('芯片电路特写', 'https://picsum.photos/id/1/600/400', '半导体芯片的电路板特写，精密的电子元件承载着现代计算的核心。', '2026-11-17 09:30:00'),
('办公 coding 时光', 'https://picsum.photos/id/2/600/400', '程序员在深夜编写代码，屏幕上的字符如同科技世界的建筑材料。', '2026-11-16 21:15:00'),
('机械臂生产线', 'https://picsum.photos/id/3/600/400', '智能制造工厂中的机械臂正在组装产品，自动化程度不断提高。', '2026-11-15 14:45:00'),
('星空与火箭', 'https://picsum.photos/id/4/600/400', '火箭升空划破夜空，商业航天正把人类带向更远的星辰大海。', '2026-11-14 19:20:00'),
('实验室科研', 'https://picsum.photos/id/6/600/400', '科研人员在实验室中操作精密仪器，探索未知世界的奥秘。', '2026-11-13 11:05:00'),
('无人机航拍', 'https://picsum.photos/id/8/600/400', '消费级无人机航拍城市景观，低空经济正在改变我们的生活方式。', '2026-11-12 16:30:00'),
('机器人协作', 'https://picsum.photos/id/16/600/400', '人形机器人与人类协同工作，具身智能成为人工智能发展的新方向。', '2026-11-11 09:00:00');
