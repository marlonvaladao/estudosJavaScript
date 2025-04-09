const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número inteiro positivo: ', num => {
    const n = parseInt(num);
    if (n < 0 || isNaN(n)) {
      console.log('Número inválido.');
    } else {
      let fatorial = 1;
      for (let i = 2; i <= n; i++) {
        fatorial *= i;
      }
      console.log(`Fatorial de ${n} é: ${fatorial}`);
    }
    readline.close();
  });
  