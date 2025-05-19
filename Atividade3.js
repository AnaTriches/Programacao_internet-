let Reajuste = document.querySelector("#Reajuste");
let Saldo = document.querySelector("#Saldo");
let Botao = document.querySelector("#Botao");

function Reajustar(porcentagem){
    let valor = Number(Saldo.value);

    let valorreajustado = (valor * (porcentagem / 100)) + valor

    Reajuste.textContent = "valor: R$ " + valorreajustado;
}

Botao.onclick = function(){
    Reajustar(1);
}

