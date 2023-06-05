//Atualiza o width da área do nome do personagem
function atualizarTamanho(input) {
    input.style.width = ((input.value.length + 1) * 11) + 'px';
  }

//Atualiza o height da área de personalidade
function ajustarTamanhoTextarea() {
  const textarea = document.getElementById("ipersonalidade");
  textarea.style.height = "auto"; // Redefinir o height para calcular o tamanho correto
  textarea.style.height = `${textarea.scrollHeight}px`; // Definir o height com base no scrollHeight
}
  

//Abre e fecha o menu de informações  
  function abrirmenuinfo() {
    if (menuInfo.style.display == 'block') {
        menuInfo.style.display = 'none'
    } else {
        menuInfo.style.display = 'block'
    }
  }