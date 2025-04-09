const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let numeros = [];
  
  function pedirNumero(n) {
    if (n > 5) {
      console.log('Números digitados:', numeros);
      readline.close();
      return;
    }
  
    readline.question(`Digite o ${n}º número: `, valor => {
      numeros.push(parseFloat(valor));
      pedirNumero(n + 1);
    });
  }
  
  pedirNumero(1);
  