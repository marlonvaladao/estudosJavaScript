const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Kg de morango: ', m => {
    readline.question('Kg de maçã: ', ma => {
      const kgMorango = parseFloat(m);
      const kgMaca = parseFloat(ma);
  
      const precoMorango = kgMorango <= 5 ? 2.5 : 2.2;
      const precoMaca = kgMaca <= 5 ? 1.8 : 1.5;
  
      const total = (kgMorango * precoMorango) + (kgMaca * precoMaca);
      const desconto = (kgMorango + kgMaca > 8 || total > 25) ? 0.1 : 0;
  
      const valorFinal = total - (total * desconto);
      console.log(`Valor a pagar: R$ ${valorFinal.toFixed(2)}`);
      readline.close();
    });
  });
  