const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Quantos termos da sequência? ', termo => {
    let n = parseInt(termo);
    let a = 0, b = 1;
  
    console.log('Sequência de Fibonacci:');
    for (let i = 0; i < n; i++) {
      console.log(a);
      [a, b] = [b, a + b];
    }
  
    readline.close();
  });
  