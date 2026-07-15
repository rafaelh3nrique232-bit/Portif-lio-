// ===========================
// EFEITO DE DIGITAÇÃO
// ===========================

const titulo = document.getElementById("titulo");

if (titulo) {

    const texto = "Olá, eu sou ";
    const nome = "Rafael";

    let i = 0;

    function escreverTexto() {

        if (i < texto.length) {

            titulo.innerHTML += texto.charAt(i);

            i++;

            setTimeout(escreverTexto, 60);

        } else {

            titulo.innerHTML += "<span>" + nome + "</span>";

        }

    }

    escreverTexto();
}


// ===========================
// ANIMAÇÃO DOS CARDS
// ===========================

const cards = document.querySelectorAll(".Card, .CardPerfil, .CardFormacao");

function revelarCards() {

    cards.forEach(card => {

        const topo = card.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (topo < alturaTela - 100) {

            card.classList.add("aparecer");

        }

    });

}

window.addEventListener("scroll", revelarCards);
window.addEventListener("load", revelarCards);