// Configuración
const CONFIG = {
    UPDATE_INTERVAL: 30000, // 30 segundos
    DEFAULT_LAT: 40.4168,   // Madrid
    DEFAULT_LNG: -3.7038,
    DEFAULT_ZOOM: 13,
    TILE_LAYER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    TILE_ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
};

// Estado global
const state = {
    map: null,
    marker: null,
    watchId: null,
    updateInterval: null,
    lastLocation: null
};

/**
 * Inicializa el mapa con Leaflet
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

    // Iniciar geolocalización
    startGeolocation();
}

/**
 * Inicia el monitoreo de geolocalización
 */
function startGeolocation() {
    if (!navigator.geolocation) {
        console.error('Geolocalización no disponible en este navegador');
        updateUI('Error', 'Geolocalización no disponible', 'Error');
        return;
    }

    // Obtener ubicación inicial
    navigator.geolocation.getCurrentPosition(
        handleLocationSuccess,
        handleLocationError,
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );

    // Configurar actualización periódica
    state.updateInterval = setInterval(() => {
        navigator.geolocation.getCurrentPosition(
            handleLocationSuccess,
            handleLocationError,
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    }, CONFIG.UPDATE_INTERVAL);
}

/**
 * Maneja el éxito de la geolocalización
 */
function handleLocationSuccess(position) {
    const { latitude, longitude, accuracy } = position.coords;
    const timestamp = new Date().toLocaleTimeString('es-ES');

    // Actualizar estado
    state.lastLocation = { latitude, longitude, accuracy };

    // Actualizar marcador en el mapa
    updateMarker(latitude, longitude);

    // Actualizar información en la UI
    updateUI(latitude.toFixed(6), longitude.toFixed(6), accuracy.toFixed(2) + ' m', timestamp);

    // Centrar mapa en la ubicación
    state.map.setView([latitude, longitude], CONFIG.DEFAULT_ZOOM);
}

/**
 * Maneja errores de geolocalización
 */
function handleLocationError(error) {
    const messages = {
        1: 'Permiso denegado. Por favor, habilita la geolocalización.',
        2: 'Ubicación no disponible. Intenta de nuevo.',
        3: 'Tiempo de espera agotado. Intenta de nuevo.'
    };

    const message = messages[error.code] || 'Error desconocido';
    console.error('Error de geolocalización:', message);
    updateUI('Error', message, 'Error');
}

/**
 * Actualiza el marcador en el mapa
 */
function updateMarker(lat, lng) {
    if (state.marker) {
        state.marker.setLatLng([lat, lng]);
    } else {
        // Crear marcador personalizado con imagen
        const markerElement = createCustomMarker();
        state.marker = L.marker([lat, lng], {
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
                <strong>Tu ubicación actual</strong><br>
                <small>${new Date().toLocaleString('es-ES')}</small>
            </div>`,
            { offset: [0, -10] }
        );
    }
}

/**
 * Crea un elemento HTML personalizado para el marcador
 */
function createCustomMarker() {
    const div = document.createElement('div');
    div.className = 'custom-marker marker-pulse';
    
    // Imagen de perfil (avatar)
    const img = document.createElement('img');
    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="35" r="20" fill="%23667eea"/%3E%3Cellipse cx="50" cy="75" rx="25" ry="20" fill="%23667eea"/%3E%3C/svg%3E';
    img.alt = 'Tu ubicación';
    
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

/**
 * Limpia los recursos
 */
function cleanup() {
    if (state.updateInterval) {
        clearInterval(state.updateInterval);
    }
    if (state.watchId) {
        navigator.geolocation.clearWatch(state.watchId);
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initMap);

// Limpiar recursos al descargar la página
window.addEventListener('beforeunload', cleanup);