const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite o primeiro número inteiro: ', n1 => {
    readline.question('Digite o segundo número inteiro: ', n2 => {
      readline.question('Digite um número real: ', n3 => {
        const a = (2 * parseInt(n1)) * (parseInt(n2) / 2);
        const b = (3 * parseInt(n1)) + parseFloat(n3);
        const c = Math.pow(parseFloat(n3), 3);
  
        console.log(`a) Produto do dobro do primeiro com metade do segundo: ${a}`);
        console.log(`b) Soma do triplo do primeiro com o terceiro: ${b}`);
        console.log(`c) Terceiro número elevado ao cubo: ${c}`);
        readline.close();
      });
    });
  });
  