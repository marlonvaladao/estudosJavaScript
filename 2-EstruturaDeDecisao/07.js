const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let numeros = [];
  
  function pedirNumero(n) {
    readline.question(`Digite o número ${n}: `, valor => {
      numeros.push(parseFloat(valor));
      if (n === 3) {
        console.log(`Maior número: ${Math.max(...numeros)}`);
        console.log(`Menor número: ${Math.min(...numeros)}`);
        readline.close();
      } else {
        pedirNumero(n + 1);
      }
    });
  }
  
  pedirNumero(1);
  