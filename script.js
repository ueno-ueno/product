// 'use strict'

document.addEventListener('DOMContentLoaded', function () {

// // ロゴ文字のドロップインアニメーション（GSAP）
// function animateLogoLetters() {
//   console.log('GSAP animation starting...');
//   const letters = document.querySelectorAll('.logo-letter');
//   console.log('Found letters:', letters.length);
  
//   // まず文字を非表示にする
//   gsap.set(letters, {
//     opacity: 0,
//     y: -50
//   });
  
//   // アニメーション実行
//   gsap.to(letters, {
//     opacity: 1,
//     y: 0,
//     duration: 0.8,
//     ease: "back.out(1.7)",
//     stagger: 0.1,
//     delay: 0.5
//   });
// }

// // ページ読み込み完了後に実行
// window.addEventListener('load', function() {
//   console.log('Page loaded, GSAP available:', typeof gsap !== 'undefined');
//   if (typeof gsap !== 'undefined') {
//     setTimeout(animateLogoLetters, 1000);
//   } else {
//     console.error('GSAP is not loaded');
//   }
// });

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

// ハンバーガーメニューの機能
const hamburgerMenu = document.getElementById('hamburgerMenu');
const headerNav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__nav-item a');

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