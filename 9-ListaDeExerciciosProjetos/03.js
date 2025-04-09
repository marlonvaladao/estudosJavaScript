const fs = require('fs');

function extrairDominio(url) {
  try {
    const site = new URL(url);
    return site.hostname;
  } catch {
    return null;
  }
}

fs.readFile('squid.log', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo squid.log:', err);
    return;
  }

  const linhas = data.split('\n');
  const bloqueios = {};

  linhas.forEach((linha, i) => {
    if (linha.includes('TCP_DENIED') || linha.includes('DENIED')) {
      const partes = linha.split(/\s+/); // <-- substituído aqui
      const url = partes.find(p => p.startsWith('http://') || p.startsWith('https://'));
  
      if (!url) {
        console.log(`Linha ${i + 1} - URL não encontrada:`, linha);
        return;
      }
  
      const dominio = extrairDominio(url);
  
      if (dominio) {
        bloqueios[dominio] = (bloqueios[dominio] || 0) + 1;
      } else {
        console.log(`Linha ${i + 1} - Domínio inválido:`, url);
      }
    }
  });
  

  const ordenado = Object.entries(bloqueios)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10); // Top 10

  console.log('Top sites mais bloqueados:\n');
  ordenado.forEach(([dominio, qtd], i) => {
    console.log(`${i + 1}. ${dominio} - ${qtd} bloqueio(s)`);
  });
});
 