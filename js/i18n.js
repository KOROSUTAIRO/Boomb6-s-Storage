/**
 * Boomb6's Storage — 多语言 (中文 / 日本語 / English)
 */
const I18N = {
    zh: {
        'site.name': "Boomb6's Storage",
        'nav.home': '首页',
        'nav.voicebank': '音源',
        'nav.gallery': '立绘',
        'nav.videos': '视频',
        'nav.merch': '周边',
        'nav.blog': '日志', // 【新增】
        'footer': '© Boomb6 · OC 个人站',
        'home.title': '欢迎来到我的 OC 空间',
        'home.subtitle': '这里收录了我多位原创角色的立绘、作品视频、周边，以及各角色的 UTAU 音源配布。',
        'home.quick.voicebank': 'UTAU 音源',
        'home.quick.gallery': '立绘展示',
        'home.quick.videos': '视频作品',
        'home.quick.merch': 'OC 周边',
        'voicebank.title': 'UTAU 音源配布',
        'voicebank.desc': 'SHINSHOKUNEKOROKU 的 UTAU 音源（JP）配布页。试听后若喜欢，请下载完整压缩包。',
        'voicebank.character': '角色名',
        'voicebank.lang': '对应语言',
        'voicebank.langValue': 'JP',
        'voicebank.author': '作者',
        'voicebank.version': '版本',
        'voicebank.format': '格式',
        'voicebank.preview': '试听样本',
        'voicebank.download': '下载音源 (.zip)',
        'voicebank.usage': '使用须知：请标注作者名 Boomb6；禁止用于商业用途；禁止二次配布。',
        'voicebank.sampleName': '示例曲目',
        'gallery.title': '立绘展示',
        'gallery.desc': '我的 OC 立绘与插画作品。',
        'gallery.item1': '标准立绘',
        'gallery.item2': '角色设定',
        'gallery.item3': 'Q 版头像',
        'videos.title': '视频作品',
        'videos.desc': '我为 OC 制作或参与的视频。',
        'videos.item1Title': '角色介绍 PV',
        'videos.item1Desc': 'OC 设定与展示',
        'videos.item2Title': 'UTAU 翻唱',
        'videos.item2Desc': '使用本音源的演唱作品',
        'merch.title': 'OC 周边',
        'merch.desc': '为我的 OC 设计的周边产品展示。',
        'merch.item1': '亚克力立牌',
        'merch.item1Desc': '双面印刷 · 约 15cm',
        'merch.item2': '徽章套装',
        'merch.item2Desc': '58mm 马口铁徽章 ×3',
        'merch.item3': '明信片套组',
        'merch.item3Desc': '插画明信片 5 枚入',
        'merch.tag.display': '展示用',
        // 【新增】博客页面翻译
        'blog.title': '开发日志',
        'blog.desc': '记录创作点滴'
    },
    ja: {
        'site.name': "Boomb6's Storage",
        'nav.home': 'ホーム',
        'nav.voicebank': '音源',
        'nav.gallery': '立ち絵',
        'nav.videos': '動画',
        'nav.merch': 'グッズ',
        'nav.blog': '開発ログ', // 【新增】
        'footer': '© Boomb6 · OC 個人サイト',
        'home.title': 'OC スペースへようこそ',
        'home.subtitle': '複数のオリジナルキャラクターの立ち絵、動画、グッズ、および各キャラの UTAU 音源配布をまとめたサイトです。',
        'home.quick.voicebank': 'UTAU 音源',
        'home.quick.gallery': '立ち絵',
        'home.quick.videos': '動画作品',
        'home.quick.merch': 'OC グッズ',
        'voicebank.title': 'UTAU 音源配布',
        'voicebank.desc': 'SHINSHOKUNEKOROKU の UTAU 音源（JP）配布ページです。試聴後、ZIP をダウンロードできます。',
        'voicebank.character': 'キャラクター名',
        'voicebank.lang': '対応言語',
        'voicebank.langValue': 'JP',
        'voicebank.author': '作者',
        'voicebank.version': 'バージョン',
        'voicebank.format': '形式',
        'voicebank.preview': '試聴サンプル',
        'voicebank.download': '音源をダウンロード (.zip)',
        'voicebank.usage': '利用規約：作者名 Boomb6 の表記必須。商用利用・再配布禁止。',
        'voicebank.sampleName': 'サンプル曲',
        'gallery.title': '立ち絵ギャラリー',
        'gallery.desc': 'OC の立ち絵とイラストです。',
        'gallery.item1': '標準立ち絵',
        'gallery.item2': 'キャラクター設定',
        'gallery.item3': 'ちびキャラ',
        'videos.title': '動画作品',
        'videos.desc': 'OC 関連の制作・参加動画です。',
        'videos.item1Title': 'キャラ紹介 PV',
        'videos.item1Desc': 'OC 設定と紹介',
        'videos.item2Title': 'UTAU カバー',
        'videos.item2Desc': '本音源を使用した歌唱',
        'merch.title': 'OC グッズ',
        'merch.desc': 'OC 向けにデザインしたグッズの展示です。',
        'merch.item1': 'アクリルスタンド',
        'merch.item1Desc': '両面印刷 · 約 15cm',
        'merch.item2': '缶バッジセット',
        'merch.item2Desc': '58mm 缶バッジ ×3',
        'merch.item3': 'ポストカードセット',
        'merch.item3Desc': 'イラストカード 5 枚組',
        'merch.tag.display': '展示用',
        // 【新增】博客页面翻译
        'blog.title': '開発ログ',
        'blog.desc': '創作の記録'
    },
    en: {
        'site.name': "Boomb6's Storage",
        'nav.home': 'Home',
        'nav.voicebank': 'Voicebank',
        'nav.gallery': 'Gallery',
        'nav.videos': 'Videos',
        'nav.merch': 'Merch',
        'nav.blog': 'Blog', // 【新增】
        'footer': '© Boomb6 · Personal OC Site',
        'home.title': 'Welcome to My OC Space',
        'home.subtitle': 'A hub for multiple original characters—artwork, videos, merch, and UTAU voicebank releases per character.',
        'home.quick.voicebank': 'UTAU Voicebank',
        'home.quick.gallery': 'Character Art',
        'home.quick.videos': 'Video Works',
        'home.quick.merch': 'OC Merch',
        'voicebank.title': 'UTAU Voicebank',
        'voicebank.desc': 'SHINSHOKUNEKOROKU UTAU voicebank (JP). Preview the sample, then download the full ZIP.',
        'voicebank.character': 'Character',
        'voicebank.lang': 'Language',
        'voicebank.langValue': 'JP',
        'voicebank.author': 'Author',
        'voicebank.version': 'Version',
        'voicebank.format': 'Format',
        'voicebank.preview': 'Preview Sample',
        'voicebank.download': 'Download Voicebank (.zip)',
        'voicebank.usage': 'Terms: Credit Boomb6; no commercial use; no redistribution.',
        'voicebank.sampleName': 'Sample Track',
        'gallery.title': 'Character Gallery',
        'gallery.desc': 'Standing art and illustrations of my OC.',
        'gallery.item1': 'Standard Art',
        'gallery.item2': 'Character Design',
        'gallery.item3': 'Chibi Avatar',
        'videos.title': 'Video Works',
        'videos.desc': 'Videos I made or joined for this OC.',
        'videos.item1Title': 'Character PV',
        'videos.item1Desc': 'OC intro and showcase',
        'videos.item2Title': 'UTAU Cover',
        'videos.item2Desc': 'Singing with this voicebank',
        'merch.title': 'OC Merchandise',
        'merch.desc': 'Merch designed for my original character.',
        'merch.item1': 'Acrylic Stand',
        'merch.item1Desc': 'Double-sided print · ~15cm',
        'merch.item2': 'Badge Set',
        'merch.item2Desc': '58mm pin badges ×3',
        'merch.item3': 'Postcard Set',
        'merch.item3Desc': '5 illustration postcards',
        'merch.tag.display': 'Display only',
        // 【新增】博客页面翻译
        'blog.title': 'Development Log',
        'blog.desc': 'Recording creative moments'
    },
};

function getLang() {
    return localStorage.getItem('boomb6-lang') || 'zh';
}

function setLang(lang) {
    if (!I18N[lang]) return;
    localStorage.setItem('boomb6-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang === 'ja' ? 'ja' : 'en';
    document.body.classList.remove('lang-zh', 'lang-ja', 'lang-en');
    document.body.classList.add('lang-' + lang);
    applyTranslations(lang);
    updateLangButtons(lang);
}

function t(key, lang) {
    const l = lang || getLang();
    // 如果找不到对应语言的翻译，优先回退到中文，最后才显示 key 本身
    return (I18N[l] && I18N[l][key]) || I18N.zh[key] || key;
}

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const text = t(key, lang);
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = text;
        } else {
            el.textContent = text;
        }
    });
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
        el.title = t(el.getAttribute('data-i18n-title'), lang);
    });
}

function updateLangButtons(lang) {
    document.querySelectorAll('.lang-switcher button').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

function initI18n() {
    const lang = getLang();
    document.body.classList.add('lang-' + lang);
    setLang(lang);
    document.querySelectorAll('.lang-switcher button').forEach((btn) => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
}

document.addEventListener('DOMContentLoaded', initI18n);
