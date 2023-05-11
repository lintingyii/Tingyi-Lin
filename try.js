function checkDevice() {
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) {
    setInterval(function() {
        alert("请使用电脑打开本网页。");
    }, 1000); // 每隔1秒弹出一次提示框
  }
}

window.addEventListener('scroll', function() {
    let img = document.querySelector('.container img');
    let scrollPosition = window.scrollY;
    img.style.top = scrollPosition + 'px';
  });
