//インストールを促すバナーを表示
self.addEventListener('fetch', function(e) {
  // ここは空でもOK
})

// ライブラリのインポート
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

// ファイルのキャッシュ
// リビジョンを指定することで、キャッシュのバージョン管理が可能。
workbox.precaching.precacheAndRoute([
  {
    url: '/index.html',
    revision: '1'
  },
  {
    url: '/app.css',
    revision: '1'
  },
  { 
　url: '/app.js',
    revision: '1'
  },
])
