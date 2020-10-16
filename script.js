"user strict";

// 基本的な出力
console.log("test");

// ****************************************
if (false) { // 変数を定義する。

    // 変数定義のフォーマットは...

    let variableName;

    // 無論同時代入も可。

    // window.prompt は入力機能付きダイアログ
    // テキストを入力して確定ボタンを押すことで、入力内容をリターンする */
    let answer = window.prompt("ヘルプを見ますか？");
    console.log(answer);

    // 定数の宣言。 let ではなく const で宣言する。
    const answerB = "定数";

    // 書き換えは実行時にエラーになる。
    // answerB = "rewrite";

    // 文字列の比較
    // "===" を使用する。"==" も存在するが、ひとまず3つの方を使う。
    if (answer === "yes") {
        window.alert("タップでジャンプします");
    }

    // 変数の寿命はページ内でのみ有効。HTMLページの変遷時に全変数はリセットされる。
    // その他のルールは多言語の変数と同じ模様。特記するようなことがあれば追記する。
}
// ****************************************

// ****************************************
if (true) { //条件分岐

    // 見たところ、ifブロック内で宣言された変数は、そのブロック内のみ有効な模様（当然か）
    const answer = window.prompt("ヘルプを見ますか？");

    // if, else if, else の書式は以下。特筆するようなことはない。
    if (answer === "yes") {
        window.alert("タップでジャンプ");
    } else if (answer === "no") {
        window.alert("ゲーム起動中");
    } else {
        window.alert("yesかnoで答えてください");
    }
}