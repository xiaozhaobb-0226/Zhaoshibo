/*
 * 姓名：赵士渤 | 学号：24001050205 | 时间：2026-11-19 | 大模型：Auto
 * 公共 JS：导航栏渲染 + 通用请求封装（返回数据/错误均输出到控制台）
 */

// 渲染导航栏（当前页高亮）
function ZhaoshiboRenderNav() {
  const ZhaoshiboItems = [
    { href: 'index.html', text: '首页' },
    { href: 'database.html', text: '数据库测试' },
    { href: 'news.html', text: '科技新闻' },
    { href: 'gallery.html', text: '图文列表' }
  ];
  const ZhaoshiboBox = document.getElementById('ZhaoshiboNav');
  if (!ZhaoshiboBox) return;
  const ZhaoshiboCurrent = location.pathname.split('/').pop() || 'index.html';
  ZhaoshiboBox.innerHTML = ZhaoshiboItems.map(function (item) {
    const cls = item.href === ZhaoshiboCurrent ? ' Zhaoshibo_active' : '';
    return '<a href="' + item.href + '" class="' + cls.trim() + '">' + item.text + '</a>';
  }).join('');
}

// 通用 GET 请求封装
async function ZhaoshiboFetchJson(url, options) {
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    console.log('[Zhaoshibo] 服务器返回：', url, json);
    return json;
  } catch (err) {
    console.error('[Zhaoshibo] 请求错误：', url, err);
    return { code: -1, msg: '网络请求失败：' + err.message, data: null };
  }
}

document.addEventListener('DOMContentLoaded', ZhaoshiboRenderNav);
