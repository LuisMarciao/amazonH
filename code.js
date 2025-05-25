const pontos = [
  {
    nome: "Estação das Docas",
    imagem: "imagens/estação_docas.jpg",
    slug: "estacao-das-docas"
  },
  {
    nome: "Ver-o-Peso",
    imagem: "imagens/ver-o-peso.jpg",
    slug: "ver-o-peso"
  },
  {
    nome: "Mangal das Garças",
    imagem: "imagens/mangal-das-garças.jpg",
    slug: "mangal-das-garcas"
  },
  {
    nome: "Basílica de Nazaré",
    imagem: "imagens/basilica.jpg",
    slug: "basilica"
  },
  {
    nome: "Teatro da Paz",
    imagem: "imagens/teatro.jpg",
    slug: "teatro"
  },
  {
    nome: "Forte do Presépio",
    imagem: "imagens/forte.jpg",
    slug: "forte"
  },

  {
    nome: "Estação das Docas",
    descricao: "...",
    imagem: "imagens/estação_docas.jpg",
    link: "docas.html"
  },
  
];

function voltar() {
  window.location.href = "index.html";
}

const ponto = JSON.parse(localStorage.getItem("pontoSelecionado"));
const detalhes = document.getElementById("detalhes");

if (ponto) {
  detalhes.innerHTML = `
    <h2>${ponto.nome}</h2>
    <img src="${ponto.imagem}" alt="${ponto.nome}" />
    <p>${ponto.descricao}</p>
  `;
} else {
  detalhes.innerHTML = "<p>Nenhuma informação encontrada.</p>";
}

const listaPontos = document.getElementById("lista-pontos");

pontos.forEach(ponto => {
  const div = document.createElement("div");
  div.className = "card-ponto";

  div.innerHTML = `
    <a href="detalhes.html?slug=${ponto.slug}" style="text-decoration: none; color: inherit;">
      <img src="${ponto.imagem}" alt="${ponto.nome}">
      <h3>${ponto.nome}</h3>
    </a>
  `;

  listaPontos.appendChild(div);
});


