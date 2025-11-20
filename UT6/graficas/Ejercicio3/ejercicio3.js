const ctx = document.getElementById('salario').getContext('2d');

let salario = 13000;
let aumento = 0.03;

let valores = [];      // salarios con aumento porcentual
let valoresFijos = []; // salarios con aumento fijo de 60€
let labels = [];       // años

let salarioFijo = 13000;

for (let i = 0; i < 10; i++) { // 10 años de progresión
    valores.push(salario);
    valoresFijos.push(salarioFijo);
    labels.push(`Año ${i + 1}`);

    salario = salario * (1 + aumento); // aumento porcentual
    salarioFijo += 60;                 // aumento fijo de 60€
}

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Salario anual (3% aumento)',
      data: valores,
      backgroundColor: 'rgba(30, 136, 229, 0.2)',
      borderColor: '#1E88E5',
      borderWidth: 1
    },
    {
      label: 'Salario anual (+60€ fijo)',
      data: valoresFijos,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: '#FF6384',
      borderWidth: 1
    }
  ]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

new Chart(ctx, config);

