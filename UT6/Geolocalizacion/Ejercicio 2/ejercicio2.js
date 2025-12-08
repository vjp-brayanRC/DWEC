// Coordenadas aproximadas de Plasencia para centrar el mapa inicialmente
const PLASENCIA_CENTER = [40.03116, -6.08845];
const initialZoom = 14;

// Inicializa el mapa
const map = L.map('map').setView(PLASENCIA_CENTER, initialZoom);

// Añade la capa de tiles de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="www.openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// --- 1. El ayuntamiento de Plasencia (marcador) ---

// Coordenadas del Ayuntamiento (Calle del Rey, s/n)
const ayuntamientoCoords = [40.0300, -6.0898]; 
const ayuntamientoMarker = L.marker(ayuntamientoCoords).addTo(map);

// Contenido para el popup del marcador
const ayuntamientoPopupContent = `
    <h3>Ayuntamiento de Plasencia</h3>
    <p>Sede principal del gobierno municipal, ubicado en la Plaza Mayor.</p>
    <a href="www.plasencia.es" target="_blank">Sitio web oficial</a>
`;

// Enlaza el popup al marcador
ayuntamientoMarker.bindPopup(ayuntamientoPopupContent);

// Coordenadas de la Piscina Bioclimática (Círculo)
const piscinaCoords = [40.045001, -6.08495];
const piscinaCircle = L.circle(piscinaCoords, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 50 // Radio en metros
}).addTo(map);


// Para los polígonos necesitamos definir múltiples puntos. Usaremos el IES Valle del Jerte y la Estación de Trenes.

// Coordenadas aproximadas de la zona alrededor del instituto
const institutoCoords = [
    [40.04350, -6.08740],
    [40.04350, -6.08630], 
    [40.04260, -6.08630], 
    [40.04260, -6.08740], 
];


const poligonoInstituto = L.polygon(institutoCoords, {
    color: 'blue',
    fillColor: '#00f',
    weight: 2,
    fillOpacity: 0.3
}).addTo(map);

poligonoInstituto.bindPopup("<h3>Zona IES</h3><p>Zona que comprende el instituto y alrededores.</p><a href='iessierradesantabarbara.educarex.es' target='_blank'>Web IES Sierra de Santa Bárbara</a>");


// Coordenadas aproximadas de la Estación de Trenes
const coordsEstacionPlasencia = [
  [40.02280, -6.09990],
  [40.02280, -6.09930],
  [40.02200, -6.09930],
  [40.02200, -6.09990],
  [40.02280, -6.09990]
];
const poligonoEstacion = L.polygon(coordsEstacionPlasencia, {
    color: 'green',
    fillColor: '#0f0',
    weight: 2,
    fillOpacity: 0.3
}).addTo(map);

poligonoEstacion.bindPopup("<h3>Zona Estación de Trenes</h3><p>Zona de la estación de Renfe de Plasencia.</p><a href='www.renfe.com' target='_blank'>Web Renfe Plasencia</a>");

// Ajustar el mapa para que muestre todos los elementos añadidos al inicio
map.fitBounds([
    ayuntamientoCoords,
    piscinaCoords,
    institutoCoords,
    institutoCoords,
    estacionCoords,
    estacionCoords
]);
