//Abre a tela de rolagem de dados
function abrirTelaDados() {
    if (telaDado.style.display == 'block') {
        telaDado.style.display = 'none'
    } else {telaDado.style.display = 'block';
    btnDadoFora.style.display = 'none'
}
}

//Fecha a tela de rolagem de dados
function fecharTelaDados() {
    if (telaDado.style.display == 'block') {
        telaDado.style.display = 'none'
        btnDadoFora.style.display = 'block'
    }
}

//Abre e fecha o menu de informações 
function abrirOuFecharMenu() {
  var menuInfo = document.getElementById("Info");
  var menuFis = document.getElementById("menuFis");
  var jogador = document.getElementById("jogador");
  var btnMenuInfo = document.getElementById("btnMenuInfo");

  if (btnMenuInfo.textContent === 'ABRIR'){
    menuInfo.style.display = 'block'
    menuFis.style.display = 'block'
    btnMenuInfo.textContent = 'FECHAR'
  } else if (btnMenuInfo.textContent = 'FECHAR') {
    menuInfo.style.display = 'none'
    menuFis.style.display = 'none'
    btnMenuInfo.textContent = 'ABRIR'
  }
}

  

//Esconde o área de personalidade
function fecharPer() {
    var textarea = document.getElementById("ipersonalidade");
    var btn = document.getElementById("btnPer")
    if (btn.textContent == 'ABRIR') {
        textarea.style.display = 'block'
        btn.textContent = 'FECHAR'
    } else if (btn.textContent = 'FECHAR') {
        textarea.style.display = 'none'
        btn.textContent = 'ABRIR'
    }
}

//Esconde a área história
function fecharHis() {
    var textarea = document.getElementById("ihistoria");
    var btn = document.getElementById("btnHis")
    if (btn.textContent == 'ABRIR') {
        textarea.style.display = 'block'
        btn.textContent = 'FECHAR'
    } else if (btn.textContent = 'FECHAR') {
        textarea.style.display = 'none'
        btn.textContent = 'ABRIR'
    }
}





