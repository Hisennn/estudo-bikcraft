//links ativos
const linksNav = document.querySelectorAll("nav a");

function ativarLink(link) {
  const href = link.href;
  const url = document.location.href;

  if (url.includes(href)) {
    link.style.color = "#f2b222";
  }
}

linksNav.forEach(ativarLink);

//mostrar perguntas/respostas
const hiddenShowButtons = document.querySelectorAll(".ask-quest-item button");

hiddenShowButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const listItem = this.closest(".ask-quest-item");
    const text = listItem.querySelector("dd");
    if (text) {
      text.classList.toggle("show-fine-asked");
    }
  });
});

//mudança imagens biclicleta-interna
const imagens = document.querySelectorAll(".bike-int-imgs li img");

function galeriaTrocar(event) {
  const principal = document.querySelector("#img-principal");
  const clicada = event.currentTarget;
  principal.src = clicada.src;
  principal.alt = clicada.alt;
}

function galeriaClique(imagem) {
  imagem.addEventListener("click", galeriaTrocar);
}

imagens.forEach(galeriaClique);

const imagem = document.querySelector(".bike-int-imgs img");

//url orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

//perguntas frequentes
const perguntas = document.querySelectorAll(".ask-quest-item dt button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("showing");
  const ativa = resposta.classList.contains("showing");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//animeplugin

if (window.SimpleAnime) {
  new SimpleAnime();
}
