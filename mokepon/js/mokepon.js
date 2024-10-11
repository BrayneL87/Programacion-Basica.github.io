let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

let botonFuego = document.getElementById('boton-fuego')
botonFuego.addEventListener('click', artaqueFuego)
let botonAgua = document.getElementById('boton-agua')
botonAgua.addEventListener('click', artaqueAgua)
let botonTierra = document.getElementById('boton-tierra')
botonTierra.addEventListener('click', artaqueTierra)

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
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("GANASTE")
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje("GANASTE")
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje("GANASTE")
    }else{
        crearMensaje("PERDISTE")
    }
}

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado

    sectionMensaje.appendChild(parrafo)

}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
    }

//funcion para colocar el scrit en la parte de arriba
window.addEventListener('load', iniciarJuego)