const menuBtnOpen = document.querySelector('.menu-open');
const menuBtnClose = document.querySelector('.menu-close');
const circularNavbar = document.querySelector('.circular-navbar');
const blog = document.querySelector('.blog');
const navbar = document.querySelector('.navbar');

console.log('Hello');
//Add the active class
const addActiveClass = (element) => {
  element.classList.add('active');
};

//Remove the active class
const removeActiveClass = (element) => {
  element.classList.remove('active');
};

menuBtnOpen.addEventListener('click', () => {
  addActiveClass(circularNavbar);
  addActiveClass(blog);
  addActiveClass(navbar);
});

menuBtnClose.addEventListener('click', () => {
  removeActiveClass(circularNavbar);
  removeActiveClass(blog);
  removeActiveClass(navbar);
});
