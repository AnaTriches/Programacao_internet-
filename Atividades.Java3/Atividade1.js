let Comprimento = document.querySelector("#Comprimento");
let Largura = document.querySelector("#Largura");
let botao = document.querySelector("#botao");
let resposta = document.querySelector("#resposta");

function CalcularArea(){
    let Com = Number(Comprimento.value);
    let Lar = Number(Largura.value)

    let Area = Com * Lar;
    
    resposta.textContent = "Area:" + Area + "m²"
}

botao.onclick = function(){
    CalcularArea()
}