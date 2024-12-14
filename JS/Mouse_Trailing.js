// 创建拖尾元素
function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'trail_Trailing';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    // 设置随机颜色
    trail.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.appendChild(trail);

    // 过了100毫秒后移除拖尾元素
    setTimeout(() => {
        trail.remove();
    }, 100); // 0.1秒后移除
}

// 监听鼠标移动事件
document.addEventListener('mousemove', (event) => {
    createTrail(event.clientX, event.clientY);
})