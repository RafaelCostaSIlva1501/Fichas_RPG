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
  var valorAtual = parseInt(barraVida.value.split("/")[0]);
  var valorTotal = parseInt(barraVida.value.split("/")[1]);
  var novoValor = valorAtual - parseInt(sub);

  if (!isNaN(novoValor)) {
    barraVida.value = novoValor + "/" + valorTotal;
  } else{
    alert("Não é válido")
  }
}

function addVida() {
  var add = prompt("Quanto de vida será adicionado?")
  var barraVida = document.getElementById("barraVidaProgresso");
  var valorAtual = parseInt(barraVida.value.split("/")[0]);
  var valorTotal = parseInt(barraVida.value.split("/")[1]);
  var novoValor = valorAtual + parseInt(add);

  if (!isNaN(novoValor)) {
    barraVida.value = novoValor + "/" + valorTotal;
  } else{
    alert("Não é válido")
  }
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

  if (!isNaN(novoValorEsforco)) {
    barraEsforco.value = novoValorEsforco + "/" + valorTotalEsforco;
  } else {
    alert("Valor inválido");
  }
}

function addEsforco() {
  var add = prompt("Quanto de esforço será adicionado?");
  var barraEsforco = document.getElementById("barraEsforcoProgresso");
  var valorAtualEsforco = parseInt(barraEsforco.value.split("/")[0]);
  var valorTotalEsforco = parseInt(barraEsforco.value.split("/")[1]);
  var novoValorEsforco = valorAtualEsforco + parseInt(add);

  if (!isNaN(novoValorEsforco)) {
    barraEsforco.value = novoValorEsforco + "/" + valorTotalEsforco;
  } else {
    alert("Valor inválido");
  }
}

