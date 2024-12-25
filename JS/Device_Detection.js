function detectDevice() {
    const userAgent = navigator.userAgent;
        let deviceType = "未知设备";
        if (/android/i.test(userAgent) || /iphone|ipad|ipod/i.test(userAgent)) {
            deviceType = "手机";
            // 跳转到你想要的手机页面
            window.location.href = "../Device.html"; // 跳转至目标URL
        } else if (/tablet/i.test(userAgent)) {
            deviceType = "平板";
        } else {
            deviceType = "电脑";
        }

        document.getElementById('deviceType').textContent = `你正在使用的设备类型是: ${deviceType}`;
}

// 调用设备检测函数
window.onload = detectDevice;