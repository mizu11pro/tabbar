// .hide();は特定のHTML要素を非表示にするメソッド
// ↓id="tab-cintents"の要素のうち、class="tab"であり、id="tab1"ではない要素が非表示になる
$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function (event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});
// 6行目 id="tab-contents"内のいずれかのタブがクリックされた時に、そのタブ内の全コンテンツを一旦非表示にしている

// 7行目 ここでは、activeが削除対象のクラスとして指定されています。
// CSSの#tab-menu .activeの設定では、タブのクラスがactiveのときは背景色が白色／文字色が黒色になるように設定されています。
// タブを切り替えるときは、このCSS設定もいったん削除しなければなりません。このため、.removeClass()にactiveクラスを指定しています。

// 8行目 .addClass()は、任意のHTML要素にクラス属性を追加できるメソッドです。
// ここでは、activeが追加対象のクラスとして指定されています。
// どのときにactiveクラスが追加されるかというと、$(this)のとき、つまり、タブがクリックされたときです。

// 9行目 .attr()は、HTML要素の属性を取得したり設定できるメソッド
// href属性を取得するように指定している
// .show()メソッドは、要素を表示するメソッドなので、取得したhref属性の中身をthisが行われた時に表示する