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


