document.addEventListener('DOMContentLoaded', function() {
  const githubUsername = 'UU-cmyk';
  const apiUrl = `https://api.github.com/users/${githubUsername}`;
  
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('网络响应不正常');
      }
      return response.json();
    })
    .then(data => {
      // 更新头像
      const avatar = document.getElementById('avatar');
      avatar.src = data.avatar_url;
      
      // 更新名字
      const name = document.getElementById('name');
      name.textContent = data.name || data.login;
      
      // 更新简介
      const bio = document.getElementById('bio');
      bio.textContent = data.bio || '这个用户很懒，没有留下简介';
      
      // 更新统计数据
      document.getElementById('repos').textContent = data.public_repos;
      document.getElementById('followers').textContent = data.followers;
      document.getElementById('following').textContent = data.following;
      
      // 更新个人主页链接
      const profileLink = document.getElementById('profile-link');
      profileLink.href = data.html_url;
    })
    .catch(error => {
      console.error('获取GitHub数据时出错:', error);
      document.getElementById('name').textContent = '数据加载失败';
    });
});