fetch('spotify_data.csv')
  .then(r => r.text())
  .then(t => {
    const filas = t.trim().split('\n');
    filas.shift(); // quitar encabezado

    const labels = [];
    const valores = [];
    const colores = [];

    for(let i = 0; i < 30 && i < filas.length; i++){
      // generado por copilot
      const cols = filas[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);// Separa una fila de CSV en columnas respetando comas dentro de comillas
      labels.push(cols[1].replace(/"/g,''));          // track_name
      valores.push(parseFloat(cols[14]));            // track_duration_min

      // Generar color aleatorio por copilot
      const r = Math.floor(Math.random()*256);
      const g = Math.floor(Math.random()*256);
      const b = Math.floor(Math.random()*256);
      colores.push(`rgb(${r}, ${g}, ${b})`);
    }

    const data = {
      labels: labels,
      datasets: [{
        label: 'Duración de canciones (min)',
        data: valores,
        backgroundColor: colores,
        borderColor: '#1E88E5',
        borderWidth: 1
      }]
    };

    const config = {
      type: 'bar',
      data: data,
      options: {}
    };

    new Chart(document.getElementById('spotify_grafica'), config);
  });