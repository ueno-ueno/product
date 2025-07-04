// ヒーローセクションのSwiper
const heroSwiper = new Swiper('.section.hero .swiper', {
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 3000,
  slidesPerView: 3,
  spaceBetween: 20,
  allowTouchMove: false,
});

// 商品セクションのSwiper
const productSwiper = new Swiper('.product-swiper', {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 800,
  slidesPerView: 4,
  spaceBetween: 20,
  allowTouchMove: true,
  // 必要に応じてページネーションやナビゲーションも追加可能
});