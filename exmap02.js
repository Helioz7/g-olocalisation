
function afficheCarte() {
/* on prend les position approximatives du CF2m (à vérifier, en fonction de la précision)*/ 
let latitudeCF2m = 50.8227;
let longitudeCF2m = 4.3346;
let zoomcarte = 13; /* zoom de la carte de 1 à 20 */ 
/* on utilise un objet de type L.map de la bibliothèque de Leaflet qui permet de définir une carte, on passe ene paramètre le conteneur, ici id=carte */ 
/* ke vais centrer la carte sur la position que la géololocaslisation va me donner */ 
latitudeCentreCarte=latitudeCF2m
longitudeCentreCarte=longitudeCF2m
precisionCarte=0;

/* on affiche la carte avec  le marqueur et le cercle */ 
let carte = L.map('carte').setView([latitudeCentreCarte, longitudeCentreCarte], zoomcarte);

/* choix d'un fond de carte */ 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(carte);

/* ajouter un marqueur sur la carte */ 
let markerCF2m = L.marker([latitudeCF2m, longitudeCF2m]).addTo(carte);

/* ajouter un cercle autour de la position trouvée lors de la géolocalisation */ 
var circle = L.circle([latitudeCentreCarte,longitudeCentreCarte], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: precisionCarte=100
}).addTo(map);
} 