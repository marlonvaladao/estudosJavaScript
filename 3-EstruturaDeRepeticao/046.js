const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite um número: ', valor => {
    const num = parseInt(valor);
    let soma = 0;
  
    for (let i = 1; i < num; i++) {
      if (num % i === 0) soma += i;
    }
  
    console.log(soma === num ? 'Número perfeito!' : 'Não é perfeito.');
    readline.close();
  });
  