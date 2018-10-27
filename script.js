window.onscroll = () => {
  let nav = document.querySelector('.main-nav');
  let navTop = nav.offsetTop;

  if (window.pageYOffset > navTop) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
};

document.addEventListener('mouseover', event => {
  switch (event.target.id) {
    case 'plans-nav':
      document.querySelector('.plans-dropdown').classList.add('isDisplayed');
      break;
    case 'devices-nav':
      document.querySelector('.devices-dropdown').classList.add('isDisplayed');
      break;
    case 'goodthings-nav':
      document.querySelector('.goodthings-dropdown').classList.add('isDisplayed');
      break;
    case 'help-nav':
      document.querySelector('.help-dropdown').classList.add('isDisplayed');
      break;
  }
});

document.addEventListener('mouseout', event => {
  switch (event.target.id) {
    case 'plans-nav':
      document.querySelector('.plans-dropdown').classList.remove('isDisplayed');
      break;
    case 'devices-nav':
      document.querySelector('.devices-dropdown').classList.remove('isDisplayed');
      break;
    case 'goodthings-nav':
      document.querySelector('.goodthings-dropdown').classList.remove('isDisplayed');
      break;
    case 'help-nav':
      document.querySelector('.help-dropdown').classList.remove('isDisplayed');
      break;
  }
});

document.addEventListener('mouseout', event => {
  switch (event.target.className) {
    case 'plans-dropdown':
      document.querySelector('.plans-dropdown').classList.remove('isDisplayed');
      break;
    case 'devices-dropdown':
      document.querySelector('.devices-dropdown').classList.remove('isDisplayed');
      break;
    case 'goodthings-dropdown':
      document.querySelector('.goodthings-dropdown').classList.remove('isDisplayed');
      break;
    case 'help-dropdown':
      document.querySelector('.help-dropdown').classList.remove('isDisplayed');
      break;
  }
});

const details = document.querySelector('.further-details-bottom');
const detailsExpand = document.querySelector('.detailsExpand');

detailsExpand.addEventListener('click', () => {
  details.classList.toggle('isDisplayed');
  if (detailsExpand.getAttribute('src') === './images/up-red.svg') {
    detailsExpand.setAttribute('src', './images/down-red.svg');
  } else {
    detailsExpand.setAttribute('src', './images/up-red.svg');
  }
});

const avail = document.querySelector('.availability-bottom');
const availExpand = document.querySelector('.availExpand');

availExpand.addEventListener('click', () => {
  avail.classList.toggle('isDisplayed');
  if (availExpand.getAttribute('src') === './images/up-red.svg') {
    availExpand.setAttribute('src', './images/down-red.svg');
  } else {
    availExpand.setAttribute('src', './images/up-red.svg');
  }
});

let people = document.querySelector('.people');
let peopleIcon = document.querySelector('#people');
let chat = document.querySelector('.chat');
let chatIcon = document.querySelector('#chat');
let video = document.querySelector('.video');
let videoIcon = document.querySelector('#video');
let music = document.querySelector('.music');
let musicIcon = document.querySelector('#music');
let maps = document.querySelector('.maps');
let mapsIcon = document.querySelector('#maps');

let container = document.querySelector('.dot-section-icons');
let passTypes = document.querySelectorAll('.pass-type');
let icons = document.querySelectorAll('.dot-images');

people.classList.add('isDisplayed');

container.addEventListener('click', event => {
  if (event.target.parentElement.className === 'dot-images' || event.target.parentElement.className === 'dot-section-icons') {
    console.log('hello');
    for (let i = 0; i < passTypes.length; i++) {
      passTypes[i].classList.remove('isDisplayed');
      icons[i].style.backgroundColor = 'transparent';
      icons[i].classList.remove('current');
      peopleIcon.childNodes[1].setAttribute('src', './images/people.svg');
      chatIcon.childNodes[1].setAttribute('src', './images/chat.svg');
      videoIcon.childNodes[1].setAttribute('src', './images/video.svg');
      musicIcon.childNodes[1].setAttribute('src', './images/music.svg');
      mapsIcon.childNodes[1].setAttribute('src', './images/maps.svg');
    }

    if (event.target.id === 'people' || event.target.parentElement.id === 'people') {
      people.classList.add('isDisplayed');
      peopleIcon.childNodes[1].setAttribute('src', './images/people-white.svg');
      peopleIcon.classList.add('current');
      peopleIcon.style.backgroundColor = '#00b0ca';
    }

    if (event.target.id === 'chat' || event.target.parentElement.id === 'chat') {
      chat.classList.add('isDisplayed');
      chatIcon.childNodes[1].setAttribute('src', './images/chat-white.svg');
      chatIcon.classList.add('current');
      chatIcon.style.backgroundColor = '#a8b600';
    }

    if (event.target.id === 'video' || event.target.parentElement.id === 'video') {
      video.classList.add('isDisplayed');
      videoIcon.childNodes[1].setAttribute('src', './images/video-white.svg');
      videoIcon.classList.add('current');
      videoIcon.style.backgroundColor = '#9c2aa0';
    }

    if (event.target.id === 'music' || event.target.parentElement.id === 'music') {
      music.classList.add('isDisplayed');
      musicIcon.childNodes[1].setAttribute('src', './images/music-white.svg');
      musicIcon.classList.add('current');
      musicIcon.style.backgroundColor = '#eb9700';
    }

    if (event.target.id === 'maps' || event.target.parentElement.id === 'maps') {
      maps.classList.add('isDisplayed');
      mapsIcon.childNodes[1].setAttribute('src', './images/maps-white.svg');
      mapsIcon.classList.add('current');
      mapsIcon.style.backgroundColor = '#a8b600';
    }
  }
});

const mainNav = document.querySelector('.main-nav');
const menu = document.querySelector('#menu');

toggleMenu = () => {
  mainNav.classList.toggle('isDisplayed');
  if (menu.getAttribute('src') === './images/menu.svg') {
    menu.setAttribute('src', './images/menu-purple.svg');
  } else {
    menu.setAttribute('src', './images/menu.svg');
  }
};

menu.addEventListener('click', toggleMenu);
