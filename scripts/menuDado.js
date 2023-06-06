function abrirTelaDados() {
    if (telaDado.style.display == 'block') {
        telaDado.style.display = 'none'
    } else {telaDado.style.display = 'block';
    btnDadoFora.style.display = 'none'
}
}

function fecharTelaDados() {
    if (telaDado.style.display == 'block') {
        telaDado.style.display = 'none'
        btnDadoFora.style.display = 'block'
    }
}

function fecharPer() {
    var textarea = document.getElementById("ipersonalidade");
    if (textarea.style.display === "none") {
        textarea.style.display = "block";
    } else {
        textarea.style.display = "none";
    }
}

function fecharHis() {
    var textarea = document.getElementById("ihistoria");
    if (textarea.style.display === "none") {
        textarea.style.display = "block";
    } else {
        textarea.style.display = "none";
    }
}



