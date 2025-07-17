// Intersection Observerでアニメーション制御

const fadeEls = document.querySelectorAll('.fade');
const slideLeftEls = document.querySelectorAll('.slideLeft');
const slideRightEls = document.querySelectorAll('.slideRight');

// フェード・スライド共通
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      obs.unobserve(entry.target); // 一度だけアニメーション
    }
  });
}, {
  threshold: 0.3 // 画面に30%入ったら
});

// それぞれ監視
fadeEls.forEach(el => observer.observe(el));
slideLeftEls.forEach(el => observer.observe(el));
slideRightEls.forEach(el => observer.observe(el));

// スライドLeft/Rightを同時に出したい場合（ペアで出す場合）
slideLeftEls.forEach((leftEl, i) => {
  const rightEl = slideRightEls[i];
  if (!rightEl) return;
  const pairObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        leftEl.classList.add('in-view');
        rightEl.classList.add('in-view');
        obs.unobserve(leftEl);
      }
    });
  }, { threshold: 0.3 });
  pairObserver.observe(leftEl);
});