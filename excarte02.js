/* on prend les position approximatives du CF2m (à vérifier, en fonction de la précision)*/ 
let latitude = 51.510357;
let longitude = -0.116773;
let zoomcarte = 13; /* zoom de la carte de 1 à 20 */ 
/* on utilise un objet de type L.map de la bibliothèque de Leaflet qui permet de définir une carte, on passe ene paramètre le conteneur, ici id=carte */ 

var bigben = L.map('carte').setView([latitude, longitude], zoomcarte);

/* choix d'un fond de carte */ 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(bigben);