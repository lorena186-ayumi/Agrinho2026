// 1. função do quizz (Fica no topo para o botão do HTML conseguir encontrá-la)
function validarQuiz() {
    const r1 = document.querySelector('input[name="q1"]:checked');
    const r2 = document.querySelector('input[name="q2"]:checked');
    const feedback = document.getElementById("feedback-quiz");

    // Verifica se as duas perguntas foram respondidas
    if (!r1 || !r2) {
        feedback.innerHTML = "<span style='color: orange;'> Por favor, escolha uma alternativa para as duas perguntas.</span>";
        return;
    }

    let acertos = 0;
    
    if (r1.value === "c") acertos++;  // Resposta correta da P1 é C
    
    if (r2.value === "b") acertos++; // Resposta correta da P2 é B

    // mostra o resultado final
    if (acertos === 2) {
        feedback.innerHTML = `<span style='color: #71E86B;'> Parabéns! Acertou nas 2 questões!</span>`;
    } else {
        feedback.innerHTML = `<span style='color: #ff4444;'>Acertou ${acertos} de 2. Tente corrigir as que errou!</span>`;
    }
}

// 2. TODO O RESTO DO CÓDIGO SÓ ARRANCA QUANDO O SITE ESTIVER 100% CARREGADO
document.addEventListener("DOMContentLoaded", function() {
    
    /* ======================================================= 
       SISTEMA DE LOGIN E DESFOQUE
       ======================================================= */
    const btnEntrar = document.getElementById("btn-entrar");
    const inputNome = document.getElementById("input-nome");
    const overlay = document.getElementById("overlay-entrada");
    const main = document.getElementById("main-content");
    const spanNome = document.getElementById("user-name");

    // Função para entrar no site
    function entrarNoSite() {
        const nome = inputNome.value.trim();
        if (nome !== "") {
            spanNome.innerText = nome;
            overlay.style.display = "none"; 
            main.classList.remove("blur-ativo"); 
        } else {
            alert("Por favor, digite o seu nome para continuar!");
        }
    }

    // Ativa ao clicar no botão "Entrar"
    if (btnEntrar) {
        btnEntrar.addEventListener("click", entrarNoSite);
    }

    // Ativa ao carregar na tecla "Enter" no teclado
    if (inputNome) {
        inputNome.addEventListener("keypress", function(evento) {
            if (evento.key === "Enter") {
                entrarNoSite();
            }
        });
    }

    /* ======================================================= 
       CONTROLO DE TEMA E FONTE
       ======================================================= */
    const btnTema = document.getElementById("btn-tema");
    let escalaFonte = 100;

    if (btnTema) {
        btnTema.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            btnTema.innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌗";
        });
    }

    const btnAumentar = document.getElementById("btn-aumentar");
    if (btnAumentar) {
        btnAumentar.addEventListener("click", () => {
            if (escalaFonte < 140) {
                escalaFonte += 10;
                document.body.style.fontSize = escalaFonte + "%";
            }
        });
    }

    const btnDiminuir = document.getElementById("btn-diminuir");
    if (btnDiminuir) {
        btnDiminuir.addEventListener("click", () => {
            if (escalaFonte > 90) {
                escalaFonte -= 10;
                document.body.style.fontSize = escalaFonte + "%";
            }
        });
    }

    /* ======================================================= 
       LÓGICA MOSTRAR/OCULTAR (SAIBA MAIS E QUIZ)
       ======================================================= */
    const btnInfo = document.getElementById("btn-saiba-mais");
    const btnQuiz = document.getElementById("btn-abrir-quiz");
    const secInfo = document.getElementById("info-agro");
    const secQuiz = document.getElementById("sessao-quiz");

    if (btnInfo && btnQuiz) {
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
    }
});