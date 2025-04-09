const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let soma = 0;
  let quantidade = 0;
  
  function perguntar() {
    readline.question('Digite um número (0 para sair): ', valor => {
      const num = parseFloat(valor);
      if (num === 0) {
        const media = quantidade > 0 ? soma / quantidade : 0;
        console.log(`Média: ${media.toFixed(2)}`);
        readline.close();
      } else {
        soma += num;
        quantidade++;
        perguntar();
      }
    });
  }
  
  perguntar();
  