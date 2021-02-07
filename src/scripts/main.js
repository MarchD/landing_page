'use strict';

const requestButtons = document.querySelectorAll('.button-request');
const modalWindow = document.querySelector('.modal');

function toggleModalWindow() {
  [...requestButtons].forEach(button => button.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    modalWindow.classList.toggle('modal__show');
  }));

  document.body.addEventListener('click', (event) => {
    const { target } = event;

    if (target.classList.contains('modal')) {
      document.body.style.overflow = 'auto';
      modalWindow.classList.toggle('modal__show');
    }
  });
}

const frame = document.querySelector('.slider');
const dots = document.querySelector('.slider__dots');
const itemOfSlider = document.querySelector('.image-1');

function slider() {
  if (window.innerWidth < 1100) {
    itemOfSlider.style.marginLeft = '0';
  };

  dots.addEventListener('click', (event) => {
    const dotValue = +event.target.value;

    if (dotValue === 1) {
      itemOfSlider.style.marginLeft = '0';
    } else {
      itemOfSlider.style.marginLeft = `-${frame.offsetWidth * (dotValue - 1)}px`;
    }
  });
}

const form = document.querySelector('.request__form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const webInput = document.getElementById('web');

function validation() {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    clearError(nameInput, emailInput, webInput);
    validationInputs(nameInput, emailInput, webInput);
  });

  function validationInputs(...inputs) {
    inputs.forEach(input => {
      if (!input.value) {
        input.classList.add('inputError');
      }
    });
  }

  function clearError(...inputs) {
    inputs.forEach(input => {
      if (input.value) {
        input.classList.remove('inputError');
      }
    });
  }
}

const toggle = document.querySelector('.nav__toggle');
const list = document.querySelector('.nav__list');
const lines = document.querySelectorAll('.nav__toggle-line');
const firstLine = document.querySelector('.line--1');
const secondLine = document.querySelector('.line--2');
const thirdLine = document.querySelector('.line--3');
const page = document.querySelector('.page');

function toggleItems() {
  toggle.classList.toggle('nav__toggle--active');
  lines.forEach(line => line.classList.toggle('nav__toggle-line--active'));
  firstLine.classList.toggle('line--1--active');
  secondLine.classList.toggle('line--2--active');
  thirdLine.classList.toggle('line--3--active');
  list.classList.toggle('nav__list--open');
  page.classList.toggle('page__non-scroll');
}

function toggleMenu() {
  toggle.addEventListener('click', () => {
    toggleItems();
  });

  list.addEventListener('click', (event) => {
    const { target } = event;

    if (target.tagName === 'A' || 'BUTTON') {
      toggleItems();
    }
  });
};

toggleModalWindow();
slider();
validation();
toggleMenu();
window.addEventListener('resize', slider);

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1100) {
    toggle.classList.remove('nav__toggle--active');
    lines.forEach(line => line.classList.remove('nav__toggle-line--active'));
    firstLine.classList.remove('line--1--active');
    secondLine.classList.remove('line--2--active');
    thirdLine.classList.remove('line--3--active');
    list.classList.remove('nav__list--open');
    page.classList.remove('page__non-scroll');
  }
});
