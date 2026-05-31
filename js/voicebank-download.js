/**
 * 强制以「SHINSHOKUNEKOROKU JP.zip」保存（适用于 http/https 本地服务器）
 * 服务器上的文件可仍为 assets/downloads/voicebank.zip
 */
(function () {
  const SOURCE = 'assets/downloads/voicebank.zip';
  const SAVE_AS = 'SHINSHOKUNEKOROKU JP.zip';

  function triggerBlobDownload(blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = SAVE_AS;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);
  }

  function init() {
    var link = document.getElementById('voicebank-download');
    if (!link) return;

    link.addEventListener('click', function (e) {
      e.preventDefault();

      fetch(SOURCE)
        .then(function (res) {
          if (!res.ok) throw new Error('not found');
          return res.blob();
        })
        .then(triggerBlobDownload)
        .catch(function () {
          /* 无法 fetch 时（例如 file://）：改用磁盘上的正式文件名直链 */
          window.location.href = 'assets/downloads/SHINSHOKUNEKOROKU%20JP.zip';
        });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
