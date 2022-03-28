//Dados das imagens
const colecaoImg = [
  {
    id: 1,
    img: "Conteudo/dog B.jpg",
  },

  {
    id: 2,
    img: "Conteudo/dog1.png",
  },

  {
    id: 3,
    img: "Conteudo/dog2.png",
  },

  {
    id: 4,
    img: "Conteudo/dog3.png",
  },
];

//Seleção de elementos no HTML
const perfil = document.querySelector(".perfil");
const imgPerfil = perfil.querySelector(".img-perfil");
const btProximo = perfil.querySelector(".bt-proximo");
const btAnterior = perfil.querySelector(".bt-anterior");

//Imagem inicial no carrosel
let imgAtual = 0;

//Ao carregar a pagina a img X ira ser mostrada
window.addEventListener("DOMContentLoaded", function () {
  mostrarImg();
});

//Coloca a imagem na tela
function mostrarImg() {
  const item = colecaoImg[imgAtual];
  imgPerfil.src = item.img;
}

//Botao proximo
btProximo.addEventListener("click", function () {
  imgAtual++;
  if (imgAtual > colecaoImg.length - 1) {
    imgAtual = 0;
  }
  mostrarImg();
});

//Botao anterior
btAnterior.addEventListener("click", function () {
  imgAtual--;
  if (imgAtual < 0) {
    imgAtual = colecaoImg.length - 1;
  }
  mostrarImg();
});
