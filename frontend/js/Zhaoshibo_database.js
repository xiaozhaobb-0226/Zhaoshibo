/*
 * 姓名：赵士渤 | 学号：24001050205 | 时间：2026-11-19 | 大模型：Auto
 * 数据库连接测试页逻辑
 */
document.addEventListener('DOMContentLoaded', function () {
  const userEl = document.getElementById('ZhaoshiboUsername');
  const passEl = document.getElementById('ZhaoshiboPassword');
  const statusEl = document.getElementById('ZhaoshiboDbStatus');
  const resultEl = document.getElementById('ZhaoshiboDbResult');
  const btn = document.getElementById('ZhaoshiboTestBtn');

  async function ZhaoshiboTest() {
    statusEl.className = 'Zhaoshibo_status';
    resultEl.innerHTML = '';
    btn.disabled = true;
    btn.textContent = '连接中...';

    const json = await ZhaoshiboFetchJson('/api/Zhaoshibo_database/test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Zhaoshibo_username: userEl.value,
        Zhaoshibo_password: passEl.value
      })
    });

    if (json.code === 0) {
      statusEl.textContent = '✓ ' + json.msg;
      statusEl.className = 'Zhaoshibo_status Zhaoshibo_success';
      const d = json.data;
      resultEl.innerHTML =
        '<p>主机地址：<span>' + d.host + '</span></p>' +
        '<p>数据库名：<span>' + d.database + '</span></p>' +
        '<p>MySQL 版本：<span>' + d.version + '</span></p>' +
        '<p>数据表数量：<span>' + d.tableCount + '</span></p>';
    } else {
      statusEl.textContent = '✗ ' + json.msg;
      statusEl.className = 'Zhaoshibo_status Zhaoshibo_error';
      resultEl.innerHTML = '';
    }

    btn.disabled = false;
    btn.textContent = '测试连接';
  }

  btn.addEventListener('click', ZhaoshiboTest);
  passEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') ZhaoshiboTest();
  });
});
