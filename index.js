// header

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger_active');

  menu.classList.toggle('header__nav_active');

  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger_active');

    menu.classList.remove('header__nav_active');

    document.body.classList.remove('stop-scroll');
  })
})

// articles

let articlesBtn = document.querySelector('.articles__btn');

let articlesItem = document.querySelectorAll('.articles__item');

articlesBtn.addEventListener('click', function () {
  articlesItem.forEach(function (el) {
    el.classList.add('articles__item_visible');
  });

  articlesBtn.classList.add('articles__btn_hidden');
})
