const CACHE='jc-training-v26';
const ASSETS=['./','./index.html'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  e.respondWith(fetch(r).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(r,copy)).catch(()=>{});return res}).catch(()=>caches.match(r).then(m=>m||caches.match('./index.html'))));
});
self.addEventListener('notificationclick',e=>{const a=e.action||'',t=e.notification.tag||'';e.notification.close();e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(l=>{const msg={type:'notif',action:a,tag:t};if(l.length){l[0].postMessage(msg);return l[0].focus()}return self.clients.openWindow('./?notif='+encodeURIComponent(a||t))}))});
