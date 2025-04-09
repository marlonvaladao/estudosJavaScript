const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let lista = [];
  let contador = 0;
  
  function perguntar() {
    if (contador === 10) {
      const media = lista.reduce((a, b) => a + b, 0) / 10;
      const maiores = lista.filter(n => n > media);
      const menores = lista.filter(n => n < media);
  
      console.log('Média:', media.toFixed(2));
      console.log('Maiores que a média:', maiores);
      console.log('Menores que a média:', menores);
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
  