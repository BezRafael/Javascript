function testeDoTriangulo(){
    var lado1 = Number(document.getElementById("lado1").value);
    var lado2 = Number(document.getElementById("lado2").value);
    var lado3 = Number(document.getElementById("Lado3").value);

    if((lado1+lado2>lado3) && (lado2+lado3>lado1) && (lado1+lado3>lado2)){
      window.alert("É um triângulo")
          if ((lado1==lado2) && (lado1==lado3)){    
              window.alert("É um triângulo Equilátero");   
          }else{
              if((lado1 != lado2) && (lado2 != lado3) && (lado3 != lado1)){
                  window.alert("É um triângulo Escaleno");
              }else{
                  window.alert("É um triângulo Isoscéles");
            }
          }        
    }else{
      window.alert("Não é um triângulo");

    }


}