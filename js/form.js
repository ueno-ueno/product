//お問合せフォーム
document.addEventListener('DOMContentLoaded', function () {

  const radioGroup = document.querySelector('.indexContact__form--radio-group');
  const indexContactFields = document.querySelector('.indexContact__fields');
  
  // 初期状態ではフィールドを非表示にする
  indexContactFields.style.display = 'none';

  // ラジオボタンの変更を監視
  radioGroup.addEventListener('change', function(event) {
    if (event.target.type === 'radio') {
      if (event.target.value === 'web') {
        indexContactFields.style.display = 'block';
      } else {
        indexContactFields.style.display = 'none';
      }
    }
  });

const form =document.querySelector('.indexContact__form');

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  const data = new FormData(form);
  console.log(data);
  for(c of data){
    //まとめて取得しても項目ごとに配列で分けることもできる
    console.log(c);
    //キーと価を別々に取り出すこともできる
    console.log(c[0],c[1])
  }
  fetch('https://',{
    method: 'post',
    body: data,
    })
});
});


