document.addEventListener('DOMContentLoaded', function() {
  var stickers = document.querySelectorAll('.sticker');
  var mousePressionado = false;
  var offsetX = {};
  var offsetY = {};

  stickers.forEach(function(sticker) {
      sticker.addEventListener('mousedown', function (e) {
          mousePressionado = true;
          var currentSticker = e.target;
          offsetX[currentSticker.id] = e.clientX - currentSticker.getBoundingClientRect().left;
          offsetY[currentSticker.id] = e.clientY - currentSticker.getBoundingClientRect().top;
      });

      document.addEventListener('mousemove', function (e) {
          if (!mousePressionado) return;

          var currentSticker = document.querySelector('.sticker:active');
          if (!currentSticker) return;

          var newX = e.clientX - offsetX[currentSticker.id];
          var newY = e.clientY - offsetY[currentSticker.id];

          currentSticker.style.left = newX + 'px';
          currentSticker.style.top = newY + 'px';
      });
  });

  document.addEventListener('mouseup', function () {
      mousePressionado = false;
  });
});
