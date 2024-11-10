/*
O encapsulamento é um dos principais pilares da Programação Orientada a Objetos (POO) e se refere ao conceito de 
ocultar os dados internos de um objeto, permitindo que eles sejam acessados e modificados somente por meio de 
métodos específicos definidos pelo próprio objeto. Em outras palavras, ele permite que o objeto controle como suas 
propriedades internas são manipuladas, evitando que partes externas do código façam modificações não autorizadas ou 
inconsistentes.

Em JavaScript, o encapsulamento pode ser implementado usando propriedades privadas e métodos públicos. Desde o ES2022,
 é possível declarar propriedades privadas com o símbolo #, o que torna a propriedade acessível apenas dentro da 
 própria classe.

Veja um exemplo de encapsulamento em uma classe de conta bancária:
*/

class ContaBancaria {
    #saldo; // Propriedade privada
  
    constructor(saldoInicial) {
      this.#saldo = saldoInicial; // Atribui o saldo inicial de forma privada
    }
  
    // Método público para consultar o saldo
    consultarSaldo() {
      return `Saldo: R$${this.#saldo}`;
    }
  
    // Método público para depositar um valor
    depositar(valor) {
      if (valor > 0) {
        this.#saldo += valor;
      }
    }
  
    // Método público para sacar um valor
    sacar(valor) {
      if (valor > 0 && valor <= this.#saldo) {
        this.#saldo -= valor;
      }
    }
  }
  
  const conta = new ContaBancaria(1000);
  
  // Tentativas de manipular o saldo
  conta.depositar(500);                  // Depósito válido
  console.log(conta.consultarSaldo());    // Saída: Saldo: R$1500
  
  conta.sacar(200);                       // Saque válido
  console.log(conta.consultarSaldo());    // Saída: Saldo: R$1300
  
  // Acesso direto ao saldo privado falhará
//console.log(conta.#saldo); // Erro: Propriedade privada #saldo não acessível
    
  

/*
Se o seu ambiente não suporta a sintaxe de #, você pode usar uma convenção de encapsulamento. Embora não seja 
estritamente privado, o uso de um sublinhado (_) como prefixo ajuda a indicar que a propriedade é "privada" e 
deve ser acessada apenas dentro da classe.
*/

/*class ContaBancaria {
    constructor(saldoInicial) {
      this._saldo = saldoInicial; // "Propriedade privada" usando convenção
    }
  
    // Método público para consultar o saldo
    consultarSaldo() {
      return `Saldo: R$${this._saldo}`;
    }
  
    // Método público para depositar um valor
    depositar(valor) {
      if (valor > 0) {
        this._saldo += valor;
      }
    }
  
    // Método público para sacar um valor
    sacar(valor) {
      if (valor > 0 && valor <= this._saldo) {
        this._saldo -= valor;
      }
    }
  }
  
  const conta = new ContaBancaria(1000);
  
  // Usando métodos públicos
  conta.depositar(500);
  console.log(conta.consultarSaldo());    // Saída: Saldo: R$1500
  
  conta.sacar(200);
  console.log(conta.consultarSaldo());    // Saída: Saldo: R$1300*/
  