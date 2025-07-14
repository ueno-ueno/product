
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