const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let numeros = [];
  
  function pedirNumero(n) {
    readline.question(`Digite o número ${n}: `, valor => {
      numeros.push(parseFloat(valor));
      if (n === 3) {
        numeros.sort((a, b) => b - a);
        console.log(`Ordem decrescente: ${numeros.join(', ')}`);
        readline.close();
      } else {
        pedirNumero(n + 1);
      }
    });
  }
  
  pedirNumero(1);
  