const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número: ', valor => {
    const num = parseInt(valor);
    console.log(`Divisores de ${num}:`);
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) console.log(i);
    }
    readline.close();
  });
  