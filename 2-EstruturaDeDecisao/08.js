const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  let precos = [];
  
  function perguntarPreco(n) {
    readline.question(`Digite o preço do produto ${n}: `, preco => {
      precos.push(parseFloat(preco));
      if (n === 3) {
        const maisBarato = Math.min(...precos);
        console.log(`Você deve comprar o produto de R$ ${maisBarato}`);
        readline.close();
      } else {
        perguntarPreco(n + 1);
      }
    });
  }
  
  perguntarPreco(1);
  