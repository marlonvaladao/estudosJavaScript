function ehQuadradoMagico(matriz) {
    const somaIdeal = matriz[0].reduce((a, b) => a + b, 0);
  
    for (let i = 0; i < 3; i++) {
      const somaLinha = matriz[i].reduce((a, b) => a + b, 0);
      const somaColuna = matriz.map(linha => linha[i]).reduce((a, b) => a + b, 0);
      if (somaLinha !== somaIdeal || somaColuna !== somaIdeal) return false;
    }
  
    const diag1 = matriz[0][0] + matriz[1][1] + matriz[2][2];
    const diag2 = matriz[0][2] + matriz[1][1] + matriz[2][0];
    return diag1 === somaIdeal && diag2 === somaIdeal;
  }
  
  // Exemplo:
  const matriz = [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2]
  ];
  
  console.log('É quadrado mágico?', ehQuadradoMagico(matriz));
  