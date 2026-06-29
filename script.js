function verificar() {
    const resposta = document.querySelector('input[name="q1"]:checked');
    const resultado = document.getElementById("resultado");

    if (!resposta) {
        resultado.innerHTML = "Escolha uma alternativa.";
        return;
    }

    if (resposta.value === "c") {
        resultado.innerHTML = "Correto!";
    } else {
        resultado.innerHTML = "Resposta incorreta. A alternativa correta é a letra C.";
    }
}
const botao = document.getElementById("bntSaibamais");

botao.addEventListener("click", function(){

    const texto = document.getElementById("texto");

    if(texto.style.display === "none"){
        texto.style.display = "block";
        botao.innerHTML = "Mostrar menos";
    }else{
        texto.style.display = "none";
        botao.innerHTML = "Saiba mais";
    }

});