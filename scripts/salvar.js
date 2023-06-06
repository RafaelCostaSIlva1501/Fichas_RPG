// Função para salvar os dados no localStorage
function salvarDados() {
    var dados = {
      foto: document.getElementById("foto").getAttribute("src"),
      historia: document.getElementById("ihistoria").value,
      personalidade: document.getElementById("ipersonalidade").value,
      personagem: document.getElementById("ipersonagem").value,
      jogador: document.getElementById("ijogador").value,
      altura: document.getElementById("ialtura").value,
      cabelo: document.getElementById("icabelo").value,
      olhos: document.getElementById("iolhos").value,
      pele: document.getElementById("ipele").value,
      sexo: document.getElementById("isexo").value,
      idade: document.getElementById("iidade").value,
      classe: document.getElementById("iclasse").value,
      profissao: document.getElementById("iprofissão").value,
      alturaTextarea: document.getElementById("ipersonalidade").style.height,
      alturaTextareaH: document.getElementById("ihistoria").style.height, 
    };
  
    localStorage.setItem("dadosPagina", JSON.stringify(dados));
  }
  
// Função para carregar os dados do localStorage
  function carregarDados() {
    var dados = localStorage.getItem("dadosPagina");
    if (dados) {
      dados = JSON.parse(dados);
      document.getElementById("foto").setAttribute("src", dados.foto);
      document.getElementById("ihistoria").value = dados.historia;
      document.getElementById("ipersonalidade").value = dados.personalidade;
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
      document.getElementById("ipersonalidade").style.height = dados.alturaTextarea;
      document.getElementById("ihistoria").style.height = dados.alturaTextareaH
    }
  }
  
  // Chamar a função para carregar os dados quando a página for carregada
  document.addEventListener("DOMContentLoaded", carregarDados);
  
  // Vincular as funções aos eventos corretos nos elementos HTML
  document.getElementById("foto").addEventListener("change", salvarDados);
  document.getElementById("ihistoria").addEventListener("input",salvarDados);
  document.getElementById("ipersonalidade").addEventListener("input",salvarDados);
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

  // Função para converter uma imagem em base64
function converterImagemParaBase64(arquivo) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(arquivo);
    });
  }
  
  // Função para salvar a imagem em base64 no localStorage
  function salvarImagem() {
    const inputImagem = document.getElementById("addFoto");
    const arquivo = inputImagem.files[0];
  
    if (arquivo) {
      converterImagemParaBase64(arquivo)
        .then(base64 => {
          localStorage.setItem("imagem", base64);
          console.log("Imagem salva com sucesso!");
        })
        .catch(error => {
          console.error("Erro ao converter a imagem:", error);
        });
    }
  }
  
  // Função para carregar a imagem do localStorage
  function carregarImagem() {
    const imagemBase64 = localStorage.getItem("imagem");
  
    if (imagemBase64) {
      const imagem = document.getElementById("foto");
      imagem.src = imagemBase64;
    }
  }
  
  // Chamar a função para carregar a imagem quando a página for carregada
  document.addEventListener("DOMContentLoaded", carregarImagem);
  
  // Vincular a função salvarImagem() ao evento de alteração do input de imagem
  document.getElementById("addFoto").addEventListener("change", salvarImagem);
  
  