const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Quantidade de litros: ', litros => {
    readline.question('Tipo de combustível (A-álcool, G-gasolina): ', tipo => {
      const qtd = parseFloat(litros);
      const t = tipo.toUpperCase();
      let preco = 0, desconto = 0;
  
      if (t === 'A') {
        preco = 1.90;
        desconto = qtd <= 20 ? 0.03 : 0.05;
      } else if (t === 'G') {
        preco = 2.50;
        desconto = qtd <= 20 ? 0.04 : 0.06;
      }
  
      const total = preco * qtd;
      const valorFinal = total - (total * desconto);
      console.log(`Valor a pagar: R$ ${valorFinal.toFixed(2)}`);
      readline.close();
    });
  });
  