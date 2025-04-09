const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let soma = 0;
  let contador = 0;
  
  function perguntar() {
    if (contador === 5) {
      const media = soma / 5;
      console.log(`Soma: ${soma}, Média: ${media.toFixed(2)}`);
      readline.close();
      return;
    }
  
    readline.question(`Digite o número ${contador + 1}: `, valor => {
      soma += parseFloat(valor);
      contador++;
      perguntar();
    });
  }
  
  perguntar();
  