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

if (false) { // 数当てゲーム
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

if (false) { // 論理演算子
    // 仕様に沿ったプログラムを組むことで論理演算子を学習する。以下仕様

    // 19時以降21時までは「お弁当30%off」
    // 9時台か15時台なら「お弁当1個おまけ」
    // それ以外なら「お弁当はいかがですか」

    // このお店潰れそう。

    const hour = new Date().getHours();
    if (hour >= 19 && hour < 21) {
        window.alert("お弁当30%off");
    } else if (hour === 9 || hour === 15) {
        window.alert("お弁当１個おまけ");
    } else {
        window.alert("お弁当はいかがですか");
    }

    // 現状、20時のため、一番上のブロックを通過する。

}

// 関数を定義する
// 引数にも戻り値にも型宣言が無いのが不安。

function total(price) {
    const tax = 0.1;
    return price + price * tax;
}

if (false) {
    // 消費税 10% この書籍は新しい
    console.log("コーヒーメーカーの値段は" + total(8000) + "円(税込みです)");

    // index.html output 要素を書き換える
    document.getElementById("output").textContent = "コーヒーメーカーの値段は" + total(8000) + "円（税込みです）";
}

// 普通のfizzBuzz
// 写経
function fizzBuzz1() {
    function fizzBuzz(num) {
        if (num % 3 === 0 && num % 5 === 0) {
            return "fizzbuzz";
        } else if (num % 3 === 0) {
            return "fizz";
        } else if (num % 5 === 0) {
            return "buzz";
        } else {
            return num;
        }
    }

    let i = 1;
    while (i <= 30) {
        console.log(fizzBuzz(i));
        i += 1;
    }
}

// 自前。やってること変わらない
function fizzBuzz2() {
    let i = 1;
    while (i <= 30) {
        let output = "";
        if (i % 3 === 0) {
            output += "fizz";
        }

        if (i % 5 === 0) {
            output += "buzz";
        }

        console.log((output === "") ? i : output);
        i += 1;
    }
}

// 配列
function arr() {
    let ar1 = []; // 要素数０で初期化
    let ar2 = ["element1", "element2", "element3"]; // 初期化時代入
    let ar3 = ["element1", 1]; // 複数の型が同居可能。不安。

    // ループによる取り出し for...of を使用する。of は初めて見る。
    // 普通の for はまだテキストに出てきてない。jsには無い？
    for (let item of ar2) {
        // この書式はテンプレートリテラルと呼ぶ。
        // ${}で囲まれた変数の中身、メソッドの返却値を取り出すことができる。
        // その他、テンプレートリテラル内では改行が有効
        const li =
            `<li>
                ${item}
            </li>`;

        // 第一引数は "beforebegin", "afterbegin", "beforeend", "afterend" のいずれか。
        // 定数が定義されているクラスとかは無い。更に列挙型も無いらしい。不安しか無い。
        document.getElementById("list").insertAdjacentHTML("beforeend", li);
    }

    // 配列の要素をいじるメソッド
    // pop() 最後尾削除
    // push(e) 最後尾追加
    // shift() 先頭削除
    // unshift(e) 先頭追加

    // ActionScript の Array と同じなので問題ない。
}

// オブジェクト
function obj() {
    // オブジェクトの宣言、初期化
    let object = { key1: "value", key2: "value2", key3: 100 };

    // オブジェクトの宣言のみ
    let initObject = {};

    // vscode だと key の補完が可能っぽい。すごい
    // 値へのアクセスはドット演算子か配列アクセス演算子。
    console.log(object.key);
    console.log(object["key2"]);

    // 値の列挙は for in で行う
    // テキストには for in はオブジェクト専用と書いてあるが、実際に試してみたところ配列にも使用可みたい。
    // 一時変数名は p が一般的とのこと。for in 内では値を文字列から参照するのでドットアクセスは不可。
    for (let p in object) {
        // object の for in では変数の順序は不定。
        console.log(`val = ${object[p]}`);
        document.getElementById(p).textContent = object[p];
    }

    // オブジェクトにメソッドを格納。
    // C# のデリゲートとかラムダ式みたいな特殊な記法ではなく、キーの後ろに通常のメソッド宣言と同様に記述する
    let o = {
        f: function () {
            return "result";
        }
    };

    console.log(o.f());
}

// 入力、イベント
function input() {

    // submit は送るの意味らしい。
    // obsubmit は送信時に送出されるイベントとのこと
    document.getElementById("form").onsubmit = function (event) {

        // イベントをキャンセルする呪文。ここでは再読み込みをキャンセルする。
        event.preventDefault();
        console.log("クリックされました");

        // .word は HTML上の <form>内、<input> の name属性の値
        const search = document.getElementById("form").word.value;
        document.getElementById("output").textContent = `${search}の検索中`;
    };
}

// タイマー

function dateTimer() {

    // 第一引数に未来の時間を表す Date オブジェクトを受け取り、現在日時からその日時までの時間を、整数値を詰めた配列で取得します。
    function countdown(due) {
        const now = new Date();
        const rest = due.getTime() - now.getTime();

        const sec = Math.floor(rest / 1000) % 60;
        const min = Math.floor(rest / 1000 / 60) % 60;
        const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
        const days = Math.floor(rest / 1000 / 60 / 60 / 24);

        return [days, hours, min, sec];
    }

    let goal = new Date();
    goal.setHours(23);
    goal.setMinutes(59);
    goal.setSeconds(59);

    function recalc() {
        const counter = countdown(goal);
        console.log(counter);
        const time = `日付変更まで${counter[1]}時間${counter[2]}分${counter[3]}秒`
        document.getElementById("timer").textContent = time;
        refresh();
    }

    function refresh() {
        // 1000ms 間隔で recalc　を実行
        setTimeout(recalc, 1000);
    }

    recalc();
}

dateTimer();
