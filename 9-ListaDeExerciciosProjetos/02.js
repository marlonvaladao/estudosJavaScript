const fs = require('fs');

function extrairPesquisaGoogle(url) {
  const match = url.match(/q=([^&]+)/);
  if (match && match[1]) {
    return decodeURIComponent(match[1].replace(/\+/g, ' '));
  }
  return null;
}

fs.readFile('access.log', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo access.log:', err);
    return;
  }

  const linhas = data.split('\n');
  const buscas = {};

  linhas.forEach(linha => {
    const matchGoogle = linha.match(/https?:\/\/www\.google\.[^ ]+\/search\?q=[^"]+/);
    if (matchGoogle) {
      const busca = extrairPesquisaGoogle(matchGoogle[0]);
      if (busca) {
        buscas[busca] = (buscas[busca] || 0) + 1;
      }
    }
  });

  const ordenado = Object.entries(buscas)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10); // Top 10

  console.log('Top pesquisas do Google que levaram visitantes ao site:\n');
  ordenado.forEach(([termo, qtd], i) => {
    console.log(`${i + 1}. ${termo} - ${qtd} acesso(s)`);
  });
});
