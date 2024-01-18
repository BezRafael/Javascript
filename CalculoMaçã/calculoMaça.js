function calculoMaca(){
var quantidade = Number(document.getElementById("CalculeMaca").value);
    if(quantidade>11){
        var valorTotal= (quantidade*1.00)
            document.write ("R$" + valorTotal)
    }else{
        var valorTotal= (quantidade*1.30)
            document.write ("R$" + valorTotal)
    }
}    