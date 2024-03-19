const data = [
  {
    title: "UI/UX Designing",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ipsa vel corrupti similique dolor vero, maxime laboriosam pariatur vitae. Numquam vero error neque laudantium omnis, corporis soluta! Aut, enim itaque.",
    img: ""
  },
  {
    title: "Graphic Designing",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ipsa vel corrupti similique dolor vero, maxime laboriosam pariatur vitae. Numquam vero error neque laudantium omnis, corporis soluta! Aut, enim itaque.",
    img: ""
  },
  {
    title: "Web Development",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ipsa vel corrupti similique dolor vero, maxime laboriosam pariatur vitae. Numquam vero error neque laudantium omnis, corporis soluta! Aut, enim itaque.",
    img: ""
  },
  {
    title: "Social Media Post Designing",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ipsa vel corrupti similique dolor vero, maxime laboriosam pariatur vitae. Numquam vero error neque laudantium omnis, corporis soluta! Aut, enim itaque.",
    img: ""
  },
  {
    title: "Mobile App",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ipsa vel corrupti similique dolor vero, maxime laboriosam pariatur vitae. Numquam vero error neque laudantium omnis, corporis soluta! Aut, enim itaque.",
    img: ""
  },
  {
    title: "Data Analistics",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ipsa vel corrupti similique dolor vero, maxime laboriosam pariatur vitae. Numquam vero error neque laudantium omnis, corporis soluta! Aut, enim itaque.",
    img: ""
  },
]

function loadCardsPortfolio() {
  const input = document.querySelector('.container-card-portfolio');
  data.map(item => {
    let div = document.createElement('div');
    div.classList.add('card-portfolio')
    let content = `
      <div class="card-title">${item.title}</div>
      <div class="card-body">${item.body}</div>
    `
    div.innerHTML = content
    input.appendChild(div)
  })
}
loadCardsPortfolio()