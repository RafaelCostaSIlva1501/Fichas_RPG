// Função para salvar os dados no localStorage
function salvarDados() {
    var dados = {
      foto: document.getElementById("foto").src,
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
      document.getElementById("foto").src = dados.foto;
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
  
  // Chamada da função para carregar os dados quando a página for carregada
  carregarDados();
  