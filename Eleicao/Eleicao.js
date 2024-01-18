function totalEleitores(){

var totalEleitores=Number(document.getElementById("totalEleitores").value);
var totalBranco=Number(document.getElementById("totalBrancos").value);
var totalNulos=Number(document.getElementById("totalNulos").value);
var totalValidos=Number(document.getElementById("totalValidos").value);
    if ((totalBranco+totalNulos+totalValidos)==totalEleitores){
        var porcentoBranco=((totalBranco/totalEleitores)*100)
            document.write("de " + totalEleitores + " Eleitores. " + porcentoBranco+"% foram Brancos")
        var porcentoNulo= ((totalNulos/totalEleitores)*100)
            document.write(", " + porcentoNulo+"% foram Nulos")
        var porcentoValido=((totalValidos/totalEleitores)*100)
            document.write(" e " + porcentoValido+"% foram Válidos")
    }else{
        document.write("fraude, GOLPEEEEEE")
    }
}    