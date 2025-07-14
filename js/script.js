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


// ヒーローセクションのSwiper
const heroSwiper = new Swiper('.section.hero .swiper', {
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 3000,
  slidesPerView: 1,
  spaceBetween: 20,
  allowTouchMove: false,
  breakpoints: {
    980: {
      slidesPerView: 3,
    },
    430: {
      slidesPerView: 2,
    }
  }
});

// 商品セクションのSwiper
const productSwiper = new Swiper('.product-swiper', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 800,
  slidesPerView: 2,
  spaceBetween: 20,
  allowTouchMove: true,
  breakpoints: {
    980: {
      slidesPerView: 4,
    },
    430: {
      slidesPerView: 3,
    }
  }
  // 必要に応じてページネーションやナビゲーションも追加可能
});





// トップへ戻るボタンの表示・動作
const toTopBtn = document.getElementById('toTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    toTopBtn.classList.add('show');
  } else {
    toTopBtn.classList.remove('show');
  }
});
toTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

});

//フェードアニメーション
gsap.registerPlugin(ScrollTrigger);
const fade = gsap.utils.toArray('.fade')
const slideLeft = gsap.utils.toArray('.slideLeft')
const slideRight = gsap.utils.toArray('.slideRight')

fade.forEach(el => {
  gsap.fromTo(el, {
    y: 40, 
    opacity: 0, 
    duration: 3, 
    ease:'power4.inOut' },
    {
      y: 0, 
      opacity: 1, 
      duration: 2.5, 
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: el,
        start: 'top 70%',
        // markers: true,
      },
    });
});

slideLeft.forEach((leftEl, i) => {
  const rightEl = slideRight[i];
  if (!rightEl) return;

  ScrollTrigger.create({
    trigger: leftEl,
    start: 'top 70%',
    onEnter: () => {
      const tl = gsap.timeline();
      tl.fromTo(
        leftEl,
        { x: -100, opacity: 0},
        { x: 0, opacity: 1, duration: 1.5, ease: 'expo.power4' }
      )
      .fromTo(
        rightEl,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'expo.power4' },
        ">" // 左が終わったらすぐ右
      );
    }
  });
});
