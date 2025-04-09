const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let positivos = 0;
  let negativos = 0;
  let somaPositivos = 0;
  let contador = 0;
  
  function perguntar() {
    if (contador === 20) {
      const media = positivos > 0 ? somaPositivos / positivos : 0;
      console.log(`Números positivos: ${positivos}`);
      console.log(`Números negativos: ${negativos}`);
      console.log(`Média dos positivos: ${media.toFixed(2)}`);
      readline.close();
      return;
    }
  
    readline.question(`Digite o número ${contador + 1}: `, valor => {
      const num = parseFloat(valor);
      if (num >= 0) {
        positivos++;
        somaPositivos += num;
      } else {
        negativos++;
      }
      contador++;
      perguntar();
    });
  }
  
  perguntar();
  