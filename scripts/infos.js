//Atualiza o width da área do nome do personagem
function atualizarTamanho(input) {
    input.style.width = ((input.value.length + 1) * 11) + 'px';
  }

//Atualiza o height da área de personalidade
  function ajustarAltura(textarea) {
    textarea.style.height = textarea.scrollHeight + "px";
  }

//Abre e fecha o meu de informações  
  function abrirmenuinfo() {
    if (menuInfo.style.display == 'block') {
        menuInfo.style.display = 'none'
    } else {
        menuInfo.style.display = 'block'
    }
  }