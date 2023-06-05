// Função para salvar os dados no localStorage
function salvarDados() {
    var dados = {
      foto: document.getElementById("foto").getAttribute("src"),
      personagem: document.getElementById("ipersonagem").value,
      jogador: document.getElementById("ijogador").value,
      altura: document.getElementById("ialtura").value,
      cabelo: document.getElementById("icabelo").value,
      olhos: document.getElementById("iolhos").value,
      pele: document.getElementById("ipele").value,
      sexo: document.getElementById("isexo").value,
      idade: document.getElementById("iidade").value,
      classe: document.getElementById("iclasse").value,
      profissao: document.getElementById("iprofissão").value
    };
  
    localStorage.setItem("dadosPagina", JSON.stringify(dados));
  }
  
  // Função para carregar os dados do localStorage
  function carregarDados() {
    var dados = localStorage.getItem("dadosPagina");
    if (dados) {
      dados = JSON.parse(dados);
      document.getElementById("foto").setAttribute("src", dados.foto);
      document.getElementById("ipersonagem").value = dados.personagem;
      document.getElementById("ijogador").value = dados.jogador;
      document.getElementById("ialtura").value = dados.altura;
      document.getElementById("icabelo").value = dados.cabelo;
      document.getElementById("iolhos").value = dados.olhos;
      document.getElementById("ipele").value = dados.pele;
      document.getElementById("isexo").value = dados.sexo;
      document.getElementById("iidade").value = dados.idade;
      document.getElementById("iclasse").value = dados.classe;
      document.getElementById("iprofissão").value = dados.profissao;
    }
  }
  
  // Chamar a função para carregar os dados quando a página for carregada
  document.addEventListener("DOMContentLoaded", carregarDados);
  
  // Vincular as funções aos eventos corretos nos elementos HTML
  document.getElementById("foto").addEventListener("change", salvarDados);
  document.getElementById("ipersonagem").addEventListener("input", salvarDados);
  document.getElementById("ijogador").addEventListener("input", salvarDados);
  document.getElementById("ialtura").addEventListener("input", salvarDados);
  document.getElementById("icabelo").addEventListener("input", salvarDados);
  document.getElementById("iolhos").addEventListener("input", salvarDados);
  document.getElementById("ipele").addEventListener("input", salvarDados);
  document.getElementById("isexo").addEventListener("input", salvarDados);
  document.getElementById("iidade").addEventListener("input", salvarDados);
  document.getElementById("iclasse").addEventListener("input", salvarDados);
  document.getElementById("iprofissão").addEventListener("input", salvarDados);