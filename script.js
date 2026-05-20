function abrirWhatsApp() {
  const numero = "5543999999999";
  const mensagem = "Olá! Gostaria de solicitar um orçamento de locação de plataforma.";
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
}

/* =========================
MENU MOBILE
========================= */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuBackdrop = document.getElementById("menuBackdrop");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  menuBackdrop.classList.toggle("active");
});

menuBackdrop.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  menuBackdrop.classList.remove("active");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuBackdrop.classList.remove("active");
  });
});

/* =========================
HEADER SCROLL EFFECT
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if(window.scrollY > 40){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* =========================
ANIMAÇÃO AO SCROLL
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 80){
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* =========================
ESPECIFICAÇÕES EQUIPAMENTOS
========================= */

function abrirEspecificacao(tipo) {
  const especificacoes = document.querySelectorAll(".spec-card");
  const secao = document.getElementById("especificacoes");

  especificacoes.forEach(card => {
    card.classList.remove("active");
  });

  const cardSelecionado = document.getElementById(`spec-${tipo}`);

  if (cardSelecionado) {
    cardSelecionado.classList.add("active");

    secao.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}