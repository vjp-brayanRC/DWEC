import L from 'leaflet';
import './style.css';

// Centro aproximado de Cáceres
const map = L.map('map').setView([39.475, -6.372], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

// Helper: normaliza teléfono y comida
const fmtTelefono = (tel) => {
  if (!tel) return '—';
  const s = String(tel).trim();
  return s.length ? s : '—';
};
const fmtComida = (val) => {
  if (val === true || String(val).toLowerCase() === 'si') return 'Sí';
  if (val === false || String(val).toLowerCase() === 'no') return 'No';
  return 'No'; // default
};

// Carga dataset bares desde GitHub RAW
const DATA_URL = 'https://raw.githubusercontent.com/jesusredondo/backupOpendataCCJSON/master/bares.json';

fetch(DATA_URL)
  .then((r) => r.json())
  .then((data) => {
    // El dataset puede venir como array o con una propiedad contenedora.
    const bares = Array.isArray(data) ? data : (data.bares || data.features || []);
    bares.forEach((bar) => {
      // Intenta localizar lat/lon en distintas claves comunes
      const lat =
        bar.lat || bar.latitude || (bar.coord && bar.coord.lat) || (bar.location && bar.location.lat) ||
        (bar.geometry && bar.geometry.coordinates && bar.geometry.coordinates[1]);
      const lon =
        bar.lon || bar.lng || bar.longitude || (bar.coord && bar.coord.lon) || (bar.location && bar.location.lon) ||
        (bar.geometry && bar.geometry.coordinates && bar.geometry.coordinates[0]);

      if (typeof lat !== 'number' || typeof lon !== 'number') return;

      const nombre = bar.nombre || bar.name || bar.titulo || bar.title || 'Sin nombre';
      const telefono = bar.telefono || bar.phone || bar.telecom || null;
      const sirveComida = bar.comida || bar.food || bar.sirve_comida || bar.sirveComida || 'no';

      const marker = L.marker([lat, lon]).addTo(map);
      marker.bindPopup(
        `<strong>${nombre}</strong><br/>
         Teléfono: ${fmtTelefono(telefono)}<br/>
         Sirve comida: ${fmtComida(sirveComida)}`
      );
    });
  })
  .catch((err) => {
    console.error('Error cargando bares:', err);
    alert('No se pudo cargar el dataset de bares.');
  });
