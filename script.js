const projetos = [
  {
    nome: "Meu Primeiro Site",
    descricao: "Um site simples criado com HTML, CSS e JavaScript."
  },
  {
    nome: "Portfólio Inicial",
    descricao: "Meu primeiro portfólio profissional."
  }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
  `;

  lista.appendChild(card);
});