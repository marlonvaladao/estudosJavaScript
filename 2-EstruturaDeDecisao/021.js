const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Valor do saque (10 a 600): ', valor => {
    let saque = parseInt(valor);
    if (saque < 10 || saque > 600) return console.log('Valor inválido.');
  
    const notas = [100, 50, 10, 5, 1];
    notas.forEach(nota => {
      const qtd = Math.floor(saque / nota);
      if (qtd) console.log(`${qtd} nota(s) de R$${nota}`);
      saque %= nota;
    });
  
    readline.close();
  });
  