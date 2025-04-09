const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let soma = 0;
  let qtd = 0;
  
  function perguntar() {
    readline.question('Digite uma idade (0 para sair): ', idade => {
      const i = parseInt(idade);
      if (i === 0) {
        const media = qtd > 0 ? soma / qtd : 0;
        console.log(`Média das idades: ${media.toFixed(2)}`);
        readline.close();
      } else {
        soma += i;
        qtd++;
        perguntar();
      }
    });
  }
  
  perguntar();
  