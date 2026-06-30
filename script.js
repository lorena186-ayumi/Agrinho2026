/* ======================================================= 
   1. SISTEMA DE LOGIN E DESFOQUE
   ======================================================= */
const btnEntrar = document.getElementById("btn-entrar");
const inputNome = document.getElementById("input-nome");
const overlay = document.getElementById("overlay-entrada");
const main = document.getElementById("main-content");
const spanNome = document.getElementById("user-name");

btnEntrar.addEventListener("click", () => {
    const nome = inputNome.value.trim();
    if (nome !== "") {
        spanNome.innerText = nome;
        overlay.style.display = "none"; // Esconde a tela de nome
        main.classList.remove("blur-ativo"); // Tira o embaçado do site
    } else {
        alert("Digite seu nome para continuar!");
    }
});

/* ======================================================= 
   2. CONTROLE DE TEMA E FONTE (ACESSIBILIDADE)
   ======================================================= */
const btnTema = document.getElementById("btn-tema");
let escalaFonte = 100;

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    btnTema.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

document.getElementById("btn-aumentar").addEventListener("click", () => {
    if (escalaFonte < 140) {
        escalaFonte += 10;
        document.body.style.fontSize = escalaFonte + "%";
    }
});

document.getElementById("btn-diminuir").addEventListener("click", () => {
    if (escalaFonte > 90) {
        escalaFonte -= 10;
        document.body.style.fontSize = escalaFonte + "%";
    }
});

/* ======================================================= 
   3. LÓGICA MOSTRAR/OCULTAR (SAIBA MAIS E QUIZ)
   ======================================================= */
const btnInfo = document.getElementById("btn-saiba-mais");
const btnQuiz = document.getElementById("btn-abrir-quiz");
const secInfo = document.getElementById("info-agro");
const secQuiz = document.getElementById("sessao-quiz");

btnInfo.addEventListener("click", () => {
    if (secInfo.classList.contains("oculto")) {
        secInfo.classList.remove("oculto");
        secQuiz.classList.add("oculto"); // Fecha o quiz se estiver aberto
        btnInfo.innerText = "Mostrar menos";
        btnQuiz.innerText = "Responder Quiz";
    } else {
        secInfo.classList.add("oculto");
        btnInfo.innerText = "Saiba mais";
    }
});

btnQuiz.addEventListener("click", () => {
    if (secQuiz.classList.contains("oculto")) {
        secQuiz.classList.remove("oculto");
        secInfo.classList.add("oculto"); // Fecha a info se estiver aberta
        btnQuiz.innerText = "Ocultar Quiz";
        btnInfo.innerText = "Saiba mais";
    } else {
        secQuiz.classList.add("oculto");
        btnQuiz.innerText = "Responder Quiz";
    }
});

/* ======================================================= 
   4. VALIDAÇÃO DO QUIZ (2 PERGUNTAS)
   ======================================================= */
function validarQuiz() {
    const r1 = document.querySelector('input[name="q1"]:checked');
    const r2 = document.querySelector('input[name="q2"]:checked');
    const feedback = document.getElementById("feedback-quiz");

    if (!r1 || !r2) {
        feedback.innerHTML = "<p style='color: orange;'>⚠️ Responda todas as perguntas!</p>";
        return;
    }

    let acertos = 0;
    if (r1.value === "c") acertos++;
    if (r2.value === "b") acertos++;

    if (acertos === 2) {
        feedback.innerHTML = `<p style='color: #71E86B;'>🏆 Parabéns! Você acertou as 2 questões!</p>`;
    } else {
        feedback.innerHTML = `<p style='color: #ff4444;'>Você acertou ${acertos} de 2. Tente novamente!</p>`;
    }
}