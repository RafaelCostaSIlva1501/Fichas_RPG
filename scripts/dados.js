function gerar(n) {
    var botao = document.getElementById('botao');
    var add = document.getElementById('addNum');
    var escrever = document.getElementById('placeholder');
    var resultado = document.getElementById('soma');

    var quantidade = parseInt(add.value);
    escrever.innerHTML = ' ';

    var soma = 0;

    for (var i = 1; i <= quantidade; i++) {
        var num = Math.floor(Math.random() * n) +1;
        escrever.innerHTML += num + ' ';
        soma += num;
    }

    resultado.innerHTML = 'Valor Total: ' + soma;
}