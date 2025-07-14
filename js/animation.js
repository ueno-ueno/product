//フェードアニメーション
gsap.registerPlugin(ScrollTrigger);
const fade = gsap.utils.toArray('.fade');
const slideLeft = gsap.utils.toArray('.slideLeft');
const slideRight = gsap.utils.toArray('.slideRight');

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