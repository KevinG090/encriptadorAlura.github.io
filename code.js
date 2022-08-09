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

// output.style.rows="4"
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
const codificar = (accion)=>{
    if (input.value == "" ){
        alert("para encriptar necesita que escribas algo")
    }else {
        for (let i = 0; i < input.value.length; i++) {
            if (verificar(input.value.substring(i, i + 1))==false){
                output.value="El texto no se encuentra escrito correctamente"
                break
            }
            else{
                accion();  
            }
        }
    }
}
const verificar=(i)=> {
    i=i.toLowerCase()
    // verifica los caracteres uno por uno
    if (i.charCodeAt()>96&&i.charCodeAt()<123||i.charCodeAt()==46||i.charCodeAt()==10||i.charCodeAt()==32||i.charCodeAt()==44||i.charCodeAt()>47&&i.charCodeAt()<58) {
        return true;
    }
    alert("No usar: tildes, mayúsculas, caracteres especiales");
    return false;
    
}
// const verificar = (e) => {
//     key= e.keyCode || e.which;
//     tecla = String.fromCharCode(key).toString();
//     letras=" abcdefghijklmnopqrstuvwxyz"
//     especiales= "8-37-38-46-164";
//     tecla_especial=true;
//     for (var i in especiales){
//         if (key==especiales[i]){
//             tecla_especial = false;
//             break;
//         }
//     }
//     if(letras.indexOf(tecla)== -1 && !tecla_especial){
//         return false;
//     }
//     return tecla_especial
// }
botonEncritptar.addEventListener("click",()=>{
    codificar(encriptar)
})
botonDesencritptar.addEventListener("click",()=>{
    codificar(desencriptar)
})
botonCopiar.addEventListener("click",()=>{
    if (output.value != ""){
        copiar();
    }
})

