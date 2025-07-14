'use strict'

document.addEventListener('DOMContentLoaded', function () {
  //ローディングアニメーション
  const load = document.querySelector('.load')
  setTimeout(() => {
    load.classList.add('close')
  }, 700);


  // ハンバーガーメニューの機能
const hamburgerMenu = document.getElementById('header__hamburgerMenu');
const headerNav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__navItem a');

// ハンバーガーメニューの開閉
hamburgerMenu.addEventListener('click', function() {
  hamburgerMenu.classList.toggle('active');
  headerNav.classList.toggle('active');
  
  // メニューが開いている時はスクロールを無効化
  if (headerNav.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

// ナビゲーションリンクをクリックした時にメニューを閉じる
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    hamburgerMenu.classList.remove('active');
    headerNav.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// メニュー外をクリックした時にメニューを閉じる
document.addEventListener('click', function(e) {
  if (!hamburgerMenu.contains(e.target) && !headerNav.contains(e.target)) {
    hamburgerMenu.classList.remove('active');
    headerNav.classList.remove('active');
    document.body.style.overflow = '';
  }
});

});
