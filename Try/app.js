
fetch("data.json")
  .then(response => response.json()
    .then(data => {
      document.querySelector("#final").innerHTML = overall(data);
    }))

function live(updated) {
  return ` <div class="gallery">
  <div class="photos">
    <p><img src ="${updated.img}"/>${updated.live}</p>
  </div>
</div>`
}

function content(parts) {
  return `<ul class="cards">
  <li class="cards__item">
    <div class="card">
      <p id="FASHION">${parts.heading}</p>
      <div class="card__image"><img src="${parts.hero_img}"/></div>
      <div class="card__content">
        <p class="card__text" id="first1">${parts.news1}</p>
        <p class="card__text" id="first2">${parts.news2}</p>
        <p class="card__text" id="first3">${parts.news3}</p>
        <p class="card__text" id="first4">${parts.news4}</p>
        <button class="btn btn--block card__btn">See More</button>
      </div>
    </div>
  </li>
</ul>`

}

function liveBlock(got) {
  return `
  <div>
      ${got.map(live).join("")}
  </div>
  
  `;
}


function overall(props) {
  let fashion = props.apiData[0].parts[0];
  let travel = props.apiData[0].parts[1];
  let beauty = props.apiData[0].parts[2];
  let some = props.liveNews;

  return `<div>
  <p id="LIFESTYLE">${props.apiData[0].firstSection}</p>
  <div class="flex-container">
  <div class="flex-item-left">
  <p>${content(fashion)}</p>
  <p>${content(beauty)}</p>
  </div>
  <div class="flex-item-center">
  <p>${content(travel)}</p>
  <p>${content(beauty)}</p>
  </div>
  <div class="flex-item-right">
  <p>${liveBlock(some)}</p>
  </div>
  </div>
  <p id="ENTERTAIN">${props.apiData[1].secondSection}</p>
</div>`
}
