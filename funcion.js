var n1;
var n2;
var operacion;
function init(){
    var resultado = document.getElementById("resultado");
    var borrar = document.getElementById('borrar');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var cero = document.getElementById('cero');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
 
uno.onclick = function(e){
    resultado.textContent = resultado.textContent + "1";
} 
dos.onclick = function(e){
    resultado.textContent = resultado.textContent + "2";
} 
tres.onclick = function(e){
    resultado.textContent = resultado.textContent + "3";
} 
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent + "4";
} 
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent + "5";
} 
seis.onclick = function(e){
    resultado.textContent = resultado.textContent + "6";
} 
siete.onclick = function(e){
    resultado.textContent = resultado.textContent + "7";
} 

ocho.onclick = function(e){
    resultado.textContent = resultado.textContent + "8";

} 
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent + "9";
} 
cero.onclick = function(e){
    resultado.textContent = resultado.textContent + "0";

} 
suma.onclick = function(e){
    n1 = resultado.textContent;
    operacion = "+";
    limpiar();

} 
resta.onclick = function(e){
    n1 = resultado.textContent;
    operacion = "-";
    limpiar();

} 
multiplicacion.onclick = function(e){
    n1 = resultado.textContent;
    operacion = "*";
    limpiar();

} 
division.onclick = function(e){
    n1 = resultado.textContent;
    operacion = "/";
    limpiar();

} 

igual.onclick = function(e){
   n2 = resultado.textContent;
   resultado.textContent = resolver();
}
function limpiar(){
    resultado.textContent = "";
}
borrar.onclick = function(e){
    resetear ();
}
function resetear(){
    resultado.textContent = "";
    n1 = 0;
    n2 = 0;
    operacion = "";
}
 function resolver(){
    var res =0;
    switch(operacion){
        case "+":
            res = parseFloat(n1) + parseFloat(n2);
            break;
            case "-":
                res =parseFloat(n1) - parseFloat(n2);
                break;
                case "*":
                res = parseFloat(n1) * parseFloat(n2);
                break;
                case "/":
                res =parseFloat(n1) / parseFloat(n2);
                break;

    }
    return res;
 }
 resetear();
 resultado.textContent;
}







