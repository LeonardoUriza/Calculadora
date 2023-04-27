console.log("Aplicación Calculadora");

function calcular(){
    let operandoA = document.getElementById("operandoA").value;
    let operandoB = document.getElementById("operandoB").value;
    let operacion = document.getElementById("operacion").value;
    let resultado = 0;
    
    if (operacion =="+"){
        resultado = parseInt(operandoA) + parseInt(operandoB);
    }
    if (operacion == "-"){
        resultado = operandoA - operandoB;
    }
    if (operacion == "*"){
        resultado = operandoA * operandoB;
    }
    if (operacion == "/"){
        resultado = operandoA / operandoB;
    } 
    if(isNaN(resultado)){
        resultado = "La Operación no incluye Números";
    }
    
    document.getElementById("resultado").innerHTML = `El Resultado de la Operación Solicitada es = ${resultado}`;
    console.log(`El Resultado de la Operación Solicitada es = ${resultado}`);
}