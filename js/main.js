// 设置导航栏active状态
document.addEventListener('DOMContentLoaded', function() {
    // 获取当前页面路径
    let currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    // 首页特殊处理：index.html对应home
    if (currentPage === '' || currentPage === 'index') {
        currentPage = 'home';
    }
    
    // 设置导航栏active状态
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const linkPage = link.dataset.page;
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// 二进制数字雨效果
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // 设置canvas尺寸
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // 仅使用二进制数字
    const chars = '01';
    const fontSize = 32; // 增大字体
    const columns = Math.floor(canvas.width / fontSize);
    const drops = [];
    
    // 初始化每列的起始位置，随机分布
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -200; // 从屏幕上方开始
    }
    
    // 绘制函数
    function draw() {
        // 创建拖尾效果（透明度较低）
        ctx.fillStyle = 'rgba(18, 18, 26, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // 设置字体
        ctx.font = fontSize + 'px "Share Tech Mono", monospace';
        
        // 逐列绘制
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            const x = i * fontSize;
            const y = drops[i] * fontSize;
            
            // 为每行添加渐变效果（越往下越亮）
            const brightness = Math.min(1, drops[i] / 10);
            ctx.fillStyle = `rgba(0, 255, 0, ${0.3 + brightness * 0.7})`;
            
            // 每列最上面的字符更亮
            if (drops[i] < 2) {
                ctx.fillStyle = '#FFFFFF';
            }
            
            ctx.fillText(text, x, y);
            
            // 控制下落速度（较慢）
            const speed = 0.3 + Math.random() * 0.2;
            drops[i] += speed;
            
            // 如果超出屏幕底部，重新从顶部开始
            if (y > canvas.height && Math.random() > 0.95) {
                drops[i] = 0;
            }
        }
    }
    
    // 启动动画（速度较慢）
    setInterval(draw, 50);
});
