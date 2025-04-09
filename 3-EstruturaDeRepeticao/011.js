const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite o primeiro número: ', a => {
    readline.question('Digite o segundo número: ', b => {
      let inicio = parseInt(a);
      let fim = parseInt(b);
  
      if (inicio > fim) [inicio, fim] = [fim, inicio];
  
      for (let i = inicio + 1; i < fim; i++) {
        console.log(i);
      }
  
      readline.close();
    });
  });
  