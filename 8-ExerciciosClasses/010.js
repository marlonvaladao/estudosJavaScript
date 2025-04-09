class Pessoa {
    constructor(nome, telefone, email) {
      this.nome = nome;
      this.telefone = telefone;
      this.email = email;
    }
  
    exibir() {
      console.log(`${this.nome} - Tel: ${this.telefone} - Email: ${this.email}`);
    }
  }
  
  class Agenda {
    constructor() {
      this.contatos = [];
    }
  
    adicionar(pessoa) {
      this.contatos.push(pessoa);
    }
  
    remover(nome) {
      this.contatos = this.contatos.filter(p => p.nome !== nome);
    }
  
    listar() {
      console.log('Contatos da agenda:');
      this.contatos.forEach(p => p.exibir());
    }
  }
  
  // Exemplo:
  const agenda = new Agenda();
  agenda.adicionar(new Pessoa('Marlon', '99999-9999', 'marlon@email.com'));
  agenda.adicionar(new Pessoa('Alex', '98888-8888', 'alex@email.com'));
  agenda.listar();
  agenda.remover('Alex');
  agenda.listar();
  