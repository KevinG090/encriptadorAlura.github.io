// texto
let input = document.querySelector(".input");
const output = document.querySelector(".output");
// botones
const botonEncritptar = document.querySelector("#Encriptar");
const botonDesencritptar = document.querySelector("#Desencriptar");
const botonCopiar = document.querySelector("#copiar");
// cambio estilos
const imagenMuñeco = document.querySelector("#imagen-muñeco");
const textoOutput = document.querySelector("#texto-output");
const containerOutput = document.querySelector(".container-output")
const divOutput = document.querySelector("#espacio-output");


const encriptar = () => {
    /* ---- OPCION 1 (for y switch) ----
    let texto = "";
    for (letra of input.value){
        letra=letra.toLowerCase()
        switch (letra) {
            case 'a':
                letra = "ai"
                texto += letra
            break;
            case 'e':
                letra = "enter"
                texto += letra
            break;
            case 'i':
                letra = "imes"
                texto += letra
            break;
            case 'o':
                letra = "ober"
                texto += letra
            break;
            case 'u':
                letra = "ufat"
                texto += letra
            break
            default:
                texto += letra;
        }
    }
    */
    let texto = input.value
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai") // debe estar aqui esta funcion
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    cambioPantalla(texto);    
}
const desencriptar = () => {
    /* link para la explicacion
    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace 
    */
    /* ---- OPCION 2 (declarar cada uno)----
    let remplazar = "";
    remplazar = /ai/gi;
    texto = texto.replace(remplazar,`a`)
    remplazar = /enter/gi;
    texto = texto.replace(remplazar,`e`)
    remplazar = /imes/gi;
    texto = texto.replace(remplazar,`i`)
    remplazar = /ober/gi;
    texto=texto.replace(remplazar,`o`)
    remplazar = /ufat/gi;
    texto = texto.replace(remplazar,`u`)
    console.log(texto)
    */
    //---- OPCION 3, definitiva ----    
    let texto = input.value
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi,"a") // debe estar aqui esta funcion
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    cambioPantalla( texto);    
}
const cambioPantalla = (texto) => {
    cambioEstilos();
    output.value=`${texto}`
    texto="";
}
const cambioEstilos = () => {
    output.rows="14"
    botonCopiar.style.display="block"
    containerOutput.style.justifyContent="normal"
    divOutput.style.width="100%"
    imagenMuñeco.style.display="none"
    textoOutput.style.display="none"
}
const copiar = () => {
    output.select();
    document.execCommand('copy');
}
botonEncritptar.addEventListener("click",()=>{
    if (input.value != ""){
        encriptar();
    }
})
botonDesencritptar.addEventListener("click",()=>{
    if (input.value != ""){
        desencriptar();
    }
})
botonCopiar.addEventListener("click",()=>{
    if (output.value != ""){
        copiar();
    }
})