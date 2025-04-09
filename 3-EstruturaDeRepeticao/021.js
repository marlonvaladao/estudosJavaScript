const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número: ', num => {
    const n = parseInt(num);
    for (let i = 1; i <= 10; i++) {
      console.log(`${n} x ${i} = ${n * i}`);
    }
    readline.close();
  });
  