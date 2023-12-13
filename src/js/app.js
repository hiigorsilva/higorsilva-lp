const btnWhats = document.querySelector(".btn-whats")

// Posição da seção onde o botão do whats será visível
const secaoBtnVisible = document.querySelector(".target").offsetTop

// Verificar a posição do scrollY e mostrar o botão
function showBtnWhats() {
  const positionScroll = window.scrollY

  // Verifica se a posição do scroll é maior que a posição da seção de visibilidade do botão
  if (positionScroll >= secaoBtnVisible) {
    btnWhats.style.display = "block"
  } else {
    btnWhats.style.display = "none"
  }
}

window.addEventListener("scroll", showBtnWhats)
