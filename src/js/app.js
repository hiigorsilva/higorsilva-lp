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

// POPUP PORTFOLIO
function openPopup(index) {
  const popup = document.querySelector(".popup-wrapper")
  const popupImage = document.querySelector("#project")
  const projectUrl = [
    "./src/images/project-1-full.webp",
    "./src/images/project-2-full.webp",
    "./src/images/project-3-full.webp",
    "./src/images/project-4-full.webp",
  ]

  popupImage.src = projectUrl[index]
  popup.style.display = "flex"
}

function closePopup() {
  const popup = document.querySelector(".popup-wrapper")
  popup.style.display = "none"
}
document
  .querySelector(".popup-content")
  .addEventListener("click", function (event) {
    event.stopPropagation()
  })
