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
if (false) { //条件分岐

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

if (true) { // 数当てゲーム
    // 乱数生成コード。 Math.random() は 0 以上 1 未満の値を返す
    const number = Math.floor(Math.random() * 6);
    const answer = parseInt(window.prompt("数当てゲーム。 0-5の数字を入力します"));

    let message;
    if (answer === number) {
        message = "正解";
    } else if (answer < number) {
        message = "もっと大きい";
    } else if (answer > number) {
        message = "もっと小さい";
    } else {
        message = "0-5の数字を入力してください";
    }

    window.alert(message);

    // "===" が等しい "!==" が等しくない。後者はあまり見慣れなかったので注意
    // parseInt() で変換失敗した場合は、"NaN" が返却される。
    // "NaN" の性質は、概ね他の言語と同じ模様。
}