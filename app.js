let numeroSecreto = 0; 
let intentos = 0;
let numeroSorteados = []; 
let numeroMaximo = 10;
console.log(numeroSecreto)

function asígnarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto; 
    return; 
}


function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value); 
    console.log(intentos)
    if (numeroUsuario === numeroSecreto) {
        asígnarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ? "vez" : "veces"}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asígnarTextoElemento('p', 'el numero secreto es menor');
        } else {
            asígnarTextoElemento('p','el numero secreto es mayor');
        }
        intentos++;    
        limpiarCaja ();
    }    
    return;

}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';  
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(numeroSorteados);
    //  si ya sorteamos todos los numeros
    if(numeroSorteados.length==numeroMaximo) {
        asígnarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {

        // si el numero generado esta en la lista
        if(numeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numeroSorteados.push(numeroGenerado);
            return numeroGenerado; 
        } 
    }   

}

function condicionesIniciales() {
    asígnarTextoElemento("h1","Juego del numero secreto!");
    asígnarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); 
    intentos = 1;

}


function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // indicar mensajes de intervalos de numeros
    // generar numero aleatorio
    // inicializar numeros de intentos
    condicionesIniciales();
    // deshabilitar boton nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
