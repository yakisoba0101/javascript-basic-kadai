// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

//h2のid textを取得する
const text = document.getElementById('text');

// btnがクリックされたときに実行される関数を定義する
btn.addEventListener('click', function() {

  // textの内容を変更する
  text.textContent = 'ボタンをクリックしました';
});