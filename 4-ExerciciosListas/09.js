const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let numeros = [];
  let contador = 0;
  
  function perguntar() {
    if (contador === 10) {
      numeros.forEach((n, i) => {
        if (n % 2 === 0) {
          console.log(`Número par ${n} na posição ${i}`);
        }
      });
      readline.close();
      return;
    }
  
    readline.question(`Digite o número ${contador + 1}: `, valor => {
      numeros.push(parseInt(valor));
      contador++;
      perguntar();
    });
  }
  
  perguntar();
  