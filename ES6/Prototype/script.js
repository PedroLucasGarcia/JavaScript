//Object Prototype - Todos os objetos em JavaScript descendem de Object 
//__proto__ : Object 


//Avião
//Atributos: cor e modelo 
//Metodos: levantar voo

//-----------------------------------------------------------------------
//Classes
class AviaoC{
    constructor(){
        this.cor = 'Branco'
        this.modelo = 'AirBus a380'
    }
    levantarVoo(){
        console.log('Levantando voo')
    }
}

let a1 = new AviaoC()
console.log(a1)
//-----------------------------------------------------------------------
//Objeto Literal
let a2 = {
    cor: 'Azul',
    modelo: 'Boeing 787',
    levantarVoo: function(){console.log('Levantando voo')}
}

console.log(a2)
//-----------------------------------------------------------------------
//Função construtora
let AviaoF = function(){
    this.cor = 'Vermelho'
    this.modelo = 'Embraer E-Jets'
    this.levantarVoo = function(){console.log('Levantando voo')}
}

let a3 = new AviaoF()
console.log(a3)
//-----------------------------------------------------------------------
//Herança
Object.prototype.atributo4 = 'z'  //Caso exista um atributo comum para todos os objetos. Mas, cuidado! Pois todos os objetos criados terão essa informação

let animal = {atributo1: 'a'}
let vertebrado = {__proto__: animal, atributo2: 'b'}  //__proto__: object - Faz com que o objeto vertebrado herde os atributos do objeto animal
let ave = {__proto__: vertebrado, atributo3: 'c', atributo2: 'x'}  //Caso já tenha algum atributo com o mesmo nome, haverá uma sobreposição 

console.log(ave.atributo1, ave.atributo2, ave.atributo3, ave.atributo4)