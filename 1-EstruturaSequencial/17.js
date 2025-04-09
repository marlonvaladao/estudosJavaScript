const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Informe o tamanho da área em m²: ', area => {
    const cobertura = 6;
    const folga = 1.1;
    const totalLitros = (parseFloat(area) * folga) / cobertura;
  
    const latas = Math.ceil(totalLitros / 18);
    const galoes = Math.ceil(totalLitros / 3.6);
  
    const precoLatas = latas * 80;
    const precoGaloes = galoes * 25;
  
    const latasMistura = Math.floor(totalLitros / 18);
    const resto = totalLitros % 18;
    const galoesMistura = Math.ceil(resto / 3.6);
    const precoMistura = (latasMistura * 80) + (galoesMistura * 25);
  
    console.log(`Opção 1: ${latas} lata(s) - R$ ${precoLatas.toFixed(2)}`);
    console.log(`Opção 2: ${galoes} galão(ões) - R$ ${precoGaloes.toFixed(2)}`);
    console.log(`Opção 3: ${latasMistura} lata(s) e ${galoesMistura} galão(ões) - R$ ${precoMistura.toFixed(2)}`);
    readline.close();
  });
  