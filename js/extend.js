Object.prototype.longPress = function (fn) {
  var total = 0,
    timer = null;
  this.addEventListener('touchstart', function (e) {
    e.preventDefault();
    timer = setInterval(function () {
      total += 1;
      if (total >= 2) {
        fn();
        clearInterval(timer);
      }
    }, 1000)
  })

  this.addEventListener('touchend', function () {
    clearInterval(timer);
  })
}