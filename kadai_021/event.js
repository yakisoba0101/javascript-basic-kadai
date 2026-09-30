//ボタンの要素を取得
const btn = document.getElementById('btn');

//h2　要素の　id textを取得
const text = document.getElementById('text'); 

//ボタンがクリックされたときに実行
btn.addEventListener('click', function() {
  //非同期処理で2秒後に処理を実行
  setTimeout(function() {
    //h2の要素のテキストを変更する
    text.textContent = 'ボタンをクリックしました';
    //変更したテキストをコンソールに出力する
    console.log(text.textContent);
  }, 2000);
});