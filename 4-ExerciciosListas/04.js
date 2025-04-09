const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let lista = [];
  let contador = 0;
  
  function perguntar() {
    if (contador === 20) {
      console.log('Números na ordem inversa:', lista.reverse());
      readline.close();
      return;
    }
  
    readline.question(`Digite o número ${contador + 1}: `, valor => {
      lista.push(parseFloat(valor));
      contador++;
      perguntar();
    });
  }
  
  perguntar();
  