function PosicaoR() {
    var mRetaUm = Number(document.getElementById("M").value);
    var nRetaUm = Number(document.getElementById("N").value);
    var mRetaDois = Number(document.getElementById("M1").value);
    var nRetaDois = Number(document.getElementById("N1").value);

    var resultado = "";

    if(mRetaUm === mRetaDois) {
        resultado += " Paralela";
        if(nRetaUm === nRetaDois){
            resultado += " Coincidente"
        }
    }else {
        resultado += " Concorrente";
        if((mRetaUm * mRetaDois) == -1){
            resultado += " Perpendicular"
        }
    }
    document.getElementById("display").value = `${resultado}`
}
function limpar(){
    document.getElementById("X").value = ""
    document.getElementById("Y").value = ""
    document.getElementById("A").value = ""
    document.getElementById("display").value = ""
    document.getElementById("C").value = ""
    document.getElementById("B").value = ""
     }