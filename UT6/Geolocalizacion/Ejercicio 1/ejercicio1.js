// Configuración
// Ubicación Generada por Copilot
const CONFIG = {
    DEFAULT_LAT: 40.04295,   // Plasencia, IES Valle del Jerte
    DEFAULT_LNG: -6.08695,
    DEFAULT_ZOOM: 16,
    TILE_LAYER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    TILE_ATTRIBUTION: '&copy; <a href="www.openstreetmap.org">OpenStreetMap</a>'
};

// Estado global (simplificado)
const state = {
    map: null,
    marker: null,
};

/**
 * Inicializa el mapa con Leaflet en una ubicación fija.
 */
function initMap() {
    state.map = L.map('map').setView(
        [CONFIG.DEFAULT_LAT, CONFIG.DEFAULT_LNG],
        CONFIG.DEFAULT_ZOOM
    );

    L.tileLayer(CONFIG.TILE_LAYER, {
        attribution: CONFIG.TILE_ATTRIBUTION,
        maxZoom: 19
    }).addTo(state.map);

    // Añade el marcador fijo en Plasencia
    addFixedMarker();
    
    // Actualiza la UI con la ubicación fija
    updateUI(CONFIG.DEFAULT_LAT.toFixed(6), CONFIG.DEFAULT_LNG.toFixed(6), 'Fijo', new Date().toLocaleTimeString('es-ES'));
}

/**
 * Añade un marcador permanente en la ubicación por defecto.
 */
function addFixedMarker() {
    // Crear marcador personalizado con imagen (usando el SVG de avatar que ya tenías)
    const markerElement = createCustomMarker();
    state.marker = L.marker([CONFIG.DEFAULT_LAT, CONFIG.DEFAULT_LNG], {
        icon: L.divIcon({
            html: markerElement.outerHTML,
            iconSize: [60, 60],
            iconAnchor: [30, 30],
            popupAnchor: [0, -30],
            className: 'custom-marker-wrapper'
        })
    }).addTo(state.map);

    // Agregar popup
    state.marker.bindPopup(
        `<div style="text-align: center;">
            <strong>Plasencia</strong><br>
            <small>Cáceres, España</small>
        </div>`,
        { offset: [0, -10] }
    ).openPopup(); // Abre el popup por defecto
}

/**
 * Crea un elemento HTML personalizado para el marcador
 */
function createCustomMarker() {
    const div = document.createElement('div');
    div.className = 'custom-marker marker-pulse';
    
    // Imagen de perfil (avatar SVG en base64)
    const img = document.createElement('img');
    img.src = 'RYU.png';
    img.alt = 'Ubicación fija';
    
    div.appendChild(img);
    return div;
}


/**
 * Actualiza la información en la UI
 */
function updateUI(lat, lng, accuracy, timestamp) {
    document.getElementById('latitude').textContent = lat;
    document.getElementById('longitude').textContent = lng;
    document.getElementById('accuracy').textContent = accuracy;
    document.getElementById('timestamp').textContent = timestamp || '--';
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initMap);

//Comentarios generados por Copilot
