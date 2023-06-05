function atualizarTamanho(input) {
    input.style.width = ((input.value.length + 1) * 11) + 'px';
  }

  function ajustarAltura(textarea) {
    textarea.style.height = textarea.scrollHeight + "px";
  }

  function abrirmenuinfo() {
    if (menuInfo.style.display == 'block') {
        menuInfo.style.display = 'none'
    } else {
        menuInfo.style.display = 'block'
    }
  }