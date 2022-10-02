function encrip (){
    var texto = document.querySelector("#input-texto").value;
    var tCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".text-salida").value = tCifrado;
    document.querySelector("#input-texto").value;

}

var boton1 = document.querySelector("#btn-encrip");
boton1.onclick = encrip;

function descrip (){
    var texto = document.querySelector("#input-texto").value;
    var tCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".text-salida").value = tCifrado;
    document.querySelector("#input-texto").value;

}

var boton2 = document.querySelector("#btn-descrip");
boton2.onclick = descrip;

document.getElementById("btn-copy").onclick = function() {    
    copytext.textContent = document.getElementById(".text-salida").value;
 
    document.body.appendChild(copytext);
    copyTextarea.select();
    document.execCommand('btn-copy');
    document.body.removeChild(copytext);
}