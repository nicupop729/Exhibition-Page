const exhibSectionList = document.querySelector('.exhib-section-list');
const humbergerButton = document.querySelector('.menu-icon-mobile');

const mobileNavHTML = `
<div class="mobile-nav-div">
  <span class="close-icon"><ion-icon name="close-sharp"></ion-icon></span>
  <ul>
    <li>
      <a class="toggle-about" href="about.html">About</a>
    </li>
    <li>
      <a class="toggle-home" href="index.html">Home</a>
    </li>
    <li><a href="#">Program</a></li>
    <li><a href="#">Forum</a></li>
    <li><a href="#">Sponsor</a></li>
    <li><a href="#">News</a></li>
  </ul>
</div>
`;

humbergerButton.addEventListener('click', () => {
  document.body.insertAdjacentHTML('afterbegin', mobileNavHTML);
  const navDiv = document.querySelector('.mobile-nav-div');
  const closeIcon = document.querySelector('.close-icon');
  navDiv.style.backgroundColor = '#272a31';
  navDiv.style.display = 'block';

  closeIcon.addEventListener('click', () => {
    navDiv.style.display = 'none';
  });
});

const exhibSections = [
  {
    name: 'Great Pharaohs',
    image: './src/resources/king-tut.jpeg',
    brief: 'Most important pharaohs of Egypt',
    description:
      'As ancient Egyptian rulers, pharaohs were both the heads of state and the religious leaders of their people. ',
    alt: 'Picture of Tutankhamon',
  },
  {
    name: 'The Pyramids',
    image: './src/resources/pyramids.jpeg',
    brief: 'Greatest architectural wonders of the world',
    description:
      'The most famous Egyptian pyramids are those found at Giza, on the outskirts of Cairo. Several of the Giza pyramids are counted among the largest structures ever built.',
    alt: 'Picture of the pyramids',
  },
  {
    name: 'Temples',
    image: './src/resources/temple-of-isis.jpg',
    brief: 'Temples like Karnak and Abu-Simbel',
    description:
      'Egyptian temples were built for the official worship of the gods and in commemoration of the pharaohs in ancient Egypt and regions under Egyptian control.',
    alt: 'Temple of Isis',
  },
  {
    name: 'Hieroglyphs',
    image: './src/resources/ancient-egyptian-hieroglyphics.jpg',
    brief: 'One of the oldest writing system',
    description:
      'A hieroglyph (Greek for "sacred carvings") was a character of the ancient Egyptian writing system. Logographic scripts that are pictographic in form in a way reminiscent of ancient Egyptian are also sometimes called "hieroglyphs".',
    alt: 'Exemple of hieroglyphs',
  },
  {
    name: 'The Empire',
    image: './src/resources/the-empire.jpeg',
    brief: 'Once, the biggest world empire',
    description:
      'The New Kingdom, also referred to as the Egyptian Empire, is the period in ancient Egyptian history between the sixteenth century BC and the eleventh century BC, covering the Eighteenth, Nineteenth, and Twentieth dynasties of Egypt.',
    alt: 'Egyptians celebrating',
  },
  {
    name: 'Afterlife',
    image: './src/resources/afterlife.jpeg',
    brief: 'Death is just a new beginning',
    description:
      'The ancient Egyptians attitude towards death was influenced by their belief in immortality. They regarded death as a temporary interruption, rather than the cessation of life.',
    alt: 'A God taking the soul of the deceased',
  },
];

const loadSections = (sections) => {
  sections.forEach((section) => {
    const textHTML = `
    <li class="exhib-section-item">
      <div class="exhib-section-img-div">
        <div class="pattern-div"></div>
        <img
          class="exhib-section-img"
          src="${section.image}"
          alt="${section.alt}"
        />
      </div>
      <div class="exhib-section-content-div">
        <h4 class="exhib-section-title">${section.name}</h4>
        <p class="exhib-section-brief">
        ${section.brief}
        </p>
        <p class="exhib-section-description">
        ${section.description}
        </p>
      </div>
    </li>`;
    exhibSectionList.insertAdjacentHTML('beforeend', textHTML);
  });
};

loadSections(exhibSections);
