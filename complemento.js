
function mostrar(mensaje){    
    document.querySelector("#resultado").innerHTML=mensaje;
}

function actualizarPantalla(){
    
    document.getElementById("vacio").style.display="none";
    document.getElementById("imagenSinMensaje").style.display="none";
    document.getElementById("sinMensaje").style.display="none";
    document.getElementById("descpripcionSinMensaje").style.display="none";
    document.getElementById("resultado").style.display="inline-block";
    document.getElementById("copiar").style.display="inline-block";       

}

function encriptarTexto(){
    let mensaje = document.querySelector("#texto").value;
    let secreto="";

    if(mensaje!="" && !/[A-Z]/g.test(mensaje) && !/[á-ú]/g.test(mensaje) && mensaje.trim().length){
        for(let i=0;i<mensaje.length;i++){
            switch(mensaje[i]){
                case "a":
                    secreto+="ai";
                    break;
                case "e":
                    secreto+="enter";
                    break;
                case "i":
                    secreto+="imes";
                    break;
                case "o":
                    secreto+="ober";
                    break;
                case "u":
                    secreto+="ufat";
                    break;
                default:
                    secreto+=mensaje[i];
            }
        }

        actualizarPantalla();
        mostrar(secreto);
        document.querySelector('#texto').value='';
    }

    else alert("Por favor, ingrese un mensaje en minúsculas y sin acentos");
}

function desencriptarTexto(){
    let mensaje = document.querySelector("#texto").value;
    let codigos= [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g];
    let letras = ['a','e','i','o','u'];
    
    if(mensaje!="" && !/[A-Z]/g.test(mensaje) && !/[á-ú]/g.test(mensaje) && mensaje.trim().length){
        for(let i=0;i<5;i++){
            mensaje=mensaje.replaceAll(codigos[i], letras[i]);
        }

        actualizarPantalla();
        mostrar(mensaje);
        document.querySelector('#texto').value='';
    }

    else alert("Por favor, ingrese un mensaje en minúsculas y sin acentos");
    
}

function copiarTextoEncriptado(){
    let texto = document.getElementById("resultado");
    texto.select();
    texto.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(texto.value);
}

let encriptar = document.getElementById("encriptar");
let desencriptar = document.getElementById("desencriptar");
let copiar = document.getElementById("copiar");

copiar.onclick = copiarTextoEncriptado;
encriptar.onclick = encriptarTexto;
desencriptar.onclick = desencriptarTexto;