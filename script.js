const toolBar = document.querySelector('.menu-icon');
const mobileNav = document.querySelector('.mobile-menu');
const cancelX = document.querySelector('.cancel');
const navList = document.querySelector('#mobile-nav-bar');

function displayMobileMenu() {
  if (mobileNav.style.display === 'none') mobileNav.style.display = 'block';
  else mobileNav.style.display = 'none';
}

function hideMobileMenu() {
  if (mobileNav.style.display === 'block') mobileNav.style.display = 'none';
  else mobileNav.style.display = 'block';
}

function hideMenu() {
  mobileNav.style.display = 'none';
}

cancelX.addEventListener('click', hideMobileMenu);
toolBar.addEventListener('click', displayMobileMenu);
navList.addEventListener('click', hideMenu);

const workSection = document.getElementById('work-section');

const cardInfos = {
  title: ['Multi-Post Stories', 'Data Dashboard Healthcare', 'Website Portfolio', 'Profesional Art Printing Data More', 'My Recent Works'],
  image: ['./default/SVG/ImgPlaceholder0.svg', './default/SVG/ImgPlaceholder1.svg', './default/SVG/ImgPlaceholder2.svg', './default/SVG/ImgPlaceholder3.svg', './default/SVG/ImgPlaceholder4.svg'],
  description: [
    "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  ],
  technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
  live: 'https://tajemouti.github.io/',
  source: 'https://github.com/tajemouti/portfolio',
};

const titleArr = cardInfos.title;
const imageArr = cardInfos.image;
const descriptionArr = cardInfos.description;
const technologiesArr = cardInfos.technologies;

let mainCard = '';
mainCard += `
<div class="work-section-heading">
  <h2 class="work-section-title">${titleArr[4]}</h2>
  <hr class="divider">
</div>
<aside class="main-card">
  <img class="img-placeholder" src=${imageArr[0]} alt="Main card">
  <div class="right-block1">
    <h3 class="right-block1-heading">${titleArr[0]}</h3>
    <p class="right-block1-description">${descriptionArr[0]}</p>
    <ul class="lang1">
      <li class="lang-list1">${technologiesArr[0]}</li>
      <li class="lang-list1">${technologiesArr[1]}</li>
      <li class="lang-list1">${technologiesArr[2]}</li>
      <li class="lang-list1">${technologiesArr[3]}</li>
    </ul>
    <button type="button">See project</button>
  </div>
</aside>

<div id="cards-grid">
<aside class="card">
  <img class="card-img" src=${imageArr[1]} alt="placeholder">
  <button class="large-button" type="button">See project</button>
</aside>
      
<aside class="card">
  <img  class="card-img" src=${imageArr[2]} alt="placeholder">
  <div class="right-block2">
    <h3 class="right-block2-heading">${titleArr[1]}</h3>
    <p class="right-block2-description">${descriptionArr[1]}</p>
    <ul class="lang2">
      <li class="lang-list2">${technologiesArr[1]}</li>
      <li class="lang-list2">${technologiesArr[2]}</li>
      <li class="lang-list2">${technologiesArr[3]}</li>
    </ul>
  </div>
  <button class="large-button" type="button">See project</button>
</aside>

<aside class="card">
  <img  class="card-img" src=${imageArr[3]} alt="placeholder">
  <div class="right-block2">
    <h3 class="right-block2-heading">${titleArr[2]}</h3>
    <p class="right-block2-description">${descriptionArr[1]}</p>
    <ul class="lang2">
      <li class="lang-list2">${technologiesArr[1]}</li>
      <li class="lang-list2">${technologiesArr[2]}</li>
      <li class="lang-list2">${technologiesArr[3]}</li>
    </ul>
  </div>
  <button class="large-button" type="button">See project</button>
</aside>
      
<aside class="card">
  <img  class="card-img" src=${imageArr[4]} alt="placeholder">
  <div class="right-block2">
    <h3 class="right-block2-heading">${titleArr[3]}</h3>
    <p class="right-block2-description">${descriptionArr[1]}</p>
    <ul class="lang2">
      <li class="lang-list2">${technologiesArr[1]}</li>
      <li class="lang-list2">${technologiesArr[2]}</li>
      <li class="lang-list2">${technologiesArr[3]}</li>
    </ul>
  </div>
  <button class="large-button" type="button">See project</button>
</aside>

<aside class="card">
  <img  class="card-img" src=${imageArr[2]} alt="placeholder">
  <div class="right-block2">
    <h3 class="right-block2-heading">${titleArr[1]}</h3>
    <p class="right-block2-description">${descriptionArr[1]}</p>
    <ul class="lang2">
      <li class="lang-list2">${technologiesArr[1]}</li>
      <li class="lang-list2">${technologiesArr[2]}</li>
      <li class="lang-list2">${technologiesArr[3]}</li>
    </ul>
  </div>
  <button class="large-button" type="button">See project</button>
</aside>
      
<aside class="card">
  <img  class="card-img" src=${imageArr[2]} alt="placeholder">
  <div class="right-block2">
    <h3 class="right-block2-heading">${titleArr[2]}</h3>
    <p class="right-block2-description">${descriptionArr[1]}</p>
    <ul class="lang2">
      <li class="lang-list2">${technologiesArr[1]}</li>
      <li class="lang-list2">${technologiesArr[2]}</li>
      <li class="lang-list2">${technologiesArr[3]}</li>
    </ul>
  </div>
  <button class="large-button" type="button">See project</button>
</aside>
</div>
`;

workSection.innerHTML = mainCard;
