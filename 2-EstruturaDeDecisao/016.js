const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite o valor de A: ', a => {
    if (parseFloat(a) === 0) {
      console.log('Não é equação de segundo grau.');
      readline.close();
      return;
    }
  
    readline.question('Digite B: ', b => {
      readline.question('Digite C: ', c => {
        const A = parseFloat(a), B = parseFloat(b), C = parseFloat(c);
        const delta = B ** 2 - 4 * A * C;
  
        if (delta < 0) {
          console.log('Delta negativo. Sem raízes reais.');
        } else if (delta === 0) {
          const raiz = -B / (2 * A);
          console.log(`Uma raiz real: ${raiz}`);
        } else {
          const raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
          const raiz2 = (-B - Math.sqrt(delta)) / (2 * A);
          console.log(`Duas raízes reais: ${raiz1} e ${raiz2}`);
        }
        readline.close();
      });
    });
  });
  