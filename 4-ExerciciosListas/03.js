const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let notas = [];
  let contador = 0;
  
  function perguntar() {
    if (contador === 4) {
      const media = notas.reduce((a, b) => a + b, 0) / 4;
      console.log('Notas:', notas);
      console.log('Média:', media.toFixed(2));
      readline.close();
      return;
    }
  
    readline.question(`Digite a nota ${contador + 1}: `, valor => {
      notas.push(parseFloat(valor));
      contador++;
      perguntar();
    });
  }
  
  perguntar();
  