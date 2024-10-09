window.onload = function() {
    // 获取 canvas 元素
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    let fireworks = [];

    // 调整 canvas 的大小
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 烟花粒子类
    class Firework {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.radius = Math.random() * 6 + 4; // 粒子大小
            this.life = 200; // 粒子生命长度，确保动画能持续约2秒
            this.opacity = 1; // 设置初始透明度为1
            this.dx = (Math.random() - 0.5) * 20; // 初始横向移动速度
            this.dy = (Math.random() - 0.5) * 20; // 初始纵向移动速度
            this.decay = 0.98; // 速度衰减系数，值越接近1，速度变化越慢
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${this.opacity})`; // 添加透明度
            ctx.fill();
            ctx.closePath();
        }

        update() {
            // 速度逐渐减慢
            this.dx *= this.decay;
            this.dy *= this.decay;

            this.x += this.dx;
            this.y += this.dy;
            this.radius -= 0.02; // 粒子会逐渐变小，变得更慢
            this.opacity -= 0.01; // 粒子逐渐透明
            this.life--;
        }
    }

    // 生成烟花的函数
    function createFireworks(x, y) {
        const colors = [
            [255, 89, 89],  // 红色
            [255, 215, 0],  // 金色
            [0, 255, 204],  // 青色
            [255, 105, 180],// 粉色
            [255, 69, 0]    // 橙色
        ];
        for (let i = 0; i < 100; i++) { // 粒子数量
            let color = colors[Math.floor(Math.random() * colors.length)];
            fireworks.push(new Firework(x, y, color));
        }
    }

    // 动画循环
    function animate() {
        // 使用半透明黑色背景清除
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // 透明度为 0.1 的黑色
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        fireworks = fireworks.filter(firework => firework.life > 0 && firework.opacity > 0); // 粒子过滤

        fireworks.forEach(firework => {
            firework.update();
            firework.draw();
        });

        requestAnimationFrame(animate);
    }

    // 触发烟花从两边发射
    createFireworks(0, canvas.height / 2); // 左侧烟花
    createFireworks(canvas.width, canvas.height / 2); // 右侧烟花

    animate();
};