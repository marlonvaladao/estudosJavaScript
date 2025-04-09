const pessoas = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 32 },
    { nome: 'Pedro', idade: 28 }
  ];
  
  const maisVelho = pessoas.reduce((velho, p) => p.idade > velho.idade ? p : velho);
  console.log(`Mais velho: ${maisVelho.nome} (${maisVelho.idade} anos)`);
  