let Carro = function(){  //A sintax é parecida com a sintaxe de classe
    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0
    this.velocidadeMaxima = 180

    this.acelerar = function(){
        //this.velocidadeAtual += 10
        let velocidade = this.getVelocidadeAtual() + 10
        this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual
    }
}

let carro = new Carro()

console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`)
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.acelerar()
console.log(`A velocidade atual é: ${carro.getVelocidadeAtual()}`)

/* ------------------------------------------------------------------------------------------------------------ */

//Encapsulamento em funções construtivas utilizando variáveis
let Carro2 = function(){
    var velocidadeMaxima = 150  // Para tornar um atributo privado, pode-se declarar como uma variável, pois assim ela só poderá ser acessada dentro do escopo da função

    this.cor = 'Prata'
    this.modelo = 'Corsa'
    this.velocidadeAtual = 0

    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual() + 50
        if(velocidade > velocidadeMaxima){
            velocidade = velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)
    }

    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual
    }
}

let carro2 = new Carro2()

console.log(`A velocidade atual é: ${carro2.velocidadeAtual}`)
carro2.acelerar()
console.log(`A velocidade atual é: ${carro2.velocidadeAtual}`)
carro2.acelerar()
console.log(`A velocidade atual é: ${carro2.velocidadeAtual}`)
carro2.acelerar()
carro2.velocidadeMaxima = 200  //Não aplicará nunhuma alteração, pois está fora do escopo da função
carro2.acelerar()
console.log(`A velocidade atual é: ${carro2.velocidadeAtual}`)
carro2.acelerar()
console.log(`A velocidade atual é: ${carro2.velocidadeAtual}`)

/* ------------------------------------------------------------------------------------------------------------ */

//Encapsulamento de função utilizando variáveis
let Carro3 = function(){
    var velocidadeMaxima = 200
    var quilometrosRodados = 0

    this.cor = 'Preto'
    this.modelo = 'Corolla'
    this.velocidadeAtual = 0

    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual() + 50
        if(velocidade > velocidadeMaxima){
            velocidade = velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)

        setQuilometrosRodados(0.07)
        console.log(quilometrosRodados)
    }

    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual
    }

    var setQuilometrosRodados = function(q){  //Encapsulando a função
        quilometrosRodados += q
    }
}

let carro3 = new Carro3()

console.log(`A velocidade atual é: ${carro3.velocidadeAtual}`)
carro3.acelerar()
console.log(`A velocidade atual é: ${carro3.velocidadeAtual}`)
carro3.acelerar()
console.log(`A velocidade atual é: ${carro3.velocidadeAtual}`)
carro3.acelerar()
carro2.velocidadeMaxima = 250
carro3.acelerar()
console.log(`A velocidade atual é: ${carro3.velocidadeAtual}`)
carro3.acelerar()
console.log(`A velocidade atual é: ${carro3.velocidadeAtual}`)