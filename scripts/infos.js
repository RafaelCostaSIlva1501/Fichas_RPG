//Atualiza o width da área do nome do personagem
function atualizarTamanho(input) {
  input.style.width = ((input.value.length + 1) * 11) + 'px';
  }

//locaStorage para salvar o nome
const inputPersonagem = document.getElementById("ipersonagem");

// Verifica se há um valor armazenado no localStorage e preenche o campo de texto
const storedValue = localStorage.getItem("personagem");
if (storedValue) {
  inputPersonagem.value = storedValue;
}

inputPersonagem.addEventListener("input", function() {
  const value = inputPersonagem.value;
  // Armazena o valor do campo de texto no localStorage
  localStorage.setItem("personagem", value);
});

//Atualiza o height de "Personalidade" e "História"
function ajustarTamanhoTextarea(textarea) {
  textarea.style.height = "auto"; 
  textarea.style.height = `${textarea.scrollHeight}px`;
}

// Função para salvar os valores no localStorage
function salvarValores() {
  var jogadorInput = document.getElementById("ijogador");
  var alturaInput = document.getElementById("ialtura");
  var cabeloInput = document.getElementById("icabelo");
  var olhosInput = document.getElementById("iolhos");
  var peleInput = document.getElementById("ipele");
  var sexoInput = document.getElementById("isexo");
  var idadeInput = document.getElementById("iidade");
  var classeInput = document.getElementById("iclasse");
  var profissaoInput = document.getElementById("iprofissão");
  var personalidadeInput = document.getElementById("ipersonalidade");
  var historiaInput = document.getElementById("ihistoria");
  var personalidadeTextarea = document.getElementById("ipersonalidade");
  var historiaTextarea = document.getElementById("ihistoria");

  localStorage.setItem("jogador", jogadorInput.value);
  localStorage.setItem("altura", alturaInput.value);
  localStorage.setItem("cabelo", cabeloInput.value);
  localStorage.setItem("olhos", olhosInput.value);
  localStorage.setItem("pele", peleInput.value);
  localStorage.setItem("sexo", sexoInput.value);
  localStorage.setItem("idade", idadeInput.value);
  localStorage.setItem("classe", classeInput.value);
  localStorage.setItem("profissao", profissaoInput.value);
  localStorage.setItem("personalidade", personalidadeInput.value);
  localStorage.setItem("historia", historiaInput.value);
  localStorage.setItem("personalidadeHeight", personalidadeTextarea.style.height);
  localStorage.setItem("historiaHeight", historiaTextarea.style.height);
}

// Função para carregar os valores localStorage do menu de informações
function carregarValores() {
  var jogadorInput = document.getElementById("ijogador");
  var alturaInput = document.getElementById("ialtura");
  var cabeloInput = document.getElementById("icabelo");
  var olhosInput = document.getElementById("iolhos");
  var peleInput = document.getElementById("ipele");
  var sexoInput = document.getElementById("isexo");
  var idadeInput = document.getElementById("iidade");
  var classeInput = document.getElementById("iclasse");
  var profissaoInput = document.getElementById("iprofissão");
  var personalidadeInput = document.getElementById("ipersonalidade");
  var historiaInput = document.getElementById("ihistoria");
  var personalidadeTextarea = document.getElementById("ipersonalidade");
  var historiaTextarea = document.getElementById("ihistoria");

  jogadorInput.value = localStorage.getItem("jogador") || "";
  alturaInput.value = localStorage.getItem("altura") || "";
  cabeloInput.value = localStorage.getItem("cabelo") || "";
  olhosInput.value = localStorage.getItem("olhos") || "";
  peleInput.value = localStorage.getItem("pele") || "";
  sexoInput.value = localStorage.getItem("sexo") || "";
  idadeInput.value = localStorage.getItem("idade") || "";
  classeInput.value = localStorage.getItem("classe") || "";
  profissaoInput.value = localStorage.getItem("profissao") || "";
  personalidadeInput.value = localStorage.getItem("personalidade") || "";
  historiaInput.value = localStorage.getItem("historia") || "";
  personalidadeTextarea.style.height = localStorage.getItem("personalidadeHeight") || "";
  historiaTextarea.style.height = localStorage.getItem("historiaHeight") || "";
}

// Adicionar eventos de salvamento e carregamento dos valores
window.addEventListener("DOMContentLoaded", carregarValores);
window.addEventListener("beforeunload", salvarValores);