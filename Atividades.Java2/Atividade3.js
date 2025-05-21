let Num1 = document.querySelector("#Num1");
let Num2 =  document.querySelector("#Num2");
let Botao = document.querySelector("#Botao");
let Resultado = document.querySelector("#Resultado");

function Operações(){
    let numero = Number(Num1.value);
    let numero2 = Number(Num2.value);

    let soma = (numero + numero2);
    let subtracao = (numero - numero2);
    let multiplicacao = (numero * numero2);
    let divisao = (numero / numero2);

  Resultado.innerHTML = `
    Soma: ${soma}<br>
    Subtração: ${subtracao}<br>
    Multiplicação: ${multiplicacao}<br>
    Divisão: ${divisao}`;
}

Botao.onclick = function(){
    Operações();
}
