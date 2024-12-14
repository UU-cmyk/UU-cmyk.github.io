document.addEventListener('click', (event) => {
  const trail = document.createElement('div');
  trail.className = 'trail';
  
  // 设置圆形的位置为点击位置
  trail.style.left = event.pageX + 'px';
  trail.style.top = event.pageY + 'px';

  // 随机位移效果
  const randomOffsetX = (Math.random() - 0.5) * 1; // 随机位移范围
  const randomOffsetY = (Math.random() - 0.5) * 1; // 随机位移范围
  trail.style.transform = `translate(${randomOffsetX}px, ${randomOffsetY}px)`;

  document.body.appendChild(trail);

  // 设置定时删除元素
  setTimeout(() => {
      trail.style.opacity = '0';
      setTimeout(() => {
          document.body.removeChild(trail);
      }, 200); //0.2秒后移除
  }, 200);
});