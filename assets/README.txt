Boomb6's Storage — 资源文件夹说明
================================

请将你的文件放入对应目录：

images/
  home-bg.jpg         首页顶部背景图（横图，建议 1920×1080 或更宽）
  avatar.png          首页头像
  voicebank-cover.png 音源封面
  gallery-01.png      立绘 1
  gallery-02.png      立绘 2
  gallery-03.png      立绘 3
  merch-01.png        周边图 1
  merch-02.png        周边图 2
  merch-03.png        周边图 3
  video-poster.png    视频封面（可选）

audio/
  preview.mp3         音源试听（也可用 preview.ogg）

downloads/
  方式 A（推荐）：把 zip 重命名为
    SHINSHOKUNEKOROKU JP.zip
  用户下载下来的就是该文件名。

  方式 B：仍命名为 voicebank.zip 也可以，但需用本地服务器打开网站
  （例如 VS Code Live Server），不要用 file:// 双击 html。
  此时由 js/voicebank-download.js 在下载时改名为 SHINSHOKUNEKOROKU JP.zip。

video/
  demo.mp4            本地视频（可选）

修改 HTML 中的音源名、B站 BV 号、OC 名字等文字即可。
