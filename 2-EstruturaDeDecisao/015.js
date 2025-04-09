const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let lados = [];
  
  function pedirLado(n) {
    readline.question(`Digite o lado ${n}: `, valor => {
      lados.push(parseFloat(valor));
      if (n === 3) {
        const [a, b, c] = lados;
        if (a + b > c && a + c > b && b + c > a) {
          if (a === b && b === c) console.log('Triângulo Equilátero');
          else if (a === b || a === c || b === c) console.log('Triângulo Isósceles');
          else console.log('Triângulo Escaleno');
        } else {
          console.log('Os valores não formam um triângulo.');
        }
        readline.close();
      } else {
        pedirLado(n + 1);
      }
    });
  }
  
  pedirLado(1);
  