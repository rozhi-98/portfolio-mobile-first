const navIcon = document.querySelector('.nav-icon');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');
const cardsContainer = document.querySelector('.cards-container');
const popupContainer = document.querySelector('.popup-container');

// open mobile menu

navIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show-menu');
});

// close menu when close button is pressed

closeBtn.addEventListener('click', () => {
  if (navLinks.classList.contains('show-menu')) {
    navLinks.classList.remove('show-menu');
  }
});

// openning the correct menu option when clicked

const listItem = document.querySelectorAll('.list-item');

listItem.forEach((item) => {
  item.addEventListener('click', (a) => {
    const id = a.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const position = element.offsetTop;

    if (id) {
      navLinks.classList.remove('show-menu');
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

const cardArr = [
  {
    id: '1',
    title: 'Tonic',
    options: ['Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['Html', 'CSS', 'Javascript'],
    img: './images/desktop-card-one.svg',
    img2: './images/cardOne.svg ',
    client: 'Canopy',
    technologies2: ['Html', 'CSS', 'Javascript'],
  },
  {
    id: '2',
    title: 'Multi-Post Stories',
    options: ['Full stack Dev', '2015'],
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['Html', 'CSS', 'Javascript'],
    img: './images/desktop-card-Two.svg',
    img2: './images/cardTwo.svg ',
    client: 'FACEBOOK',
    technologies2: ['Html', 'Ruby on Rails', 'CSS', 'Javascript'],
  },
  {
    id: '3',
    title: 'FACEBOOK 360',
    options: ['Full stack Dev', '2015'],
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['Html', 'CSS', 'Javascript'],
    img: './images/desktop-card-Three.svg',
    img2: './images/cardThree.svg ',
    client: 'FACEBOOK',
    technologies2: ['Html', 'Ruby on Rails', 'CSS', 'Javascript'],
  },
  {
    id: '4',
    title: 'Multi-Post Stories',
    options: ['Lead Developer', '2018'],
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['Html', 'CSS', 'Javascript'],
    img: './images/desktop-card-Four.svg',
    img2: './images/cardFour.svg ',
    client: 'UBER',
    technologies2: ['Html', 'Ruby on Rails', 'CSS', 'Javascript'],
  },
];

const generatePopupMarkup = (obj) => {
  const listItems = obj.options.map((option) => `<li>${option}</li>`).join('');
  const techList = obj.technologies.map((tech) => `<li>${tech}</li>`).join('');
  const techList2 = obj.technologies2
    .map((tech) => `<li>${tech}</li>`)
    .join('');

  const popupMarkup = `
  <div class="backdrop">
        <div class="popup row">
          <div class="popup-title">
            <h2 class="card-title">${obj.title}</h2>
            <svg
              class="popup-close-icon"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                fill="#67798E"
              />
            </svg>
          </div>
          <div class="card-frame-one">
            <h4 class="card-client">${obj.client}</h4>
            <ul class="card-list">
            ${listItems}
            </ul>
          </div>
          <img
            class="cards-desktop cards-phone"
              src="${obj.img}"
              src="${obj.img2}"
              alt="${obj.title}"
          />
          <div class="popup-content">
            <p class="card-info">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it 1960s with the releaLorem Ipsum is simply
              dummy text of the printing and typesetting industry.
            </p>
            <div class="technologies">
            <ul class="card-tags cards-phone">
            ${techList}
          </ul>
          <ul class="card-tags cards-desktop">
            ${techList2}
          </ul>
              <hr />
              <div class="popup-buttons">
                <a class="button" href="#"
                  >See Live
                  <img
                    class="popup-icons"
                    src="images/liveSource-icon.svg"
                    alt="live-source"
                /></a>
                <a class="button" href="#"
                  >See Source
                  <img
                    class="popup-icons"
                    src="images/github.svg"
                    alt="live-source"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  `;

  return popupMarkup;
};

const openPopupCard = (id) => {
  const activePopupData = cardArr.find((el) => el.id === `${id}`);

  const popup = generatePopupMarkup(activePopupData);
  document.querySelector('.popup-container').innerHTML = popup;
};

const cardsMarkupGen = (obj) => {
  const listItems = obj.options.map((option) => `<li>${option}</li>`).join('');
  const techList = obj.technologies.map((tech) => `<li>${tech}</li>`).join('');
  const techList2 = obj.technologies2
    .map((tech) => `<li>${tech}</li>`)
    .join('');

  const cardsMarkup = `
  <div class="card  ${(obj.id * 1) % 2 === 0 ? 'reverse' : ''}">
            <img
              class="cards-desktop cards-phone"
              src="${obj.img}"
              src="${obj.img2}"
              alt="${obj.title}"
            />
            <div class="card-content">
              <h2 class="card-title">${obj.title}</h2>
              <div class="card-frame-one">
                <h4 class="card-client">${obj.client}</h4>
                <ul class="card-list">
                  ${listItems}
                </ul>
              </div>
              <p class="card-info">
                ${obj.description}
              </p>
              <ul class="card-tags cards-phone">
                ${techList}
              </ul>
              <ul class="card-tags cards-desktop">
                ${techList2}
              </ul>
              <a href="#" onclick="openPopupCard(${
                obj.id
              })" class="button">See Project</a>
            </div>
          </div> 
          `;
  // closeButtonTwo.addEventListener('click', () => {
  //   popup.
  // })
  return cardsMarkup;
};

// const closeButtonTwo = document.querySelector('.popup-close-icon');

closePopup = (e) => {
  const clicked = e.target.closest('.popup-close-icon');
  if (!clicked) return;
  document.querySelector('.popup-container').innerHTML = '';
};

const injectCards = () => {
  let cardsCollection = '';

  cardArr.forEach((obj) => {
    cardsCollection += cardsMarkupGen(obj);
  });

  cardsContainer.insertAdjacentHTML('afterbegin', cardsCollection);
};

injectCards();
