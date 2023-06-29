// Função para atualizar o valor da barra de vida
function atualizarValorVida() {
  var vida = prompt("Valor total de vida");
  var valorTotal = vida;
  var valorAtual = vida;
  var barraVida = document.getElementById("barraVidaProgresso");

  if (valorTotal !== null) {
    barraVida.value = valorAtual + "/" + valorTotal;
    salvarValorVida(); // Salva o valor no localStorage
  }
}

// Função para subtrair valor da barra de vida
function subVida() {
  var sub = prompt("Quanto de vida você perdeu?");
  var barraVida = document.getElementById("barraVidaProgresso");
  var valorAtualVida = parseInt(barraVida.value.split("/")[0]);
  var valorTotalVida = parseInt(barraVida.value.split("/")[1]);
  var novoValorVida = valorAtualVida - parseInt(sub);

  novoValorVida = Math.max(novoValorVida, 0);

  barraVida.value = novoValorVida + "/" + valorTotalVida;
  salvarValorVida(); // Salva o valor no localStorage
}

// Função para adicionar valor à barra de vida
function addVida() {
  var add = prompt("Quanto de vida será adicionado?");
  var barraVida = document.getElementById("barraVidaProgresso");
  var valorAtualVida = parseInt(barraVida.value.split("/")[0]);
  var valorTotalVida = parseInt(barraVida.value.split("/")[1]);
  var novoValorVida = valorAtualVida + parseInt(add);

  novoValorVida = Math.min(novoValorVida, valorTotalVida);

  barraVida.value = novoValorVida + "/" + valorTotalVida;
  salvarValorVida(); // Salva o valor no localStorage
}

// Função para atualizar o valor da barra de esforço
function atualizarValorEsforco() {
  var esforco = prompt("Valor total de esforço");
  var valorTotalEsforco = esforco;
  var valorAtualEsforco = esforco;
  var barraEsforco = document.getElementById("barraEsforcoProgresso");

  if (valorTotalEsforco !== null) {
    barraEsforco.value = valorAtualEsforco + "/" + valorTotalEsforco;
    salvarValorEsforco(); // Salva o valor no localStorage
  }
}

// Função para subtrair valor da barra de esforço
function subEsforco() {
  var sub = prompt("Quanto de esforço você perdeu?");
  var barraEsforco = document.getElementById("barraEsforcoProgresso");
  var valorAtualEsforco = parseInt(barraEsforco.value.split("/")[0]);
  var valorTotalEsforco = parseInt(barraEsforco.value.split("/")[1]);
  var novoValorEsforco = valorAtualEsforco - parseInt(sub);

  novoValorEsforco = Math.max(novoValorEsforco, 0);

  barraEsforco.value = novoValorEsforco + "/" + valorTotalEsforco;
  salvarValorEsforco(); // Salva o valor no localStorage
}

// Função para adicionar valor à barra de esforço
function addEsforco() {
  var add = prompt("Quanto de esforço será adicionado?");
  var barraEsforco = document.getElementById("barraEsforcoProgresso");
  var valorAtualEsforco = parseInt(barraEsforco.value.split("/")[0]);
  var valorTotalEsforco = parseInt(barraEsforco.value.split("/")[1]);
  var novoValorEsforco = valorAtualEsforco + parseInt(add);

  novoValorEsforco = Math.min(novoValorEsforco, valorTotalEsforco);

  barraEsforco.value = novoValorEsforco + "/" + valorTotalEsforco;
  salvarValorEsforco(); // Salva o valor no localStorage
}

// Função para salvar o valor da barra de vida no localStorage
function salvarValorVida() {
  var barraVida = document.getElementById("barraVidaProgresso");
  var valorVida = barraVida.value;
  localStorage.setItem("valorVida", valorVida);
}

// Função para salvar o valor da barra de esforço no localStorage
function salvarValorEsforco() {
  var barraEsforco = document.getElementById("barraEsforcoProgresso");
  var valorEsforco = barraEsforco.value;
  localStorage.setItem("valorEsforco", valorEsforco);
}

window.onload = function() {
  // Restaura os valores do localStorage nos inputs
  var barraVida = document.getElementById("barraVidaProgresso");
  var barraEsforco = document.getElementById("barraEsforcoProgresso");
  barraVida.value = localStorage.getItem("valorVida") || "";
  barraEsforco.value = localStorage.getItem("valorEsforco") || "";
};




