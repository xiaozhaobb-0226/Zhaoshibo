/*
 * 姓名：赵士渤 | 学号：24001050205 | 时间：2026-11-19 | 大模型：Auto
 * 图文列表页逻辑：请求后端接口并渲染图片卡片
 */
document.addEventListener('DOMContentLoaded', async function () {
  const statusEl = document.getElementById('ZhaoshiboGalleryStatus');
  const gridEl = document.getElementById('ZhaoshiboGalleryGrid');

  const json = await ZhaoshiboFetchJson('/api/Zhaoshibo_gallery');

  if (json.code === 0) {
    statusEl.textContent = '✓ ' + json.msg + '，共 ' + json.data.length + ' 条';
    statusEl.className = 'Zhaoshibo_status Zhaoshibo_success';
    gridEl.innerHTML = json.data.map(function (g) {
      return '<div class="Zhaoshibo_card Zhaoshibo_gallery-item">' +
        '<img src="' + g.Zhaoshibo_image_url + '" alt="' + g.Zhaoshibo_title + '" loading="lazy">' +
        '<h3>' + g.Zhaoshibo_title + '</h3>' +
        '<p class="Zhaoshibo_desc">' + g.Zhaoshibo_description + '</p>' +
        '</div>';
    }).join('');
  } else {
    statusEl.textContent = '✗ ' + json.msg;
    statusEl.className = 'Zhaoshibo_status Zhaoshibo_error';
  }
});
