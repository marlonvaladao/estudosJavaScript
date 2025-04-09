const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número: ', valor => {
    const num = parseInt(valor);
    let fatorial = 1;
  
    for (let i = 2; i <= num; i++) {
      fatorial *= i;
    }
  
    console.log(`Fatorial de ${num} é: ${fatorial}`);
    readline.close();
  });
  