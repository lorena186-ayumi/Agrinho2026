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
