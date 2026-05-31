/**
 * 立绘页：按图片真实宽高标记横/竖/方，展示区域随比例变化
 */
(function () {
  function classifyImage(img) {
    var item = img.closest('.gallery-item');
    if (!item) return;

    item.classList.remove('is-portrait', 'is-landscape', 'is-square');

    if (!img.naturalWidth || !img.naturalHeight) return;

    var ratio = img.naturalWidth / img.naturalHeight;
    if (ratio > 1.12) {
      item.classList.add('is-landscape');
    } else if (ratio < 0.88) {
      item.classList.add('is-portrait');
    } else {
      item.classList.add('is-square');
    }
  }

  function bindImage(img) {
    if (img.complete && img.naturalWidth) {
      classifyImage(img);
    } else {
      img.addEventListener('load', function () {
        classifyImage(img);
      });
    }
  }

  function initGallery() {
    if (document.body.dataset.page !== 'gallery') return;
    document.querySelectorAll('.gallery-item img').forEach(bindImage);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }
})();
