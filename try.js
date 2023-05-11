// function checkDevice() {
//   var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//   if (isMobile) {
//     setInterval(function() {
//         alert("請使用電腦瀏覽");
//     }, 1000); // 每隔1秒弹出一次提示框
//   }
// }
function checkDevice() {
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) {
      alert("請使用電腦進行體驗");
  }
}

window.addEventListener('scroll', function() {
    let img = document.querySelector('.container img');
    let scrollPosition = window.scrollY;
    img.style.top = scrollPosition + 'px';
  });
