const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let soma = 0;
  let contador = 0;
  
  function pedirNumero() {
    readline.question('Digite um número (ou 0 para sair): ', numero => {
      const n = parseFloat(numero);
      if (n === 0) {
        const media = contador > 0 ? (soma / contador) : 0;
        console.log(`Média dos números digitados: ${media.toFixed(2)}`);
        readline.close();
      } else {
        soma += n;
        contador++;
        pedirNumero();
      }
    });
  }
  
  pedirNumero();
  