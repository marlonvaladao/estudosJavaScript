const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Informe o tamanho da área em m²: ', area => {
    const litros = parseFloat(area) / 3;
    const latas = Math.ceil(litros / 18);
    const preco = latas * 80;
  
    console.log(`Você precisará de ${latas} lata(s) de tinta.`);
    console.log(`Preço total: R$ ${preco.toFixed(2)}`);
    readline.close();
  });
  