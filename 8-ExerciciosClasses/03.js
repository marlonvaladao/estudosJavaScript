class ContaCorrente {
    constructor(numero, titular, saldo = 0) {
      this.numero = numero;
      this.titular = titular;
      this.saldo = saldo;
    }
  
    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
      } else {
        console.log('Saldo insuficiente.');
      }
    }
  
    depositar(valor) {
      this.saldo += valor;
    }
  
    exibirSaldo() {
      console.log(`Saldo da conta ${this.numero} - ${this.titular}: R$ ${this.saldo.toFixed(2)}`);
    }
  }
  
  // Exemplo:
  const conta = new ContaCorrente('00123', 'Marlon', 1000);
  conta.sacar(200);
  conta.depositar(150);
  conta.exibirSaldo();
  