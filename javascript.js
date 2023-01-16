function finalizar(){
    prompt("Certo, espero que não tenha ficado nenhuma dúvida. Até a próxima, volte sempre! :) :)")
    window.location.href = "https://www.google.com/";
}

function entrar(){
    var nome = document.getElementById('nome');
    var texto = prompt('Para começar, escreva seu nome');
    nome.innerHTML = texto;
}
