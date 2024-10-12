let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigos = 3

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

let botonFuego = document.getElementById('boton-fuego')
botonFuego.addEventListener('click', artaqueFuego)
let botonAgua = document.getElementById('boton-agua')
botonAgua.addEventListener('click', artaqueAgua)
let botonTierra = document.getElementById('boton-tierra')
botonTierra.addEventListener('click', artaqueTierra)

let botonReiniciar = document.getElementById('boton-reinicar')
botonReiniciar.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador =document.getElementById('mascota-juador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else{
        alert('Selecciona una Mascota')
    }

    seleccionarMascotaEnemigo()

}

        //Mascota enemigo
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatoria == 1) {
        //hipodoge
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if (mascotaAleatoria == 2){
        //capipeo
         spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else if(mascotaAleatoria == 3){
        //ratigueya
         spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }  

}

function artaqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}

function artaqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()

}
function artaqueTierra(){
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}
// Aleatrio funciona para conectar las variables y realizar los llamados
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = ' FUEGO'
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    }else{
        ataqueEnemigo = 'TIERRA'
    }   

    combate()

}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigos')

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE")
        vidasEnemigos--
        spanVidasEnemigo.innerHTML = vidasEnemigos
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje("GANASTE")
        vidasEnemigos--
        spanVidasEnemigo.innerHTML = vidasEnemigos
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje("GANASTE")
        vidasEnemigos--
        spanVidasEnemigo.innerHTML = vidasEnemigos
    }else{
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador        
    }

    revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigos == 0) {
        //GANAMOS 
        crearMensajeFinal("FELICITACIONES GANASTE 😍🎉😎")
    }else if(vidasJugador == 0){
        //PERDIMOS
        crearMensajeFinal('Lo siento perdiste 🤦‍♂️😢')
    }
}

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado

    sectionMensaje.appendChild(parrafo)

}

function crearMensajeFinal(resultadoFinal){
    let sectionMensaje = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensaje.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true 
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true 

}

function reiniciarJuego(){
    location.reload() // se utiliza para reiniciar la pagina que estas utilizando
}


function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
    }

//funcion para colocar el scrit en la parte de arriba
window.addEventListener('load', iniciarJuego)