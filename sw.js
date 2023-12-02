const nombreCache = "Portafolio"
const archivosCache = [
    "/",
    "/Card.astro",
    "/Contacto.astro",
    "/Footer.astro",
    "/Header.astro",
    "/Hero.astro",
    "/Info.astro",
    "/Proyectos.astro",
    "/Tecnologias.astro",
    "/index.astro",
    "/components/app.js"
]

self.addEventListener('install', e =>{
    console.log('serviceWorer install succefull');
    e.waitUntil(
        caches.open(nombreCache).then((cache)=>{
        console.log("Cache save correctly");
        cache.addAll(archivosCache);
        })
    )
})
self.addEventListener('activate', e => {
    console.log("service worker is active now", e);
})
self.addEventListener('fetch', function (e) {
    console.log("Fetch..", e)
    e.respondWith(
        //hace un comparativo con en "match"
        caches.match(e.request)
        .then(respuestaCache => {
            return respuestaCache
        })
    )
})