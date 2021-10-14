const getMyElement = (parameter) => document.querySelector(parameter);
const createMyElement = (parameter) => document.createElement(parameter);

const navDiv = createMyElement('div');
navDiv.className = 'mobile-nav-div';
const navList = createMyElement('ul');
// navList.className = 'mobile-nav-list';
const navAbout = createMyElement('li');
const navAboutAnchor = createMyElement('a');
navAboutAnchor.className = 'toggle-about';
navAboutAnchor.textContent = 'About';
navAboutAnchor.href = 'about.html';
const navHome = createMyElement('li');
const navHomeAnchor = createMyElement('a');
navHomeAnchor.className = 'toggle-home';
navHomeAnchor.textContent = 'Home';
navHomeAnchor.href = 'index.html';
const navProgram = createMyElement('li');
const navProgramAnchor = createMyElement('a');
navProgramAnchor.textContent = 'Program';
navProgramAnchor.href = '#';
const navForum = createMyElement('li');
const navForumAnchor = createMyElement('a');
navForumAnchor.textContent = 'Forum';
navForumAnchor.href = '#';
const navSponsor = createMyElement('li');
const navSponsorAnchor = createMyElement('a');
navSponsorAnchor.textContent = 'Sponsor';
navSponsorAnchor.href = '#';
const navNews = createMyElement('li');
const navNewsAnchor = createMyElement('a');
navNewsAnchor.textContent = 'News';
navNewsAnchor.href = '#';
const closeIcon = createMyElement('span');
closeIcon.textContent = 'X';
closeIcon.id = 'closeIcon';

navAbout.appendChild(navAboutAnchor);
navHome.appendChild(navHomeAnchor);
navProgram.appendChild(navProgramAnchor);
navForum.appendChild(navForumAnchor);
navSponsor.appendChild(navSponsorAnchor);
navNews.appendChild(navNewsAnchor);

navList.appendChild(navAbout);
navList.appendChild(navHome);
navList.appendChild(navProgram);
navList.appendChild(navForum);
navList.appendChild(navSponsor);
navList.appendChild(navNews);

navDiv.appendChild(closeIcon);
navDiv.appendChild(navList);

const humbergerButton = getMyElement('.menu-icon-mobile');

closeIcon.addEventListener('click', () => {
  navDiv.style.display = 'none';
});

humbergerButton.addEventListener('click', () => {
  document.body.appendChild(navDiv);
  navDiv.style.backgroundColor = '#272a31';
  navDiv.style.display = 'block';
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

const loadSections = function (sections) {
  sections.forEach((section) => {
    const exhibSectionItem = createMyElement('li');
    exhibSectionItem.classList.add('exhib-section-item');

    const exhibSsectionImgDiv = createMyElement('div');
    exhibSsectionImgDiv.classList.add('exhib-section-img-div');

    const patternDiv = createMyElement('div');
    patternDiv.className = 'pattern-div';

    const exhibSectionImg = createMyElement('img');
    exhibSectionImg.classList.add('exhib-section-img');
    exhibSectionImg.src = section.image;
    exhibSectionImg.alt = section.alt;

    const exhibSectionContentDiv = createMyElement('div');
    exhibSectionContentDiv.classList.add('exhib-section-content-div');

    const exhibSectionTitle = createMyElement('h4');
    exhibSectionTitle.classList.add('exhib-section-title');
    exhibSectionTitle.textContent = section.name;

    const exhibSectionBrief = createMyElement('p');
    exhibSectionBrief.classList.add('exhib-section-brief');
    exhibSectionBrief.textContent = section.brief;

    const exhibSectionDescription = createMyElement('p');
    exhibSectionDescription.classList.add('exhib-section-description');
    exhibSectionDescription.textContent = section.description;

    const exhibSectionList = getMyElement('.exhib-section-list');

    exhibSsectionImgDiv.appendChild(patternDiv);
    exhibSsectionImgDiv.appendChild(exhibSectionImg);
    exhibSectionContentDiv.appendChild(exhibSectionTitle);
    exhibSectionContentDiv.appendChild(exhibSectionBrief);
    exhibSectionContentDiv.appendChild(exhibSectionDescription);
    exhibSectionItem.appendChild(exhibSsectionImgDiv);
    exhibSectionItem.appendChild(exhibSectionContentDiv);
    exhibSectionList.appendChild(exhibSectionItem);
  });
};

loadSections(exhibSections);
