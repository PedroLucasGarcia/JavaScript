//Modelo de objeto
class ContaBancaria {

    //Atributos
    constructor(){
        this.agencia = 1075 //O operador this tem a inteligência de fazer um atributo(agencia), seja conectado ao contêxto do objeto(ContaBancaria)
        this.conta = 276583
        this.saldo = 100
        this.limite = 500
    }

    // Métodos
    depositar(valorDeposito){
        this.saldo += valorDeposito;
    }
    sacar(valorSaque){
        this.saldo -= valorSaque;
    }
    consultarSaldo(){
        return this.saldo;
    }
}

// Instanciando um objeto a partir da classe ContaBancaria
let contaBancaria1 = new ContaBancaria();
let contaBancaria2 = new ContaBancaria();

console.log(`Saldo inicial da conta bancária 1: R$${contaBancaria1.consultarSaldo()}`);
contaBancaria1.depositar(200);
console.log(`Saldo após deposito: R$${contaBancaria1.consultarSaldo()}`);
contaBancaria1.sacar(250);
console.log(`Saldo após saque: R$${contaBancaria1.consultarSaldo()}`);

console.log(`Saldo inicial da conta bancária 2: R$${contaBancaria2.consultarSaldo()}`)