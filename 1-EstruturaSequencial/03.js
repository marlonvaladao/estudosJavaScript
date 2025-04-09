const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite o primeiro número: ', numero1 => {
    readline.question('Digite o segundo número: ', numero2 => {
      const soma = parseFloat(numero1) + parseFloat(numero2);
      console.log(`A soma dos dois números é: ${soma}`);
      readline.close();
    });
  });
  