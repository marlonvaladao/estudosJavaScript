const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Quantos números você quer informar? ', qtd => {
    const total = parseInt(qtd);
    let soma = 0;
    let contador = 0;
  
    function pedirNumero() {
      if (contador === total) {
        const media = soma / total;
        console.log(`Média: ${media.toFixed(2)}`);
        readline.close();
        return;
      }
  
      readline.question(`Digite o número ${contador + 1}: `, num => {
        soma += parseFloat(num);
        contador++;
        pedirNumero();
      });
    }
  
    pedirNumero();
  });
  