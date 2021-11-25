function limpar(){
    document.getElementById("x").value = "";
    document.getElementById("y").value = "";
    document.getElementById("coefieciente").value = "";
    document.getElementById("display").value = "";
}

function calcularequacaodareta(){
    var m = document.getElementById("x").value;
    var pAx = Number(document.getElementById("y").value);
    var pAy = Number(document.getElementById("coefieciente").value);
    var n = pAx - (m * pAy);
    var y = n > 0 ? `+${n}` : n;

    document.getElementById("display").value = `Y = ${m}x ${y}`
}