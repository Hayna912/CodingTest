let apiData = [
  {
    firstSection: "LIFESTYLE",
    parts: [
      {
        heading: "FASHION",
        hero_img: "images/fas.jpg",
        news1: "This is the shorthand for flex-grow",
        news2: "Queen Elizabeth celebrates 96th birthday",
        news3: "Are Rolex watches out of stock",
        news4: "Shahid pulls out all fashion stops with his stylish new looks"
      },
      {
        heading: "TRAVEL",
        hero_img: "images/sun.jpg",
        news1: "Worlds longest wooden rollercoaster all set Go longer",
        news2: "Kerala tourism department sets up floating bridge at Beypore beach",
        news3: "Business graduate quits in Scotland first hostel",
        news4: "Travel to McLeodganj from Dharamshala in 5 minutes."
      },
      {
        heading: "BEAUTY",
        hero_img: "images/faith.jpg",
        news1: "A French-girl guide to getting lipstick right",
        news2: "The Mental Health benefits of spring cleaning",
        news3: "Five bridal beauty lessons to learn from Alia Bhatt",
        news4: "Eat Healthy"
      },
      {
        heading: "BEAUTY",
        hero_img: "images/faith.jpg",
        news1: "A French-girl guide to getting lipstick right",
        news2: "The Mental Health benefits of spring cleaning",
        news3: "Five bridal beauty lessons to learn from Alia Bhatt",
        news4: "Eat Healthy"
      }
    ],
  },
  {
    secondSection: "ENTERTAINMENT",
    parts: [
      {
        heading: "FASHION",
        news1: "This is the shorthand for flex-grow",
        news2: "Queen Elizabeth celebrates 96th birthday",
        news3: "Are Rolex watches out of stock",
        news4: "Shahid pulls out all fashion stops with his stylish new looks"
      }
    ]
  }

]
let liveNews = [
  {
    live: "An apple a day keeps the doctor away.",
    img: "images/pineapple.jpg"
  },
  {
    live: "It's better to be safe than sorry",
    img: "images/pineapple.jpg"
  },
  {
    live: "Actions speak louder than words",
    img: "images/pineapple.jpg"
  },
  {
    live: "Don't judge a book by its cover.",
    img: "images/pineapple.jpg"
  },
  {
    live: "Cleanliness is next to Godliness",
    img: "images/pineapple.jpg"
  },
  {
    live: "The Mental Health benefits of spring cleaning",
    img: "images/pineapple.jpg"
  },
  {
    live: "The early bird catches the worm",
    img: "images/pineapple.jpg"
  },
  {
    live: "Eat Healthy",
    img: "images/pineapple.jpg"
  },
  {
    live: "A picture is worth a thousand words",
    img: "images/pineapple.jpg"
  },
  {
    live: "All good things must come to an end",
    img: "images/pineapple.jpg"
  },
  {
    live: "The Mental Health benefits of spring cleaning",
    img: "images/pineapple.jpg"
  },
  {
    live: "The early bird catches the worm",
    img: "images/pineapple.jpg"
  },
  {
    live: "The Mental Health benefits of spring cleaning",
    img: "images/pineapple.jpg"
  },
  {
    live: "The early bird catches the worm",
    img: "images/pineapple.jpg"
  },

]


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

let liveBlock = `
<div>
    ${liveNews.map(live).join("")}
</div>

`;

function overall() {
  let fashion = apiData[0].parts[0];
  let travel = apiData[0].parts[1];
  let beauty = apiData[0].parts[2];

  return `<div>
  <p id="LIFESTYLE">${apiData[0].firstSection}</p>
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
  <p>${liveBlock}</p>
  </div>
  </div>
  <p id="ENTERTAIN">${apiData[1].secondSection}</p>
</div>`



}
document.querySelector("#final").innerHTML = overall();