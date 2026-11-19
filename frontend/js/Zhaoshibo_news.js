/*
 * 姓名：赵士渤 | 学号：24001050205 | 时间：2026-11-19 | 大模型：Auto
 * 科技新闻列表页逻辑：请求后端接口并渲染
 */
document.addEventListener('DOMContentLoaded', async function () {
  const statusEl = document.getElementById('ZhaoshiboNewsStatus');
  const listEl = document.getElementById('ZhaoshiboNewsList');

  const json = await ZhaoshiboFetchJson('/api/Zhaoshibo_news');

  if (json.code === 0) {
    statusEl.textContent = '✓ ' + json.msg + '，共 ' + json.data.length + ' 条';
    statusEl.className = 'Zhaoshibo_status Zhaoshibo_success';
    listEl.innerHTML = json.data.map(function (n) {
      return '<div class="Zhaoshibo_card Zhaoshibo_news-item">' +
        '<h3>' + n.Zhaoshibo_title + '</h3>' +
        '<p class="Zhaoshibo_meta">分类：' + n.Zhaoshibo_category +
        ' | 作者：' + n.Zhaoshibo_author +
        ' | 时间：' + n.Zhaoshibo_publish_time + '</p>' +
        '<p class="Zhaoshibo_desc">' + n.Zhaoshibo_content + '</p>' +
        '</div>';
    }).join('');
  } else {
    statusEl.textContent = '✗ ' + json.msg;
    statusEl.className = 'Zhaoshibo_status Zhaoshibo_error';
  }
});
