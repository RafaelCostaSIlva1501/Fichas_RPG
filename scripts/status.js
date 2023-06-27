function atualizarValorVida() {
  var vida = prompt("Valor total de vida");
  var valorTotal = vida
  var valorAtual = vida 
  var barraVida = document.getElementById("barraVidaProgresso")

  if (valorTotal !== null) {
    barraVida.value = valorAtual + "/" + valorTotal;
  }
}

function subVida() {
  var sub = prompt("Quanto de vida você perdeu?");
  var barraVida = document.getElementById("barraVidaProgresso");
  var valorAtualVida = parseInt(barraVida.value.split("/")[0]);
  var valorTotalVida = parseInt(barraVida.value.split("/")[1]);
  var novoValorVida = valorAtualVida - parseInt(sub);

  novoValorVida = Math.max(novoValorVida, 0); // Verifica se o novo valor é maior ou igual a zero

  barraVida.value = novoValorVida + "/" + valorTotalVida;
}

function addVida() {
  var add = prompt("Quanto de vida será adicionado?");
  var barraVida = document.getElementById("barraVidaProgresso");
  var valorAtualVida = parseInt(barraVida.value.split("/")[0]);
  var valorTotalVida = parseInt(barraVida.value.split("/")[1]);
  var novoValorVida = valorAtualVida + parseInt(add);

  novoValorVida = Math.min(novoValorVida, valorTotalVida);

  barraVida.value = novoValorVida + "/" + valorTotalVida;
}


function atualizarValorEsforco() {
  var esforco = prompt("Valor total de esforço");
  var valorTotalEsforco = esforco;
  var valorAtualEsforco = esforco;
  var barraEsforco = document.getElementById("barraEsforcoProgresso");

  if (valorTotalEsforco !== null) {
    barraEsforco.value = valorAtualEsforco + "/" + valorTotalEsforco;
  }
}

function subEsforco() {
  var sub = prompt("Quanto de esforço você perdeu?");
  var barraEsforco = document.getElementById("barraEsforcoProgresso");
  var valorAtualEsforco = parseInt(barraEsforco.value.split("/")[0]);
  var valorTotalEsforco = parseInt(barraEsforco.value.split("/")[1]);
  var novoValorEsforco = valorAtualEsforco - parseInt(sub);

  novoValorEsforco = Math.max(novoValorEsforco, 0);

  barraEsforco.value = novoValorEsforco + "/" + valorTotalEsforco;
}

function addEsforco() {
  var add = prompt("Quanto de esforço será adicionado?");
  var barraEsforco = document.getElementById("barraEsforcoProgresso");
  var valorAtualEsforco = parseInt(barraEsforco.value.split("/")[0]);
  var valorTotalEsforco = parseInt(barraEsforco.value.split("/")[1]);
  var novoValorEsforco = valorAtualEsforco + parseInt(add);

  novoValorEsforco = Math.min(novoValorEsforco, valorTotalEsforco);

  barraEsforco.value = novoValorEsforco + "/" + valorTotalEsforco;
}

