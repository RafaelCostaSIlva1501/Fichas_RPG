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