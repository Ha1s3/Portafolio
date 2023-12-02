if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(registrado => console.log("serviceWorker is register now",registrado))
    .catch(error=>console.error("Error al registrar el service worker ", error));

}else{
    console.log("server worker is not compatible");
}