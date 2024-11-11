let BicicletaFactory = function(cor, marcha, aro){
    //lógica...
    //requisição http...
    return{
        cor,
        marcha,
        aro,
        pedalar(){console.log('Método pedalar execultado')}
    }
} 

let Bicicleta = BicicletaFactory('Vermelha', 'Única', 15)
console.log(Bicicleta)

let Bicicleta2 = BicicletaFactory('Branca', '18', 26)
console.log(Bicicleta2)

let Bicicleta3 = BicicletaFactory('Preta', '21', 29)
console.log(Bicicleta3)
