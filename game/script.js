//Variável de vida e tempo
var vidas = 1
var tempo = 20

//Tamanho do game
var largura = 0
var altura = 0

//Tempo de criação do mosquito
var criaMosquitoTempo = 1500

//Nível
var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'facil'){
    criaMosquitoTempo = 1500
} else if(nivel === 'normal'){
    criaMosquitoTempo = 1000
} else if(nivel === 'dificil'){
    criaMosquitoTempo = 750
}

function ajustarTamanhoPalcoJogo(){
    largura = window.innerWidth
    altura = window.innerHeight
}
ajustarTamanhoPalcoJogo()

var cronometro = setInterval(function() {
    tempo -= 1
    if(tempo < 0){  //Se o tempo acabar e ainda tem vida, vence a partida
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else{
    document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

//Posição randomica do mosquito
function posicaoRandomica(){

    //Remover mosquito anterior (caso exista)
    if( document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3){ //Se as 3 vidas acabarem, o jogo acaba
            window.location.href = 'fim_de_jogo.html'
        } else{ //Se não, o jogo continua
            document.getElementById('v' + vidas).src = 'img/coracao_vazio.png'
            vidas++
        }
    }

    var positionX = Math.floor(Math.random() * largura) - 90
    var positionY = Math.floor(Math.random() * altura) - 90

    positionX = positionX < 0 ? 0 : positionX //Se a posição x for menor que 0 recebe 0, se não, recebe ela mesma
    positionY = positionY < 0 ? 0 : positionY //Se a posição y for menor que 0 recebe 0, se não, recebe ela mesma

    //criar elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito) //Adiciona o filho(mosquito) ao body
}

//Tamanho aleatório do mosquito
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

//Lado Aleatório do mosquito
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}