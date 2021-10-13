const getMyElement = (parameter) => document.querySelector(parameter);
const createMyElement = (parameter) => document.createElement(parameter);

const navDiv = createMyElement('div');
navDiv.className = 'mobile-nav-div';
const navList = createMyElement('ul');
const navAbout = createMyElement('li');
const navAboutAnchor = createMyElement('a');
navAboutAnchor.textContent = 'About';
navAboutAnchor.href = '../../about.html';
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
navProgram.appendChild(navProgramAnchor);
navForum.appendChild(navForumAnchor);
navSponsor.appendChild(navSponsorAnchor);
navNews.appendChild(navNewsAnchor);

navList.appendChild(navAbout);
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
