'use strict';

function toggleModalWindow() {
  const requestButtons = document.querySelectorAll('.button-request');
  const modalWindow = document.querySelector('.modal');

  [...requestButtons].forEach(button => button.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    modalWindow.classList.toggle('modal__show');
  }));

  document.body.addEventListener('click', () => {
    const { target } = event;
    if (target.classList.contains('modal')) {
      document.body.style.overflow = 'auto';
      modalWindow.classList.toggle('modal__show');
    }
  })
}

function slider() {
  const frame = document.querySelector('.slider');
  const dots = document.querySelector('.slider__dots');
  const itemOfslider = document.querySelector('.image-1');

  console.log(itemOfslider);

  dots.addEventListener('click', (event) => {
    const dotValue = +event.target.value;
    if(dotValue === 1) {
      itemOfslider.style.marginLeft = '0';
    } else {
      itemOfslider.style.marginLeft = `-${frame.offsetWidth * (dotValue - 1)}px`;
    }
  })
}

toggleModalWindow();
slider();


const form = document.querySelector('.request__form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const webInput = document.getElementById('web');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  clearError(nameInput, emailInput, webInput)
  validation(nameInput, emailInput, webInput);
})

function validation(...inputs) {

  inputs.forEach(input => {
    if(!input.value) {
      input.classList.add('inputError');
    }
  })

}

function clearError(...inputs) {
  inputs.forEach(input => {
    if(input.value) {
      input.classList.remove('inputError');
    }
  })
}


////////////toggle

const toggle = document.querySelector('.nav__toggle');
const list = document.querySelector('.nav__list');
const lines = document.querySelectorAll('.nav__toggle-line');
const firstLine = document.querySelector('.line--1');
const secondLine = document.querySelector('.line--2');
const thirdLine = document.querySelector('.line--3');
const links = document.querySelectorAll('.nav__link');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('nav__toggle--active');
  lines.forEach(line => line.classList.toggle('nav__toggle-line--active'));
  firstLine.classList.toggle('line--1--active');
  secondLine.classList.toggle('line--2--active');
  thirdLine.classList.toggle('line--3--active');
  list.classList.toggle('nav__list--open');
})
