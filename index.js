document.addEventListener('DOMContentLoaded', function () {
  var scrollingWrapper = document.querySelector('.scrolling-wrapper');
  var isMouseDown = false;
  var startX;
  var scrollLeft;

  function handleManualScroll(e) {
    if (!isMouseDown) return;
    e.preventDefault();
    var x = e.pageX - scrollingWrapper.offsetLeft;
    var walk = (x - startX) * 3;
    scrollingWrapper.scrollLeft = scrollLeft - walk;
  }

  function autoScroll(direction) {
    var increment = direction === 'right' ? 150 : -150;
    var targetScrollLeft = scrollingWrapper.scrollLeft + increment;

    scrollingWrapper.scrollTo({
      left: targetScrollLeft,
      behavior: 'smooth'
    });
  }

  scrollingWrapper.addEventListener('mousedown', function (e) {
    isMouseDown = true;
    startX = e.pageX - scrollingWrapper.offsetLeft;
    scrollLeft = scrollingWrapper.scrollLeft;
  });

  scrollingWrapper.addEventListener('mouseleave', function () {
    isMouseDown = false;
  });

  scrollingWrapper.addEventListener('mouseup', function () {
    isMouseDown = false;
  });

  scrollingWrapper.addEventListener('mousemove', handleManualScroll);
})