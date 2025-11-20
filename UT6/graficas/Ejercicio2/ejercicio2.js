const ctx = document.getElementById('salario').getContext('2d');

let salario = 13000;
let aumento = 0.03;

let valores = []; // Aquí se guardarán los salarios
let labels = [];  // Aquí se guardarán los años

for (let i = 0; i < 10; i++) { // 10 años de progresión
    valores.push(salario);
    labels.push(`Año ${i + 1}`);
    salario = salario * (1 + aumento); // aplicamos el aumento
}

const data = {
  labels: labels,
  datasets: [{
    label: 'Salario anual',
    data: valores,
    backgroundColor: 'rgba(30, 136, 229, 0.2)',
    borderColor: '#1E88E5',
    borderWidth: 1
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};

new Chart(ctx, config);

