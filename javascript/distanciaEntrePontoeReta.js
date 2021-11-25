function limpar(){
    document.getElementById("xPontoA").value = "";
    document.getElementById("yPontoA").value = "";
    document.getElementById("PontoA").value = "";
    document.getElementById("PontoB").value = "";
    document.getElementById("PontoC").value = "";
    document.getElementById("display").value = "";
}
function calcularDistanciadePontoeReta(){
    var xA = Number(document.getElementById("xPontoA").value);
    var yA = Number(document.getElementById("yPontoA").value);
    var A = Number(document.getElementById("PontoA").value);
    var B = Number(document.getElementById("PontoB").value);
    var C = Number(document.getElementById("PontoC").value);

    
    var primeiraParte = ((A*xA)+(B*yA)+C);
    var segundaParte = Math.sqrt((Math.pow(A,2))+(Math.pow(B,2)))
    var resultado = primeiraParte/segundaParte
    document.getElementById("display").value = resultado.toFixed(2);
}
