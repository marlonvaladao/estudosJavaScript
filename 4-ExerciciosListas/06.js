const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let idades = [];
  let contador = 0;
  
  function perguntar() {
    if (contador === 10) {
      const media = idades.reduce((a, b) => a + b, 0) / 10;
      const acima = idades.filter(i => i > media).length;
  
      console.log('Média das idades:', media.toFixed(2));
      console.log(`Quantidade de pessoas acima da média: ${acima}`);
      readline.close();
      return;
    }
  
    readline.question(`Digite a idade ${contador + 1}: `, idade => {
      idades.push(parseInt(idade));
      contador++;
      perguntar();
    });
  }
  
  perguntar();
  