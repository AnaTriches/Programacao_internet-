let Ingredientes = document.querySelector("#Ingredientes");
let Calcular = document.querySelector("#Calcular");
let Resultado = document.querySelector("#Resultado");

function Quantidade(){
let pessoas = Number(Ingredientes.value);

if (pessoas <= 0) {
        Resultado.textContent = "Digite um número válido de pessoas.";
        return;
}

let ovos = (pessoas * 2);
let queijo = (pessoas * 50);

  Resultado.textContent = `Você vai precisar de ${ovos} ovos e ${queijo}g de queijo.`;
}

Calcular.onclick = function(){
    Quantidade();
}