let Cavalos = document.querySelector("#Cavalos");
let botao = document.querySelector("#botao");
let resposta = document.querySelector("#resposta");

function Ferraduras(){
    let QuantidadeCavalos = Number(Cavalos.value);

    let QuantidadeFerraduras = QuantidadeCavalos * 4;

    resposta.textContent = QuantidadeFerraduras
}

botao.onclick = function(){
    Ferraduras()
}
