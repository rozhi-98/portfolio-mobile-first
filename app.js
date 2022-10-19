const navIcon = document.querySelector('.nav-icon');
const navLinks = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

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
