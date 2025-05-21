let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let sabor3 = document.querySelector("#sabor3");
let sabor4 = document.querySelector("#sabor4");
let Refrigerantes = document.querySelector("#Refrigerantes");
let Botao = document.querySelector("#Botao");
let Resposta = document.querySelector("#Resposta");

function Sabores(){
    let S1 = sabor1.value;
    let S2 = sabor2.value;
    let S3 = sabor3.value;
    let S4 = sabor4.value;
    let Refri = Number(Refrigerantes.value);

    let valorPizza = 4 * 12;
    let valorRefri = Refri * 7;
    let Total = valorPizza + valorRefri;

    Resposta.innerHTML = `Sabores escolhidos: <br>
    -${S1} <br> 
    -${S2} <br> 
    -${S3} <br> 
    -${S4} <br>
    Quantidade de refrigerante: ${Refri} <br>
    Total a pagar: R$ ${Total.toFixed(2)}`;
}

Botao.onclick = function(){
    Sabores()
}