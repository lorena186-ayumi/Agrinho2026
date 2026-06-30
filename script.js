// função do quizz 
function validarQuiz() { // resposta do quiz
    const r1 = document.querySelector('input[name="q1"]:checked'); // resposta 1
    const r2 = document.querySelector('input[name="q2"]:checked'); // resposta 2
    const feedback = document.getElementById("feedback-quiz"); // resultado

    if (!r1 || !r2) { // verifica se as duas perguntas foram respondidas
        feedback.innerHTML = "<span style='color: orange;'> Por favor, escolha uma alternativa para as duas perguntas.</span>";
        return; // avisa o usuário
    }

    let acertos = 0; // conta os acertos
    
    if (r1.value === "c") acertos++;  // resposta correta da P1 é C
    
    if (r2.value === "b") acertos++; // resposta correta da P2 é B

    if (acertos === 2) { // mostra o resultado final
        feedback.innerHTML = `<span style='color: #71E86B;'> Parabéns! Acertou nas 2 questões!</span>`; // mensagem quando acerta as quetões
    } else {
        feedback.innerHTML = `<span style='color: #ff4444;'>Acertou ${acertos} de 2. Tente corrigir as que errou!</span>`;// mensagem quando erra as quetões
    }
}

// espera o site carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    /*login do usuário*/
    const btnEntrar = document.getElementById("btn-entrar");
    const inputNome = document.getElementById("input-nome");
    const overlay = document.getElementById("overlay-entrada");
    const main = document.getElementById("main-content");
    const spanNome = document.getElementById("user-name");

    // função para entrar no site
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

    // ativa ao clicar no botão "Entrar"
    if (btnEntrar) {
        btnEntrar.addEventListener("click", entrarNoSite);
    }

    // ativa ao carregar na tecla "Enter" no teclado
    if (inputNome) {
        inputNome.addEventListener("keypress", function(evento) {
            if (evento.key === "Enter") {
                entrarNoSite();
            }
        });
    }

    /*tema e tamanho da fonte*/
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

    /*  botões de saiba mais e quiz*/
    const btnInfo = document.getElementById("btn-saiba-mais");
    const btnQuiz = document.getElementById("btn-abrir-quiz");
    const secInfo = document.getElementById("info-agro");
    const secQuiz = document.getElementById("sessao-quiz");

    if (btnInfo && btnQuiz) {
        btnInfo.addEventListener("click", () => {
            if (secInfo.classList.contains("oculto")) {
                secInfo.classList.remove("oculto");
                secQuiz.classList.add("oculto"); // fecha o quiz se estiver aberto
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
                secInfo.classList.add("oculto"); // fecha a parte de informações se estiver aberta
                btnQuiz.innerText = "Ocultar Quiz";
                btnInfo.innerText = "Saiba mais";
            } else {
                secQuiz.classList.add("oculto"); // esconde o quiz
                btnQuiz.innerText = "Responder Quiz";
            }
        });
    }
});