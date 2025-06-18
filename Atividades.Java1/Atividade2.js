let Resultado = document.querySelector("#Resultado");
let Valor = document.querySelector("#Valor");
let Quantidade = document.querySelector("#Quantidade");
let Botao = document.querySelector("#Botao");

function Multiplicar(){
    let caixa = Number (Valor.value);

    let caixa2 = Number (Quantidade.value);

    Resultado.textContent = caixa * caixa2;
}

Botao.onclick = function(){
    Multiplicar()
}