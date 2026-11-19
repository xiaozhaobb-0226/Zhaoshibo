/*
 * 姓名：赵士渤 | 学号：24001050205 | 时间：2026-11-19 | 大模型：Auto
 * 首页 canvas 背景动画：粒子连线网络
 */
(function () {
  const canvas = document.getElementById('ZhaoshiboCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let ZhaoshiboParticles = [];
  const ZhaoshiboCount = 90;

  function ZhaoshiboResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function ZhaoshiboCreate() {
    ZhaoshiboParticles = [];
    for (let i = 0; i < ZhaoshiboCount; i++) {
      ZhaoshiboParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        r: Math.random() * 1.8 + 0.6
      });
    }
  }

  function ZhaoshiboDraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const linkDist = 130;

    for (let i = 0; i < ZhaoshiboParticles.length; i++) {
      const p = ZhaoshiboParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(110, 168, 255, 0.85)';
      ctx.fill();

      for (let j = i + 1; j < ZhaoshiboParticles.length; j++) {
        const q = ZhaoshiboParticles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < linkDist) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = 'rgba(90, 140, 255,' + (0.25 * (1 - dist / linkDist)) + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(ZhaoshiboDraw);
  }

  window.addEventListener('resize', function () {
    ZhaoshiboResize();
    ZhaoshiboCreate();
  });

  ZhaoshiboResize();
  ZhaoshiboCreate();
  ZhaoshiboDraw();
})();
