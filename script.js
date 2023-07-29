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
const modal = document.getElementById('modals-container');

const cardInfos = {
  title: [
    'Multi-Post Stories',
    'Dubai AirShow',
    'Bookstore App',
    'To-Do List App',
    'Portfolio WebSite',
    'Coming Soon',
  ],
  image: [
    './default/SVG/ImgPlaceholder0.svg',
    './default/JPG/PortfolioCode.jpg',
    './default/JPG/DubaiAirShow01.jpg',
    './default/JPG/BookStoreApp.jpg',
    './default/JPG/TodoListApp.jpg',
    './default/SVG/Cancel.svg',
    './default/SVG/liveIcon.svg',
    './default/SVG/githubIcon.svg',
    './default/JPG/ComingSoon01.jpg',
    './default/JPG/ComingSoon02.jpg',
  ],
  description: [
    'Lorem ipsum dolor sit amet consectetur, incidunt enim corporis nihil praesentium ratione numquam suscipit rerum iure dolorum nostrum vel! Excepturi laboriosam facilis est sint culpa blanditiis saepe, magnam a atque labore ullam omnis quaerat, minus accusamus maxime aspernatur quia minima similique molestias aliquid itaque dolor incidunt! Earum perspiciatis voluptatem labore, alias architecto a sint odit, ab ad velit, repellendus reprehenderit facilis?',
    "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    "Taking place on 13-17 November 2023 in DWC, Dubai Airshow 2023 grants you exclusive access to cutting-edge technology, groundbreaking innovations, game-changing insights, unparalleled networking opportunities with global influential leaders, and the chance to witness breathtaking aircrafts displays in the sky. This year's exciting edition will also return with new and returning features, including VISTA - the startup hub along with 300+ all-star speakers, 13 industry tracks across 5 stages and an expanded number of networking opportunities.",
    'Welcome to my simple Bookstore JavaScript application! With just a few lines of code, you can effortlessly add and remove book titles and their respective authors. Organize your reading list with ease and enjoy a smooth user experience. Happy reading!',
    'Welcome to our Simple To-Do List JavaScript Application! With this user-friendly tool, you can effortlessly add, edit, and remove daily tasks to keep your schedule organized and on track. Stay productive by marking tasks as completed, allowing you to remove them all at once. Take control of your daily responsibilities and boost your efficiency with our intuitive to-do list app. Get started today and experience the convenience of streamlined task management.',
    "Welcome to my portfolio website! You'll discover who I am and what drives my passion for design. The work section showcases my latest projects, reflecting my creativity and expertise. In the skills section, explore my diverse skillset and dedication to continuous improvement. Don't hesitate to reach out through the contact section; let's connect and create something amazing together!",
  ],
  technologies: ['CSS', 'HTML', 'Bootstrap', 'Ruby', 'Ruby on Rails', 'JavaScript', 'Webpack'],
  button: [
    'See project',
    'See live',
    'See source',
  ],
  live: [
    'https://tajemouti.github.io/',
    'https://tajemouti.github.io/first-capstone/',
    'https://tajemouti.github.io/awesome-books-es6/',
    'https://tajemouti.github.io/toDoList/dist/',
    'https://tajemouti.github.io/portfolio/',
  ],
  source: [
    'https://github.com/tajemouti/portfolio/',
    'https://github.com/tajemouti/first-capstone/',
    'https://github.com/tajemouti/awesome-books-es6/',
    'https://github.com/tajemouti/toDoList/',
  ],
};

const titleArr = cardInfos.title;
const imageArr = cardInfos.image;
const descriptionArr = cardInfos.description;
const technologiesArr = cardInfos.technologies;
const buttonArr = cardInfos.button;
const liveArr = cardInfos.live;
const sourceArr = cardInfos.source;

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
    <button data-modal-target="#modal0" type="button">${buttonArr[0]}</button>
  </div>
</aside>

<div id="cards-grid">
<aside class="card">
  <img class="card-img" src=${imageArr[1]} alt="placeholder">
  <div class="right-block2">
    <h3 class="right-block2-heading">${titleArr[4]}</h3>
    <p class="right-block2-description"></p>
    <ul class="lang2">
      <li class="lang-list2">${technologiesArr[1]}</li>
      <li class="lang-list2">${technologiesArr[0]}</li>
      <li class="lang-list2">${technologiesArr[5]}</li>
    </ul>
  </div>
  <button data-modal-target="#modal1" class="large-button" type="button">${buttonArr[0]}</button>
</aside>
      
<aside class="card">
  <img  class="card-img" src=${imageArr[2]} alt="placeholder">
  <div class="right-block2">
    <h3 class="right-block2-heading"></h3>
    <p class="right-block2-description"></p>
    <ul class="lang2">
      <li class="lang-list2">${technologiesArr[1]}</li>
      <li class="lang-list2">${technologiesArr[2]}</li>
      <li class="lang-list2">${technologiesArr[5]}</li>
    </ul>
  </div>
  <button data-modal-target="#modal2" class="large-button" type="button">${buttonArr[0]}</button>
</aside>

