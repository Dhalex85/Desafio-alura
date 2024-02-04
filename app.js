let inText = document.getElementById("entradaText");
let btnEncriptar = document.getElementById("btnEncriptar");
let btnDesencriptar = document.getElementById("btnDesencriptar");
let btnCopy = document.getElementById("btnCopy");
let mostrar = document.getElementById("textoDerecha");
let imagen = document.getElementById("imgPersona");
let label = document.getElementById("etiqueta");
let textoInicial = mostrar.value;
let oculto = [
    ['e', 'enter'],
    ['o', 'ober'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['u', 'ufat'],
];

function ajustarElementos(out){
    inText.value ="";
    imagen.style.display = "none";
    label.style.display = "none";
    document.querySelector('#textoDerecha').value = out;
    document.getElementById('btnCopy').removeAttribute("style");
}

function encriptar(){
    let mensaje = inText.value.toLowerCase();

    if(mensaje.length != 0){
        for(let i=0 ; i < oculto.length ; i++){
            if(mensaje.includes(oculto[i][0])){
                mensaje = mensaje.replaceAll(oculto[i][0], oculto[i][1]);
            }
        }

        ajustarElementos(mensaje);
    } else {
        alert("Ingrese texto");
    }

}

function desencriptar(entrada){
    let mensaje = inText.value.toLowerCase();

    if(mensaje.length != 0){
        for(let i=0 ; i < oculto.length ; i++){
            if(mensaje.includes(oculto[i][1])){
                mensaje = mensaje.replaceAll(oculto[i][1], oculto[i][0]);
            }
        }

        ajustarElementos(mensaje);
    } else {
        alert("Ingrese texto");
    }

}

function copiar(){
    textoDerecha.select();
    let copiado = document.execCommand("copy");
    mostrar.value = textoInicial;
    btnCopy.style.display = "none";
    imagen.style.display="block";
    label.style.display="Block";
    inText.focus();
    
}
