// Função para atualizar a barra de vida com base nos valores atuais
function atualizarBarraVida() {
    const barraVida = document.getElementById('barraProgressoVida');
    barraVida.style.width = `${(vidaAtual / vidaTotal) * 100}%`;
    barraVida.textContent = `${vidaAtual}/${vidaTotal}`;
  }
  
  // Função para definir a vida total
  function definirVidaTotal() {
    const valor = prompt('Digite o valor total de vida:');
    const valorNumerico = parseInt(valor);
    if (!isNaN(valorNumerico) && valorNumerico >= 0) {
      vidaTotal = valorNumerico;
      vidaAtual = vidaTotal;
      atualizarBarraVida();
    }
  }
  
  // Função para subtrair vida
  function subtrairVida() {
    const valor = prompt('Digite o valor a ser subtraído:');
    const valorNumerico = parseInt(valor);
    if (!isNaN(valorNumerico) && valorNumerico > 0) {
      vidaAtual -= valorNumerico;
      if (vidaAtual < 0) {
        vidaAtual = 0;
      }
      atualizarBarraVida();
    }
  }
  
  // Função para adicionar vida
  function adicionarVida() {
    const valor = prompt('Digite o valor a ser adicionado:');
    const valorNumerico = parseInt(valor);
    if (!isNaN(valorNumerico) && valorNumerico > 0) {
      vidaAtual += valorNumerico;
      if (vidaAtual > vidaTotal) {
        vidaAtual = vidaTotal;
      }
      atualizarBarraVida();
    }
  }
  
  // Variáveis para armazenar a vida atual e total
  let vidaAtual = 0;
  let vidaTotal = 0;
  
  // Atribui as chamadas de função aos eventos onclick dos elementos correspondentes
  
  document.getElementById('barraVida').onclick = definirVidaTotal;
  document.getElementById('subVida').onclick = subtrairVida;
  document.getElementById('addVida').onclick = adicionarVida;