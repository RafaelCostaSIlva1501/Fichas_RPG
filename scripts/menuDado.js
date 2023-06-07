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
function abrirmenuinfo() {
    if (menuInfo.style.display === 'none') {
        menuInfo.style.display = 'block';
    } else {
        menuInfo.style.display = 'none';
    }
  }

//Esconde o área de personalidade
function fecharPer() {
    var textarea = document.getElementById("ipersonalidade");
    if (textarea.style.display === "none") {
        textarea.style.display = "block";
    } else {
        textarea.style.display = "none";
    }
}

//esconde a área história
function fecharHis() {
    var textarea = document.getElementById("ihistoria");
    if (textarea.style.display === "none") {
        textarea.style.display = "block";
    } else {
        textarea.style.display = "none";
    }
}



