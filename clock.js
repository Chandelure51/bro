// 時計のメインとなる関数
function clock()
{
    // 曜日を表す各文字列の配列
    var weeks = new Array("Sun","Mon","Thu","Wed","Thr","Fri","Sat");
    // 現在日時を表すインスタンスを取得
    var now = new Date();
    // 年
    var y = now.getFullYear();
    // 月 0~11で取得されるので実際の月は+1したものとなる
    var mo = now.getMonth() + 1;
    // 日
    var d = now.getDate();
    // 曜日 0~6で日曜始まりで取得されるのでweeks配列のインデックスとして指定する
    var w = weeks[now.getDay()];
    // 時
    var h = now.getHours();
    // 分
    var mi = now.getMinutes();
    // 秒
    var s = now.getSeconds();

    // 日付時刻文字列のなかで常に2ケタにしておきたい部分はここで処理
    if (mo < 10) mo = "0" + mo;
    if (d < 10) d = "0" + d;
    if (mi < 10) mi = "0" + mi;
    if (s < 10) s = "0" + s;

    //　HTML: <span id="clock_date">(ココの日付文字列を書き換え)</span>
    document.getElementById("clock_date").innerHTML =  y + "/" + mo + "/" + d + " (" + w + ")";
    //　HTML: <span id="clock_time">(ココの時刻文字列を書き換え)</span>
    document.getElementById("clock_time").innerHTML = h + ":" + mi + ":" + s;
    //　HTML: <div id="clock_frame"> の内部要素のフォントサイズをウインドウサイズの10分の1ピクセルに設定
    document.getElementById("clock_frame").style.fontSize =  window.innerWidth / 10 + "px";
}

// 上記のclock関数を1000ミリ秒ごと(毎秒)に実行する
setInterval(clock, 1000);

// ページが読み込まれた後にJavaScriptのコードを実行する
window.addEventListener('load', function(){
  // id = "lists"の要素を取得する
  const pullDownButton = document.getElementById("lists")
  // id = "pull-down"の要素を取得する
  const pullDownParents = document.getElementById("pull-down")
 
  // 要素をクリックした際にイベントを発生させる
  pullDownButton.addEventListener('click', function() {
    // プルダウンメニューの表示と非表示の設定
    if (pullDownParents.getAttribute("style") == "display:block;") {
    // pullDownParentsにdisplay:block;が付与されている場合（つまり表示されている時）実行される
      pullDownParents.removeAttribute("style", "display:block;")
    } else {
    // pullDownParentsにdisplay:block;が付与されていない場合（つまり非表示の時）実行される
      pullDownParents.setAttribute("style", "display:block;")
    }
  })
})
