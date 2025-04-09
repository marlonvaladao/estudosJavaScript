const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite o primeiro número: ', n1 => {
    readline.question('Digite o segundo número: ', n2 => {
      const maior = Math.max(parseFloat(n1), parseFloat(n2));
      console.log(`O maior número é: ${maior}`);
      readline.close();
    });
  });
  