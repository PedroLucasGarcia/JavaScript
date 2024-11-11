const SERIE = 'Round 6'  //O valor inicial não pode ser reatribuído. Uma vez que a variável é definida, ela não pode apontar para outro valor.

function x(){
    const SERIE = 'Agents of S.H.I.E.L.D'  //Por ter sido declarada dentro de uma função é considerada como um outro const, diferente do declarado no escopo global.
}
x()
