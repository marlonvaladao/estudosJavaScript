const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Tipo de carne (F - File Duplo, A - Alcatra, P - Picanha): ', tipo => {
    readline.question('Quantidade (kg): ', q => {
      readline.question('Pagamento com cartão Tabajara? (s/n): ', cartao => {
        const carne = tipo.toUpperCase();
        const kg = parseFloat(q);
        const usaCartao = cartao.toLowerCase() === 's';
  
        let precoKg = 0;
        let nomeCarne = '';
  
        if (carne === 'F') {
          precoKg = kg <= 5 ? 4.9 : 5.8;
          nomeCarne = 'File Duplo';
        } else if (carne === 'A') {
          precoKg = kg <= 5 ? 5.9 : 6.8;
          nomeCarne = 'Alcatra';
        } else if (carne === 'P') {
          precoKg = kg <= 5 ? 6.9 : 7.8;
          nomeCarne = 'Picanha';
        }
  
        const total = precoKg * kg;
        const desconto = usaCartao ? total * 0.05 : 0;
        const valorFinal = total - desconto;
  
        console.log(`Tipo de carne: ${nomeCarne}`);
        console.log(`Quantidade: ${kg} kg`);
        console.log(`Preço total: R$ ${total.toFixed(2)}`);
        console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
        console.log(`Valor a pagar: R$ ${valorFinal.toFixed(2)}`);
        readline.close();
      });
    });
  });
  