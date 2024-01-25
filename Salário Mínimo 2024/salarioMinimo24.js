function Calculo(){

var salarioBruto = Number(document.getElementById("CalcSaldo").value);
var salarioBrutoEdit = salarioBruto.toFixed(2).replace('.',',');
var inss;
var descontoInss;
var irpf;
var descontoIrpf;
var salárioLiquido;

if(salarioBruto <= 1412 ){
    inss = 0.075;
}else{
    if(salarioBruto > 1412 && salarioBruto <= 2666.68){
        inss = 0.09;
    }else{
        if(salarioBruto > 2666.68 && salarioBruto <= 4000.03){
            inss = 0.12;
        }else{
            inss = 0.14;
        }
    }
}   
if(salarioBruto <= 2112){
    irpf = 0;
}else{
    if(salarioBruto > 2112 && salarioBruto <= 2826.65){
        irpf = 0.075;
    }else{
        if(salarioBruto > 2826.65 && salarioBruto <= 3751.05){
            irpf = 0.15;
        }else{
            if(salarioBruto > 3751.05 && salarioBruto <= 4664.68){
                irpf = 0.0225;   
            }else{
                irpf = 0.0275; 
            }
        }
    }
}
descontoInss = salarioBruto*inss
descontoIrpf = salarioBruto*irpf
descontoInssEdit = descontoInss.toFixed(2).replace('.',',');
descontoIrpfEdit = descontoIrpf.toFixed(2).replace('.',',');
salárioLiquido = salarioBruto - (descontoInss+descontoIrpf);
var salárioLiquidoEdit = salárioLiquido.toFixed(2).replace('.',',');
alert(`Seu salário bruto é R$${salarioBrutoEdit}, seu desconto será de R$${descontoInssEdit} para o INSS e R$${descontoIrpfEdit} para o IRPF. Seu salário Liquído será de R$${salárioLiquidoEdit}.`);

}