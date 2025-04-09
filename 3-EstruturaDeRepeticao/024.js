const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function pedirDados() {
    readline.question('Digite o nome de usuário: ', usuario => {
      readline.question('Digite a senha: ', senha => {
        if (usuario === senha) {
          console.log('Erro: a senha deve ser diferente do usuário.');
          pedirDados();
        } else {
          console.log('Cadastro realizado com sucesso!');
          readline.close();
        }
      });
    });
  }
  
  pedirDados();
  