<aside class="card">
  <img  class="card-img" src=${imageArr[3]} alt="placeholder">
  <div class="right-block2">
    <h3 class="right-block2-heading">${titleArr[2]}</h3>
    <p class="right-block2-description"></p>
    <ul class="lang2">
      <li class="lang-list2">${technologiesArr[1]}</li>
      <li class="lang-list2">${technologiesArr[0]}</li>
      <li class="lang-list2">${technologiesArr[5]}</li>
    </ul>
  </div>
  <button data-modal-target="#modal3" class="large-button" type="button">${buttonArr[0]}</button>
</aside>
      
<aside class="card">
  <img  class="card-img" src=${imageArr[4]} alt="placeholder">
  <div class="right-block2">
    <h3 class="right-block2-heading">${titleArr[3]}</h3>
    <p class="right-block2-description"></p>
    <ul class="lang2">
      <li class="lang-list2">${technologiesArr[1]}</li>
      <li class="lang-list2">${technologiesArr[5]}</li>
      <li class="lang-list2">${technologiesArr[6]}</li>
    </ul>
  </div>
  <button data-modal-target="#modal4" class="large-button" type="button">${buttonArr[0]}</button>
</aside>

<aside class="card">
  <img  class="card-img" src=${imageArr[8]} alt="placeholder">
  <div class="right-block2">
    <h3 class="right-block2-heading"></h3>
    <p class="right-block2-description"></p>
  </div>
  <button data-modal-target="#modal5" class="large-button" type="button">${buttonArr[0]}</button>
</aside>
      
<aside class="card">
  <img  class="card-img" src=${imageArr[9]} alt="placeholder">
  <div class="right-block2">
    <h3 class="right-block2-heading"></h3>
    <p class="right-block2-description"></p>
  </div>
  <button data-modal-target="#modal6" class="large-button" type="button">${buttonArr[0]}</button>
