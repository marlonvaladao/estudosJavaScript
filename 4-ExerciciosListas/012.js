const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let lista = [];
  let contador = 0;
  
  function perguntar() {
    if (contador === 10) {
      const impares = lista.filter(n => n % 2 !== 0);
      console.log('Números ímpares:', impares);
      readline.close();
      return;
    }
  
    readline.question(`Digite o número ${contador + 1}: `, valor => {
      lista.push(parseInt(valor));
      contador++;
      perguntar();
    });
  }
  
  perguntar();
  