const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let numeros = [];
  let contador = 0;
  
  function perguntar() {
    if (contador === 5) {
      console.log('Números digitados:', numeros);
      readline.close();
      return;
    }
  
    readline.question(`Digite o número ${contador + 1}: `, valor => {
      numeros.push(parseFloat(valor));
      contador++;
      perguntar();
    });
  }
  
  perguntar();
  