</aside>
</div>
`;

workSection.innerHTML = mainCard;

let modals = '';
modals += `
<div class="modal" id="modal0">
  <div class="modal-header">
    <div class="modal-heading">
      <div class="modal-title">${titleArr[0]}</div>
        <div data-close-button class="close-button">
          <img src=${imageArr[5]} alt="Cancel">
        </div>
      </div>
      <ul class="languages">
      <li class="lang-list1">${technologiesArr[0]}</li>
      <li class="lang-list1">${technologiesArr[1]}</li>
      <li class="lang-list1">${technologiesArr[2]}</li>
      <li class="lang-list1">${technologiesArr[3]}</li>
      <li class="lang-list1">${technologiesArr[5]}</li>
      </ul>
    </div>
    <div class="right-block">
      <div class="snapshot">
        <img class="modal-img" src=${imageArr[0]} alt="Snapshot">
      </div>
      <div class="modal-body">
        <p class="modal-text">${descriptionArr[0]}</p>
        <div class="action">
          <a class="action-button" href=${cardInfos.live} target="_blank">${buttonArr[1]}
            <img src=${imageArr[6]} alt="live-icon">
          </a>
          <a class="action-button" href=${cardInfos.source} target="_blank">${buttonArr[2]}
            <img src=${imageArr[7]} alt="github-icon">
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="modal1">
  <div class="modal-header">
    <div class="modal-heading">
      <div class="modal-title">${titleArr[4]}</div>
        <div data-close-button class="close-button">
          <img src=${imageArr[5]} alt="Cancel">
        </div>
      </div>
      <ul class="languages">
        <li class="lang-list1">${technologiesArr[1]}</li>
        <li class="lang-list1">${technologiesArr[0]}</li>
        <li class="lang-list1">${technologiesArr[5]}</li>
      </ul>
    </div>
    <div class="right-block">
      <div class="snapshot">
        <img class="modal-img" src=${imageArr[1]} alt="Snapshot">
      </div>
      <div class="modal-body">
        <p class="modal-text">${descriptionArr[4]}</p>
        <div class="action">
          <a class="action-button" href=${liveArr[0]} target="_blank">${buttonArr[1]}
            <img src=${imageArr[6]} alt="live-icon">
          </a>
          <a class="action-button" href=${sourceArr[0]} target="_blank">${buttonArr[2]}
            <img src=${imageArr[7]} alt="github-icon">
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="modal2">
  <div class="modal-header">
    <div class="modal-heading">
      <div class="modal-title">${titleArr[1]}</div>
        <div data-close-button class="close-button">
          <img src=${imageArr[5]} alt="Cancel">
        </div>
      </div>
      <ul class="languages">
        <li class="lang-list1">${technologiesArr[1]}</li>
        <li class="lang-list1">${technologiesArr[2]}</li>
        <li class="lang-list1">${technologiesArr[5]}</li>
      </ul>
    </div>
    <div class="right-block">
      <div class="snapshot">
        <img class="modal-img" src=${imageArr[2]} alt="Snapshot">
      </div>
      <div class="modal-body">
        <p class="modal-text">${descriptionArr[2]}</p>
        <div class="action">
          <a class="action-button" href=${liveArr[1]} target="_blank">${buttonArr[1]}
            <img src=${imageArr[6]} alt="live-icon">
          </a>
          <a class="action-button" href=${sourceArr[1]} target="_blank">${buttonArr[2]}
            <img src=${imageArr[7]} alt="github-icon">
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="modal3">
  <div class="modal-header">
    <div class="modal-heading">
      <div class="modal-title">${titleArr[2]}</div>
        <div data-close-button class="close-button">
          <img src=${imageArr[5]} alt="Cancel">
        </div>
      </div>
      <ul class="languages">
        <li class="lang-list1">${technologiesArr[1]}</li>
        <li class="lang-list1">${technologiesArr[0]}</li>
        <li class="lang-list1">${technologiesArr[5]}</li>
      </ul>
    </div>
    <div class="right-block">
      <div class="snapshot">
        <img class="modal-img" src=${imageArr[3]} alt="Snapshot">
      </div>
      <div class="modal-body">
        <p class="modal-text">${descriptionArr[3]}</p>
        <div class="action">
          <a class="action-button" href=${liveArr[2]} target="_blank">${buttonArr[1]}
            <img src=${imageArr[6]} alt="live-icon">
          </a>
          <a class="action-button" href=${sourceArr[2]} target="_blank">${buttonArr[2]}
            <img src=${imageArr[7]} alt="github-icon">
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="modal4">
  <div class="modal-header">
    <div class="modal-heading">
      <div class="modal-title">${titleArr[3]}</div>
        <div data-close-button class="close-button">
          <img src=${imageArr[5]} alt="Cancel">
        </div>
      </div>
      <ul class="languages">
        <li class="lang-list1">${technologiesArr[1]}</li>
        <li class="lang-list1">${technologiesArr[5]}</li>
        <li class="lang-list1">${technologiesArr[6]}</li>
      </ul>
    </div>
    <div class="right-block">
      <div class="snapshot">
        <img class="modal-img" src=${imageArr[4]} alt="Snapshot">
      </div>
      <div class="modal-body">
        <p class="modal-text">${descriptionArr[4]}</p>
        <div class="action">
          <a class="action-button" href=${liveArr[3]} target="_blank">${buttonArr[1]}
            <img src=${imageArr[6]} alt="live-icon">
          </a>
          <a class="action-button" href=${sourceArr[3]} target="_blank">${buttonArr[2]}
            <img src=${imageArr[7]} alt="github-icon">
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="modal5">
  <div class="modal-header">
    <div class="modal-heading">
      <div class="modal-title">${titleArr[5]}</div>
        <div data-close-button class="close-button">
          <img src=${imageArr[5]} alt="Cancel">
        </div>
      </div>
    </div>
    <div class="right-block">
      <div class="snapshot">
        <img class="modal-img" src=${imageArr[8]} alt="Snapshot">
      </div>
      <div class="modal-body">
        <p class="modal-text">${descriptionArr[0]}</p>
        <div class="action">
          <a class="action-button" href=${liveArr[0]} target="_blank">${buttonArr[1]}
            <img src=${imageArr[6]} alt="live-icon">
          </a>
          <a class="action-button" href=${sourceArr[0]} target="_blank">${buttonArr[2]}
            <img src=${imageArr[7]} alt="github-icon">
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="modal6">
  <div class="modal-header">
    <div class="modal-heading">
      <div class="modal-title">${titleArr[5]}</div>
        <div data-close-button class="close-button">
          <img src=${imageArr[5]} alt="Cancel">
        </div>
      </div>
    </div>
    <div class="right-block">
      <div class="snapshot">
        <img class="modal-img" src=${imageArr[9]} alt="Snapshot">
      </div>
      <div class="modal-body">
        <p class="modal-text">${descriptionArr[0]}</p>
        <div class="action">
          <a class="action-button" href=${liveArr[0]} target="_blank">${buttonArr[1]}
            <img src=${imageArr[6]} alt="live-icon">
          </a>
          <a class="action-button" href=${sourceArr[0]} target="_blank">${buttonArr[2]}
            <img src=${imageArr[7]} alt="github-icon">
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
`;

modal.innerHTML = modals;

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

const form = document.getElementById('form');
const errorMsg = form.querySelector('.errText');

function submitControl(event) {
  event.preventDefault();

  const email = document.getElementById('email');
  const emailVal = email.value;

  if (emailVal === emailVal.toLowerCase()) {
    form.submit();
  } else {
    errorMsg.textContent = 'This message has not been sent! The e-mail must be in lower case letters.';
    form.append(errorMsg);
  }
}

form.addEventListener('submit', submitControl);

const fullNameInfo = document.getElementById('name');
const emailInfo = document.getElementById('email');
const messageInfo = document.getElementById('message');

function savedFormData() {
  const formData = {
    name: fullNameInfo.value,
    email: emailInfo.value,
    message: messageInfo.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

fullNameInfo.addEventListener('input', savedFormData);
emailInfo.addEventListener('input', savedFormData);
messageInfo.addEventListener('input', savedFormData);

window.addEventListener('load', () => {
  const savedData = localStorage.getItem('formData');
  if (savedData) {
    const formData = JSON.parse(savedData);
    fullNameInfo.value = formData.name;
    emailInfo.value = formData.email;
    messageInfo.value = formData.message;
  }
});