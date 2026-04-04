'use strict';
// データ型
  // 文字列型（String型）
    // let myName = 'Nakamura';
    // console.log(myName);
    // console.log(typeof myName);

  // 数値型（Number型）
    // let num = 123;
    // console.log(num);
    // console.log(typeof num);

    // let dec = 123.456;
    // console.log(dec);
    // console.log(typeof dec);

// 文字列
  // 文字列結合
    // 演算子
      // let message = 'こんにちは'+'〇〇さん';
      // console.log(message);

      // let lastName = 'なかむら';
      // let firstName = 'ゆうた';
      // let message = 'こんにちは ' + lastName + ' ' + firstName + ' さん';
      // console.log(message);

    // テンプレートリテラル
      // 改行なし
        // let lastName = 'なかむら';
        // let firstName = 'ゆうた';
        // let message = `こんにちは ${lastName} ${firstName} さん`;
        // console.log(message);

      // 改行あり
//         let lastName = 'なかむら';
//         let firstName = 'ゆうた';
//         let message = `こんにちは ${lastName} ${firstName} さん
// よろしくお願いします!`;
//         console.log(message);

// Strictモード（厳格モード）
  // 'use strict';

// エスケープシーケンス
  // 円マーク
    // console.log('\\');
  // タブ
    // console.log('aaa\taaa');
  // 改行
    // console.log('aaa\naaa');
  // ''で囲まれた文字列内に'を入れる
    // console.log('aaa\'aaa\'aaa');
  // ""で囲まれた文字列内に"を入れる
    // console.log("aaa\"aaa\"aaa");

// 型変換
  // let birthYear = '2000';
  // let age = 18;
  // console.log(age + age);
  // console.log(birthYear + age);
  // console.log(age + birthYear);
  // console.log(birthYear + birthYear);
  // console.log(Number(birthYear) + age);
  // console.log(String(age) + '歳');

// ブーリアン型（論理型）
  // true（真）
    // let b = true;
    // if(b) {
    //   console.log('はい');
    // } else {
    //   console.log('いいえ');
    // }

  // false（偽）
    // let b = false;
    // if(b) {
    //   console.log('はい');
    // } else {
    //   console.log('いいえ');
    // }

  // 論理否定（論理反転）
    // true（真）
      // let b = true;
      // console.log(!b);

    // false（偽）
      // let b = false;
      // console.log(!b);

// 演算子

  // let ans = 1 + 2;
  // console.log(ans);

  // let ans = 3 - 2;
  // console.log(ans);

  // let ans = 3 * 3;
  // console.log(ans);

  // let ans = 6 / 3;
  // console.log(ans);

  // let ans = 3 % 2;
  // console.log(ans);

  // let ans = 3 ** 3;
  // console.log(ans);

  // let i = 20;
  // let j = 10;
  // let ans = i + j;
  // console.log(ans);

  // let x = 10;
  // let y = 20;
  // let z = 30;
  // let ans = x + y + z;
  // console.log(ans);

  // 複合代入演算子

      // let num = 20;
      // num += 10;
      // console.log(num);

      // let num = 20;
      // num -= 10;
      // console.log(num);

      // let num = 20;
      // num *= 10;
      // console.log(num);

      // let num = 20;
      // num /= 10;
      // console.log(num);

  // 論理演算子

    // &&（AND）
      // console.log(true && true);
      // console.log(true && false);
      // console.log(false && true);
      // console.log(false && false);
    
    // ||（OR）
      // console.log(true || true);
      // console.log(true || false);
      // console.log(false || true);
      // console.log(false || false);
    
    // !（NOT）
      // console.log(!true);
      // console.log(!false);

      // 運転免許証を持っていて、かつ、ゴールド免許の場合には、「あなたは優良ドライバーです」と表示する
        // let hasDriversLicense = true;
        // let hasGoldLicense = true;

        // if(hasDriversLicense && hasGoldLicense) {
        //   console.log('あなたは優良ドライバーです');
        // }

  // 三項演算子
    // 年齢が20歳以上の場合は、ビールと出力する
    // 年齢が20歳未満の場合は、コーラと出力する
      // let age = 20;
      // let beverage = (age >= 20) ? 'ビール' : 'コーラ';
      // console.log(beverage);

// エラー
  // null
    // let item = null;
    // console.log(item);
      // 変数がnullかどうか確認する
        // if(item === null) {
        //   console.log('nullです');
        // }

  // undefined
    // let x;
    // console.log(x);
      // 変数がundefinedかどうか確認する
        // if(x === undefined) {
        //   console.log('undefinedです');
        // }

// 変数
  // 変数/定数宣言（単体）
    // 変数を宣言してから値を代入する
      // let x;           // 変数宣言
      // x = 1;           // 代入
      // console.log(x);
      // x = 2;           // 再代入（可能） 
      // console.log(x);
      // let x;           // 再宣言（不可）

    // 変数の宣言と同時に値を代入する
      // let x = 1;       // 変数宣言+代入
      // console.log(x);
      // x = 2;           // 再代入（可能）
      // console.log(x);
      // let x = 3;           // 再宣言（不可）

  // 定数
    // 定数を宣言してから値を代入する
      // const x;
      // x = 1;
      // console.log(x);

  // var
    // 変数（定数）を宣言してから値を代入する
      // var x;
      // x = 1;
      // console.log(x);

    // 定数の宣言と同時に値を代入する
      // const x = 1;
      // console.log(x);

  // 変数/定数宣言（複数）
    // 個別（変数を宣言してから値を代入する）
      // let i;
      // let j;
      // let k;
      // i = 10;
      // j = 20;
      // k = 30;
      // console.log(i);
      // console.log(j);
      // console.log(k);

    // 一括（変数を宣言してから値を代入する）
      // let i, j, k;
      // i = 10;
      // j = 20;
      // k = 30;
      // console.log(i,j,k);

// インクリメント
  // 10にプラス1されて11が出力される
    // let num = 10;
    // num++;
    // console.log(num);

// デクリメント
  // 10からマイナス1されて9が出力される
    // let num = 10;
    // num--;
    // console.log(num);

// 前置演算子のインクリメント
  // consoleに11が出力される
    // let num = 10;
    // ++num;
    // console.log(num);

// 前置演算子のデクリメント
  // consoleに9が出力される
    // let num = 10;
    // --num;
    // console.log(num);

// 後置演算子のインクリメント
    // consoleに11が出力される
      // let num = 10;
      // num++;
      // console.log(num);
      // ※代入する変数がないので通常どおりデクリメントされた値が出力されている

// 後置演算子のデクリメント
  // consoleに9が出力される
    // let num = 10;
    // num--;
    // console.log(num);
    // ※代入する変数がないので通常どおりデクリメントされた値が出力されている

// 条件分岐
  // if else文（イフ・エルス）
    // 変数xの値が100以上だったら、'100以上の値です'とコンソールに出力する
    // 変数xが100未満だったら、'100未満の値です'とコンソールに出力する
      // const x = 100;
      // if(x >= 100) {
      //   console.log('100以上の値です');
      // } else {
      //   console.log('100未満の値です');
      // }

  // if else if else文（イフ・エルスイフ・エルス）
    // テストの点数xによって、通知表の成績をコンソールに出力する
    // 90点以上：A
    // 80点以上：B
    // 60点以上：C
    // 60点未満：D
    // 結果：コンソールにAが出力される
      // const x = 90;
      // if(x >= 90) {
      //   console.log('A');
      // } else if(x >= 80) {
      //   console.log('B');
      // } else if(x >= 60) {
      //   console.log('C');
      // } else {
      //   console.log('D');
      // }

    // bmiの数値に応じて「肥満」「普通」「痩せ」をコンソールに出力する
    // BMI = 体重kg / （身長m * 身長m）
    // 25以上：肥満
    // 18.5以上25未満：普通
    // 18.5未満：痩せ
    // 結果：コンソールに「普通」が出力される

      // let mass = 60;
      // let height = 1.7;
      // let bmi = mass / (height * height);
      // console.log(bmi);

      // if (bmi >= 25) {
      // console.log('肥満');
      // } else if (bmi >= 18.5) {
      // console.log('普通');
      // } else {
      // console.log('痩せ');
      // }

  // if文（入れ子）
    // 変数が、2の倍数、かつ、3の倍数のときに、メッセージを表示する
      // let num = 6;
      // if(num % 2 === 0) {
      //   if(num % 3 === 0) {
      //     console.log(`${num}は、2の倍数、かつ、3の倍数です`);
      //   }
      // }

      // 論理演算子
        // let num = 6;
        // if((num % 2 === 0) && (num % 3 === 0)) {
        //   console.log(`${num}は、2の倍数、かつ、3の倍数です`);
        // }

    // switch文
      // 入賞メッセージを出力するプログラム
      // 順位によって出力するメッセージを変える
      // 1：金賞
      // 2：銀賞
      // 3：銅賞
      // 4：4位
      // 5：5位
      // それ以外の値：選外

        // let num = 1;
        // switch(num) {
        //   case 1:
        //   console.log('金賞');
        //   break;
        //   case 2:
        //   console.log('銀賞');
        //   break;
        //   case 3:
        //   console.log('銅賞');
        //   break;
        //   case 4:
        //   console.log('4位');
        //   break;
        //   case 5:
        //   console.log('5位');
        //   break;
        //   default:
        //   console.log('選外');
        //   break;
        // }

        // if文で記述する方法
          // let num = 1;
          // if(num === 1) {
          //   console.log('金賞');
          // } else if(num === 2) {
          //   console.log('銀賞');
          // } else if(num === 3) {
          //   console.log('銅賞');
          // } else if(num === 4) {
          //   console.log('4位');
          // } else if(num === 5) {
          //   console.log('5位');
          // } else {
          //   console.log('選外');
          // }

      // おみくじプログラムの作成
      // 1～5の値をランダムに生成しその結果に応じたメッセージを出力する
      // 1：大吉
      // 2：中吉
      // 3：小吉
      // 4：吉
      // 5：凶
      // それ以外：想定外の数値です

        // let num = Math.floor(Math.random() * 5 + 1);
        // switch(num) {
        //   case 1:
        //   console.log('大吉');
        //   break;
        //   case 2:
        //   console.log('中吉');
        //   break;
        //   case 3:
        //   console.log('小吉');
        //   break;
        //   case 4:
        //   console.log('吉');
        //   break;
        //   case 5:
        //   console.log('凶');
        //   break;
        //   default:
        //   console.log('想定外の数値です');
        //   break;
        // }

// 繰り返し処理
  // for文
    // 変数iの値を1から3まで変化させてコンソールに出力する
    // 結果：コンソールに1,2,3が出力される
      // for(let i = 1; i <= 3; i++) {
      //   console.log(i);
      // }

    // 配列['a', 'b', 'c']の値を、
    // for文を利用して、
    // 1つずつコンソールに出力
    // 結果：a,b,cとコンソールに出力される
      // let arr = ['a', 'b', 'c'];
      // for(let i = 0; i < 3; i++) {
      //   console.log(arr[i]);
      // }

      // 別解
        // let arr = ['a', 'b', 'c'];
        // for(let i = 0; i < arr.length; i++) {
        //   console.log(arr[i]);
        // }

    // 1∼100の整数値について、合計値を計算してコンソールに出力する
    // 結果：コンソールに5050が出力される
      // let sum = 0;
      // for(let i = 1; i <= 100; i++) {
      //   sum = sum + i;
      // }
      // console.log(sum);
    
  // for文（入れ子）
    // for(let i = 0; i < 3; i++){
    //   for(let j = 0; j < 3; j++){
    //     console.log(`i: ${i}, j: ${j}`);
    //   }
    // }

    // 2次元配列に格納されている、
    // テストの点数をすべて取り出して表示する（for文なし）
    // 結果：配列に格納されているすべての点数がコンソールに出力される

      // const scores = [
      //   [100, 99, 98],
      //   [90, 89, 88],
      //   [80, 79, 78]
      // ];

      // console.log(scores[0][0]);
      // console.log(scores[0][1]);
      // console.log(scores[0][2]);
      // console.log(scores[1][0]);
      // console.log(scores[1][1]);
      // console.log(scores[1][2]);
      // console.log(scores[2][0]);
      // console.log(scores[2][1]);
      // console.log(scores[2][2]);

    // 2次元配列に格納されている、
    // テストの点数をすべて取り出して表示する（for文あり）
    // 結果：配列に格納されているすべての点数がコンソールに出力される

      // const scores = [
      //     [100, 99, 98],
      //     [90, 89, 88],
      //     [80, 79, 78]
      //   ];

      // for(let i = 0; i < scores.length; i++) {
      //   for(let j = 0; j < scores[i].length; j++) {
      //     console.log(scores[i][j]);
      //   }
      // }

  // while文
    // 変数iの値を1から3まで変化させながらコンソールに出力する
    // 結果：コンソールに1,2,3が出力される
      // let i = 1;
      // while(i <= 3) {
      //   console.log(i);
      //   i++;
      // }

    // whileループの途中で
    // while文を抜ける
    // jが5になったら、while文を抜ける
      // let j = 1;
      // while(j <= 10) {
      //   console.log(j);
      //   if(j === 5) {
      //     break;
      //   }
      //   j++;
      // }

  // do while文
    // 変数iの値を1から3まで変化させてコンソールに出力する
    // 結果：コンソールに1,2,3が出力される
      // let i = 1;
      // do {
      //   console.log(i);
      //   i++;
      // } while(i <= 3);

  // forEach文
    // 配列から一つずつ、
    // 要素を取り出して、
    // コンソールに出力する
      // let colors = ['Red', 'Green', 'Blue'];
      // colors.forEach(function(color){
      //   console.log(color)
      // });

      // for文で書いた場合
        // let colors = ['Red', 'Green', 'Blue'];
        // for(let i = 0; i < colors.length; i++) {
        //   console.log(colors[i]);
        // }

  // for...of文
    // 配列
      // const colors = ['Red', 'Green', 'Blue'];
      // for(const color of colors) {
      //   console.log(color);
      // }

    // 文字列
      // const str = 'JavaScript';
      // for(const value of str) {
      //   console.log(value);
      // }

// 配列
  // 配列を定義する
    // 同一のデータ型を格納する
      // const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black'];

    // 異なるデータ型を格納する
      // let arr = [1, '2', 3, '4', 5];

    // 空の配列を定義する
      // let emptyArr = [];

  // 配列を取り出す
    // const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black'];
    // console.log(colors);
    // console.log(colors[0]);
    // console.log(colors[1]);
    // console.log(colors[2]);
    // console.log(colors[3]);
    // console.log(colors[4]);
    // console.log(colors[5]);

  // 配列の個数を取得する
    // const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black'];
    // console.log(colors.length);

  // 配列の末尾の値を取得する
    // const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black'];
    // console.log(colors[colors.length - 1]);

  // 配列を操作する
    // 末尾に値を追加する
      // const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black'];
      // colors.push('Black');
      // console.log(colors);

    // 先頭に値を追加する
      // const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black'];
      // colors.unshift('White');
      // console.log(colors);

    // 値を更新する
      // const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black'];
      // colors[0] = 'Aka';
      // console.log(colors);

    // 指定した位置に値を挿入する
      // let insertArr = ['a', 'b', 'c'];
      // insertArr.splice(1, 0, 'X');
      // console.log(insertArr);

    // 指定した位置に複数の値を挿入する
      // let insertArr = ['a', 'b', 'c'];
      // insertArr.splice(1, 0, 'X', 'Y', 'Z');
      // console.log(insertArr);

    // 指定した位置から値を削除する
      // let insertArr = ['a', 'b', 'c', 'd', 'e', 'f'];
      // insertArr.splice(2, 2);
      // console.log(insertArr);

    // 値を結合する
      // let arr1 = ['a', 'b', 'c'];
      // let arr2 = ['d', 'e', 'f'];
      // let margedArr = arr1.concat(arr2);
      // console.log(margedArr);

    // 先頭の値を削除する
      // let arr3 = ['a', 'b', 'c', 'd'];
      // arr3.shift();
      // console.log(arr3);

    // 末尾の値を削除する
      // let arr3 = ['a', 'b', 'c', 'd'];
      // arr3.pop();
      // console.log(arr3);

    // 配列colorsを用意する
    // 配列に格納するデータの初期値は、'Red','Green','Blue'
    // 繰り返し処理forを使って、1個ずつ各値を取り出してコンソールに出力する
    // 結果：コンソールにRed、Green、Blueと出力される
      // const colors = ['Red', 'Green', 'Blue'];
      // for(let i = 0; i < colors.length; i++) {
      //   console.log(colors[i]);
      // }
    
    // テストの点数の、合計値、平均値を求めるプログラムを開発する
    // 集計する各点数は、100,90,80,70,60とする
    // 結果：合計値400、平均値80が出力される

      // const scores = [100, 90, 80, 70, 60];
      // let sum = 0;
      // for(let i = 0; i < scores.length; i++) {
      //   sum += scores[i];
      // }

      // const average = sum / scores.length;

      // console.log('合計値：' + sum);
      // console.log('平均値：' + average);

// 2次元配列
  // 81点のスコアを取り出してコンソールに出力する
  // 結果：コンソールに81と出力される
    // const scores = [
    //   [98,100,99],
    //   [80,81,97],
    //   [70,96,85]
    // ];
    // console.log(scores[1][1]);

// 連想配列
  // 変数userを用意する
  // 下記の値が初期値の連想配列を作成する
  // name: '山田花子'
  // gender: '女性'
  // birth:’1990/1/1’
  // それぞれの値について、キーを指定して取り出して、コンソールに出力する
  // 結果：コンソールに、山田花子、女性、1990/1/1が出力される
    // const user = {name: '山田花子' ,gender: '女性',birth: '1990/1/1'};
    // console.log(user.name);
    // console.log(user.gender);
    // console.log(user.birth);

    // const user = {name: '山田花子' ,gender: '女性',birth: '1990/1/1'};
    // console.log(user['name']);
    // console.log(user['gender']);
    // console.log(user['birth']);

// 関数
    // function(関数)
      // 足し算をする関数

        // let x = prompt("数値を入力してください");
        // x = parseInt(x);
        // let y = prompt("数値を入力してください");
        // y = parseInt(y);

        // function mix(x,y) {
        // alert(x+y);
        // return;
        // }

        // mix(x,y)

      // 四角形の面積を計算する関数
      // 結果：コンソールに15が出力される

        // function getRectangle(height, width) {
        //   return height * width;
        // } 
        // console.log(getRectangle(3, 5));

      // 名前と年齢を表示させる関数
      // 結果：コンソールに名前と年齢が出力される

        // function sample(name, age) {
        //   console.log(name + 'さんの年齢は' + age + 'です！');
        // }
        // sample('関口',33);

      // みかんの合計金額を計算するプログラム
      // Aさんが1個100円のみかんを20個買いました
      // みかんの単価と個数を引数に渡すと、
      // 合計金額を計算して返す関数を作成する
      // 作成した関数を呼び出して、
      // Aさんの支払合計金額はいくらになるか計算して、
      // コンソールに出力する
      // 結果：2000
        // function getPrice(unitPrice, n) {
        //   return unitPrice * n;
        // }
        // console.log(getPrice(100, 20));

      // 関数のネスト（入れ子）
        // function sample1() {
        //   console.log('ABC');    
        //     function sample2() {
        //       console.log('DEF');
        //     }
        //     sample2();
        // }
        // sample1();

    // 関数リテラル（匿名関数、無名関数）
      // 足し算をする関数

        // let mix = function() {
        // let x = prompt("数値を入力してください");
        // x = parseInt(x);
        // let y = prompt("数値を入力してください");
        // y = parseInt(y);
        // alert(x+y);
        // return;
        // }

        // mix()

      // 四角形の面積を計算する関数
      // 結果：コンソールに15が出力される

        // const getRectangle = function(height, width) {
        //   return height * width;
        // }
        // console.log(getRectangle(3, 5));

    // Functionコンストラクター
      // テキストを出力する関数
      // 結果：コンソールにhelloが出力される

        // const sample = new Function('text', 'console.log(text)');
        // console.log(sample('hello'));

      // 四角形の面積を計算する関数
      // 結果：コンソールに15が出力される

        // const getRectangle = new Function('height', 'width', 'return height * width');
        // console.log(getRectangle(3,5));

    // アロー関数
      // 四角形の面積を計算する関数
      // 結果：コンソールに15が出力される

        // const getRectangle = (height, width) => {
        //   return height * width;
        // } 
        // console.log(getRectangle(3,5));

// 標準関数（組み込み関数）

  // console.log()関数
      // コンソールにHelloと出力する
        // console.log('Hello World!');
      // コンソールに123と出力する
        // console.log(123);

  // alert関数
    // alert('hello');
    // alert(123);

    // console.log(alert('hello'));
    // console.log(alert(123));

  // confirm関数
    // confirm('hello');
    // confirm(123);

    // console.log(confirm('hello'));
    // console.log(confirm(123));

  // prompt関数
    // prompt('hello');
    // prompt(123);

    // console.log(prompt('hello'));
    // console.log(prompt(123));

    // 警告、確認、入力のダイアログボックスが表示される関数を作成する
      // let message = "こんにちは";
      // let name = prompt("名前を入力してください");
      // alert(message + name);
      // confirm("体調はいかがですか？");
    
    // 所持金をもとに商品が表示される関数を作成する
      // let x = prompt("所持金");
      // x = parseFloat(x);
      // if (sample >= 1500) {
      //  alert("ピザ")
      //  alert("ポテト")
      //  alert("ジュース")
      // }
    
    // BMI計算プログラム（BMI＝体重（kg）÷｛身長（m）×身長（m）｝）
      // let weight;
      // weight = prompt("体重（kg）");

      // let height;
      // height = prompt("身長（m）");

      // let bmi =weight / (height * height);
      // let message = "あなたのBMIは「" + bmi + "」です。";
      // alert(message);
      // confirm("計算結果は正しいですか？");
  
  // parseFloat関数
    // console.log(parseFloat('1000円'));

    // const str = '123円';
    // const num = parseFloat(str);
    // console.log(num);

  // parselnt関数
    // console.log(parseInt('1000'));

    // const str = '123';
    // const num = parseInt(str);
    // console.log(num);

    // parseInt関数を使う場合と使わない場合の違い
      // parseInt関数を使わない場合
      // 結果：コンソールに35が出力される（文字列の結合）

        // const str1 = "3";
        // const str2 = "5";
        // console.log(str1 + str2);

      // parseInt関数を使う場合
      // 結果：コンソールに8が出力される（数値の足し算）

        // const num1 = parseInt(str1);
        // const num2 = parseInt(str2);
        // console.log(num1 + num2);

// コールバック関数
  // 標準関数を使ってコールバック関数を呼び出す
    // タイマー処理のプログラム
    // 3秒経過したら、
    // コンソールに「Timeout!」と表示する
    // 結果：コンソールに「Timeout!」と出力される

      // const displayMessage = function() {
      //   console.log('Timeout!');
      // }
      // setTimeout(displayMessage, 3000);

  // ユーザー定義関数を使ってコールバック関数を呼び出す
    // 名前を表示するプログラム
    // お名前の入力が完了したら、
    // 「Hello! 〇〇-san.」と
    // コンソールに表示する
    // 結果：コンソールに「Hello! 〇〇-san.」と出力される

      // function greeting(name) {
      // console.log('Hello!' + name + '-san.');
      // }

      // function inputUserName(callback) {
      // let name = prompt('あなたのお名前を入力してください!');
      // callback(name);
      // }

      // inputUserName(greeting);

// DOM

//オブジェクト

  // オブジェクトの作り方
    // オブジェクト初期化子を使用したオブジェクト生成
      // new Object()
        // let user = new Object();
        // user.name = 'Taro Yamada'; 
        // user.gender = 'man';
        // user.birthYear = 1990;
        // console.log(user); 

      // リテラル記法（オブジェクトリテラル）
        // let user = { name: 'Taro Yamada',
        // gender: 'man', birthYear: 1990};
        // console.log(user);

    // 空のオブジェクトを作成する
      // let person = {};
      // console.log(person);

  // プロパティの値を取り出す
    // ドット記法
      // console.log(user.name);
      // console.log(user.gender);
      // console.log(user.birthYear);

    // ブラケット記法
      // console.log(user['name']);
      // console.log(user['gender']);
      // console.log(user['birthYear']);

  // プロパティの値の個数を求める
    // console.log(Object.keys(user).length);

  // プロパティ（key）の値を取得する
    // let keys = Object.keys(user);
    // console.log(keys);

  // プロパティ（key）の値を追加する
    // user.prefecture = 'Kanagawa';
    // console.log(user);

  // プロパティの値を書き換える
    // user.prefecture = 'Chiba';
    // console.log(user);

  // プロパティの値を結合する
    // let obj1 = { a: 1, b: 2, c:3 };
    // let obj2 = { d: 4, e: 5, f:6 };
    // let mergedObj = Object.assign(obj1, obj2);
    // console.log(mergedObj);

  // メソッドを追加する
    // let user = {
    //   name: 'Taro Yamada',
    //   gender: 'man',
    //   birthYear: 1990,
    //   calcAge: function(thisYear) {
    //     return thisYear - this.birthYear;
    //   }
    // }
    // console.log(user.calcAge(2021));

  // Windowオブジェクト

      // console.logメソッド
        // window.console.log('Hello');
        // console.log('Hello');
        
      // alertメソッド
        // window.alert('Are you OK?');

      // confirmメソッド
        // window.confirm('Are you OK?');

      // openメソッド
        // window.open('https://www.google.co.jp');

      // closeメソッド
        // window.close();

      // scrollメソッド
        // HTMLファイルのscrollメソッドのコメントアウトを解除する
        // 結果：ボタンをクリックすると垂直方向に300pxにスクロールされる
          // let btn = document.getElementById('triggerButton');
          // btn.addEventListener('click', () => {
          //   window.scroll(0, 300);
          // }, false);

// プロパティ

  // innerHTMLプロパティ
    // HTMLファイルのinnerHTMLプロパティのコメントアウトを解除する
      // let element = document.getElementById('example');
      // console.log(element.innerHTML);

  // innerTextプロパティ
    // HTMLファイルのinnerTextプロパティのコメントアウトを解除する
      // let element = document.getElementById('example');
      // console.log(element.innerText);

  // textContentプロパティ
    // let element = document.getElementById('example');
    // console.log(element.textContent);

    // innerHTMLプロパティとtextContentプロパティの違い
      // innerHTMLプロパティ
        // function clickBtn1() {
        //     const p1 = document.getElementById("p1");
        //     p1.innerHTML = "<b>ボタンを押しました</b>";
        // }
      // textContentプロパティ
        // function clickBtn2() {
        //   const p1 = document.getElementById("p1");
        //   p1.textContent = "<b>ボタンを押しました</b>";
        // }

  // styleプロパティ
    // HTMLファイルのstyleプロパティ1のコメントアウトを解除する
      // let element = document.getElementById('example');
      // element.style.color = 'red';
    
    // HTMLファイルのstyleプロパティ2のコメントアウトを解除する
      // let element = document.querySelector('div');
      // element.style.border = null;

    // HTMLファイルのstyleプロパティ3のコメントアウトを解除する
      // let element = document.querySelector('div');
      // element.style.border = 'none';

  // lengthプロパティ
    // length（文字列型）
      // 文字列にそのままlengthを使う
        // 結果：コンソールに「3」が出力される
          // console.log('あいう'.length);
      // 変数に代入した文字列にlengthを使う
        // 結果：コンソールに「5」が出力される
          // let str = 'こんにちは';
          // console.log(str.length);
    // length（配列型）
      // 結果：コンソールに「3」が出力される
        // let array = ['リンゴ','ブドウ','メロン'];
        // console.log(array.length);
    // length（関数）
      // 結果：コンソールに「4」が出力される
        // function value(item1,item2,item3,item4){
        // }
        // console.log(value.length);

  // valueプロパティ
    // 入力された文字列を取得
      // HTMLファイルのvalueプロパティ1のコメントアウトを解除する
        // let inputText = document.getElementById('inputText');
        // console.log(inputText.value);

    // 入力された文字列の長さを取得
      // HTMLファイルのvalueプロパティ1のコメントアウトを解除する
        // let inputText = document.getElementById('inputText');
        // console.log(inputText.value.length);

      // HTMLファイルのvalueプロパティ2のコメントアウトを解除する
      // ボタンをクリックすると、
      // テキストボックスの値を取得する
      // 結果：コンソールにテキストボックスに入力した値が出力される

        // const e = document.getElementById('button');
        // e.addEventListener('click', () => {
        //   const elements = document.getElementsByName('result');
        //   console.log(elements[0].value);
        // }, false);

  // parentNodeプロパティ
    // HTMLファイルのvalueプロパティのコメントアウトを解除する
    // 結果：コンソールに親ノードが出力される

      // const child = document.getElementById('child');
      // const parent = child.parentNode;
      // console.log(parent);

  // firstElementChildプロパティ
    // HTMLファイルのElementChildプロパティのコメントアウトを解除する
      // let element = document.getElementById('example');
      // let child = element.firstElementChild;
      // console.log(child);
    
  // lastElementChildプロパティ
    // HTMLファイルのElementChildプロパティのコメントアウトを解除する
      // let element = document.getElementById('example');
      // let child = element.lastElementChild;
      // console.log(child);

  // checkedプロパティ
    // HTMLファイルのcheckedプロパティのコメントアウトを解除する
    // id属性の値がmycheckboxのチェックボックスに入力されている値を取得する
      // let element1 = document.getElementById('mycheckbox1');
      // console.log(element1.checked);
      // let element2 = document.getElementById('mycheckbox2');
      // console.log(element2.checked);

  // Event.targetプロパティ
    // HTMLファイルのEvent.targetプロパティのコメントアウトを解除する
    // クリックしたターゲットがsrc属性に値を持っている要素であれば、
    // コンソールにターゲットの情報を出力する
      // let images = document.getElementById('dog');
      // images.addEventListener('click', function(e) {
      //   if(e.target.src) {
      //     console.log(e.target);
      //   }
      // }, false);

// メソッド

  // ノードを取得する

    // getElementByIdメソッド
      // HTMLファイルのgetElementByIdメソッドのコメントアウトを解除する
      // idがresultの要素ノードを取得する
      // idがresultの要素ノードのコンテンツ（テキスト）を取得する
      // 取得した要素ノードとそのコンテンツ（テキスト）をコンソールに出力する
      // 取得した要素ノードのコンテンツ（テキスト）を変更する

        // const btn = document.getElementById('button');
        // btn.addEventListener('click', () => {
        //   const result  = document.getElementById('result');
        //   console.log(result); // 要素ノードを出力する
        //   console.log(result.innerText); // 要素ノードのコンテンツ（テキスト）を出力する
        //   console.log(result.textContent); // 要素ノードのコンテンツ（テキスト）を出力する
        //   result.innerText = 'タイトルが変更されました'; // 要素ノードのコンテンツ（テキスト）を変更する
        //   result.textContent = 'タイトルが変更されました'; // 要素ノードのコンテンツ（テキスト）を変更する
        // }, false);

    // getElementsByTagNameメソッド
      // HTMLファイルのgetElementsByTagNameメソッドのコメントアウトを解除する
      // ボタンが押されると、タグ名がdivの要素を取得し、
      // そのコンテンツ（テキスト）をコンソールに出力する
      // 結果：タグ名がdivのコンテンツ（テキスト）がコンソールに出力される

        // const e = document.getElementById('button');
        // e.addEventListener('click', () => {
        //   const elements =document.getElementsByTagName('div');
        //   for(let i =0; i < elements.length; i++) {
        //     console.log(elements[i].innerText);
        //   }
        // }, false);

    // getElementsByNameメソッド
      // HTMLファイルのgetElementsByNameメソッドのコメントアウトを解除する
      // テキストボックスとボタンを配置し、
      // ボタンをクリックしたら、
      // name属性がresultの要素を取得して、
      // そのコンテンツ（テキスト）をコンソールに出力する
      // 結果：testと入力するとコンソールにtestと表示される

        // const e = document.getElementById('button');
        // e.addEventListener('click', () => {
        //  const elements = document.getElementsByName('result');
        //  console.log(elements)
        //  console.log(elements[0].value);
        // }, false);

    // getElementsByClassNameメソッド
      // HTMLファイルのgetElementsByClassNameメソッドのコメントアウトを解除する
      // ボタンをクリックすると、
      // class名がfooの要素を取得し、
      // そのコンテンツ（テキスト）をコンソールに出力する
      // 結果：element1とelement3が出力される
        // const e = document.getElementById('button');
        // e.addEventListener('click', () => {
        //   const elements = document.getElementsByClassName('foo');
        //   // console.log(elements);
        //   for(let i = 0; i < elements.length; i++) {
        //     console.log(elements[i].innerText);
        //   }
        // }, false);

    // querySelectorメソッド
      // HTMLファイルのquerySelectorメソッドのコメントアウトを解除する
        // const e = document.getElementById('button');
        // e.addEventListener('click', () => {
        //   const result  = document.querySelector('p');
        //   console.log(result);
        //   console.log(result.innerText);
        // }, false);

    // querySelectorAllメソッド
      // let btn = document.getElementById('triggerButton');
      // btn.addEventListener('click', () => {
      //   let elements = document.querySelectorAll('.foo');
      //   for(let i = 0; i < elements.length; i++) {
      //     console.log(elements[i].textContent);
      //   }
      // }, false);

  // ノードを作成・追加する

    // HTMLファイルのノードを作成・追加する1のコメントアウトを解除する
    // li要素を作成する
    // コンテンツ（テキスト）を作成する
    // ul要素の子要素にli要素とコンテンツ（テキスト）を追加する
    // 結果：ul要素の末尾の子要素としてli要素とコンテンツ（テキスト）が追加される

      // const li = document.createElement('li');
      // const text = document.createTextNode('test');
      // li.appendChild(text);
      // const listElement = document.getElementById('list');
      // listElement.appendChild(li);

    // HTMLファイルのノードを作成・追加する1のコメントアウトを解除する
    // 空のリストとボタンを設置する
    // ボタンをクリックすると、
    // リストの項目が追加される
    // 追加される文字列はtestとする
    // 結果：要素タブのul要素の末尾の子要素にli要素とコンテンツ（テキスト）が追加される

      // const e = document.getElementById('button');
      // e.addEventListener('click', () => {
      //   const li = document.createElement('li');
      //   const text = document.createTextNode('test');
      //   li.appendChild(text);
      //   const listElement =document.getElementById('list');
      //   listElement.appendChild(li);
      // }, false);

    // HTMLファイルのノードを作成・追加する2のコメントアウトを解除する
    // テキストボックスに文字列を入力後、
    // ボタンを押すと、
    // リストの最後の項目として入力した文字列が追加される
    // 結果：要素タブのul要素の末尾の子要素にli要素とコンテンツ/テキスト（テキストボックスに入力した文字列）が追加される

      // const e = document.getElementById('button');
      // e.addEventListener('click', () => {
      //   const textBox = document.getElementById('textBox');
      //   const li = document.createElement('li');
      //   const text = document.createTextNode(textBox.value);
      //   li.appendChild(text);
      //   const listElement = document.getElementById('list');
      //   listElement.appendChild(li);
      // }, false);

  // ノードを置換する

    // HTMLファイルのノードを置換するのコメントアウトを解除する
    // リストとボタンを配置
    // ボタンをクリックすると、
    // リストの子要素を置換する
    // 結果：old elementからnew elementに置換される
      // const e = document.getElementById('button');
      // e.addEventListener('click', () => {
      //   const newList = document.createElement('li');
      //   newList.setAttribute('id', 'newList');
      //   const newText = document.createTextNode('new element');
      //   newList.appendChild(newText);
      //   const oldList = document.getElementById('oldList');
      //   const parentNode = oldList.parentNode;
      //   parentNode.replaceChild(newList, oldList);
      // }, false);

  // ノードを削除する

    // HTMLファイルのノードを削除するのコメントアウトを解除する
    // リストとボタンを設置
    // ボタンをクリックすると、
    // リストの子要素が最後のものから削除される
    // 結果：ボタンをクリックすると、listタグが下からひとつずつ削除される

      // const e = document.getElementById('button');
      // e.addEventListener('click', () => {
      //   const parentNode = document.getElementById('list');
      //   const elements = parentNode.getElementsByTagName('li');
      //   const removeIndex = elements.length - 1;
      // parentNode.removeChild(elements[removeIndex]);
      // }, false);

    // ノードの作成・追加・置換・削除

      // HTMLファイルのノードの作成・追加・置換・削除のコメントアウトを解除する
      // ボタンをクリックすると、
      // 入力内容がul要素内の末尾のli要素として追加される

        // let addButton = document.getElementById('addButton');
        // addButton.addEventListener('click', () => {
        //   // 入力欄のinput要素を取得
        //   let inputLanguage = document.getElementById('inputLanguage');
        //   // input要素から文字列を取得
        //   let language = inputLanguage.value;
        //   // 未入力であれば処理を実行せずに警告文を返す
        //   if(language === ''){
        //     alert('未入力です');
        //     return;
        //   }

        //   // li要素を生成
        //   let listItem = document.createElement('li');
        //   // li要素のコンテンツ（テキスト）に入力された文字列を設定
        //   listItem.textContent = language;
        //   // ul要素を取得
        //   let languageList = document.getElementById('languageList');
        //   // リストの末尾に生成したli要素を追加
        //   languageList.appendChild(listItem);
        //   // 入力欄をクリア
        //   inputLanguage.value = '';
        // }, false);

        // // 削除
        // let removeButton = document.getElementById('removeButton');
        // removeButton.addEventListener('click', () => {
        //   // ur要素を取得
        //   let languageList = document.getElementById('languageList');
        //   // リストの末尾から要素を削除
        //   languageList.removeChild(languageList.lastElementChild);
        // }, false);

  // 要素の属性の取得

    // getAttributeメソッド
      // HTMLファイルのgetAttributeメソッドのコメントアウトを解除する
      // 結果：コンソールにtextとcolorNameが出力される
        // let element = document.getElementById('inputColorName');
        // let attvalue1 = element.getAttribute('type');
        // let attvalue2 = element.getAttribute('name');
        // console.log(attvalue1);
        // console.log(attvalue2);

      // HTMLファイルのgetAttributeメソッドのコメントアウトを解除する
      // テキストを入力してボタンをクリックすると、
      // p要素のコンテンツ（テキスト）が、
      // input要素のname属性の属性値と入力されたテキストに、
      // 書き換えられて表示される
      // 結果：Red⇒name属性: colorName, 入力されたテキスト: Red

        // let btn = document.getElementById('triggerButton');
        // btn.addEventListener('click', () => {
        //   let inputColorName = document.getElementById('inputColorName');
        //   let colorNameText = inputColorName.value;
        //   let inputName = inputColorName.getAttribute('name');
        //   let showText = document.getElementById('showText');
        //   showText.textContent = `name属性: ${inputName}, 入力されたテキスト: ${colorNameText}`;
        // }, false);

  // 要素の属性の追加・更新・削除

    // setAttributeメソッド
      // id属性の設定
        // HTMLファイルのsetAttributeメソッドのコメントアウトを解除する
          // const element = document.querySelector('h1');
          // element.setAttribute('id', 'newId');

      // class属性の設定
        // HTMLファイルのsetAttributeメソッドのコメントアウトを解除する
          // const element = document.getElementById('myElement');
          // element.setAttribute('class', 'newClass');

    // removeAttributeメソッド
      // HTMLファイルのremoveAttributeメソッドのコメントアウトを解除する
        // let element = document.getElementById('myElement');
        // element.removeAttribute('class');

          // HTMLファイルのheadとbodyタグ内の追加・更新・削除のコメントアウトを解除する
          // class属性を追加・更新・削除する
          // showTextにclass属性を追加する、属性値はredとblue
          // headタグ内に記述されているstyleタグた適用されて文字が赤や青になる
          // showTextからclass属性を削除する

            // let setRedClassButton = document.getElementById('setRedClassButton');
            // setRedClassButton.addEventListener('click', () => {
            //   let showText = document.getElementById('showText');
            //   showText.setAttribute('class', 'red');
            // }, false);

            // let setBlueClassButton = document.getElementById('setBlueClassButton');
            // setBlueClassButton.addEventListener('click', () => {
            //   let showText = document.getElementById('showText');
            //   showText.setAttribute('class', 'blue');
            // }, false);

            // let removeClassButton = document.getElementById('removeClassButton');
            // removeClassButton.addEventListener('click', () => {
            //   let showText = document.getElementById('showText');
            //   showText.removeAttribute('class');
            // }, false);

  // その他

    // Math.powメソッド
      // console.log(Math.pow(2, 3));

    // Math.randomメソッド
      // 0以上1未満の乱数を生成する
        // console.log(Math.random());
      // 1以上5以下の乱数を生成する
        // console.log(Math.floor(Math.random() * 5 + 1));

    // Math.roundメソッド
      // console.log(Math.round(3.4));
      // console.log(Math.round(3.5));
      // console.log(Math.round(3.6));

    // Math.ceilメソッド
      // console.log(Math.ceil(3.2));
      // console.log(Math.ceil(3.8));
      // console.log(Math.ceil(3));

    // Math.floorメソッド
        // console.log(Math.floor(3.2));
        // console.log(Math.floor(3.8));
        // console.log(Math.floor(3));

    // setTimeoutメソッド
      // JavaScriptの読み込みが完了してから3秒後にアラートを表示するプログラム
        // let msg = function(){
        //   alert("3秒経過");
        // }
        // setTimeout(msg, 3000);
    
    // replaceメソッド
      // 最初のredがRedに置換されて出力される
        // let str = 'red bird and red flower';
        // let newstr = str.replace('red', 'Red');
        // console.log(newstr);

    // insertBeforeメソッド
      // HTMLファイルのinsertBeforeメソッドのコメントアウトを解除する
      // liタグの要素ノードを新しく作成する
      // id属性の値がxxxのノードの子ノードの中で、
      // id属性の値がyyyのノードの前に追加する
        // let parentnode = document.getElementById('xxx');
        // let childnode = document.getElementById('yyy');
        // let child = document.createElement('li');
        // parentnode.insertBefore(child, childnode);
        // child.textContent = '子ノード';

      // HTMLファイルのinsertBeforeメソッドのコメントアウトを解除する
      // liタグの要素ノードを新しく作成する
      // id属性の値がxxxのノードの子ノードの末尾に追加する
        // let parentnode = document.getElementById('xxx');
        // let childnode = document.getElementById('yyy');
        // let child = document.createElement('li');
        // parentnode.insertBefore(child, null);
        // child.textContent = '子ノード';

// イベント
  // イベントリスナーで設定する方法
    // addEventListenerメソッド
      // HTMLファイルのaddEventListenerメソッドのコメントアウトを解除する
      // ボタンをクリックすると、
      // コンソールにClicked!と出力される
      // 結果：コンソールにClicked!と出力される

        // 無名関数を指定

          // const e = document.getElementById('button');
          // e.addEventListener('click', function(e) {
          //   console.log('Clicked!');
          //   console.log(e);
          // }, false);

        // アロー関数を指定

          // const e = document.getElementById('button');
          // e.addEventListener('click', (e) => {
          //   console.log('Clicked!');
          //   console.log(e);
          // }, false);

        // イベントハンドラーを外だしで記述する

          // const e = document.getElementById('button');
          // function sayClickedEventHandler(e) {
          //   console.log('Clicked!');
          //   console.log(e);
          // }
          // e.addEventListener('click', sayClickedEventHandler, false);

      // removeEventListenerメソッド
        // HTMLファイルのremoveEventListenerメソッドのコメントアウトを解除する
        // 結果：RemoveボタンをクリックするとコンソールにHelloと表示されなくなる
          // const sayHelloButton = document.getElementById('sayHelloButton');
          // function sayHelloEventHandler(e) {
          //   console.log('Hello');
          // }
          // sayHelloButton.addEventListener('click', sayHelloEventHandler, false);

          // const removeEventHandelrButton = document.getElementById('removeEventHandlerButton');
          // function removeEventHandler(e) {
          //   console.log('remove');
          //   sayHelloButton.removeEventListener('click', sayHelloEventHandler, false);
          // }
          // removeEventHandelrButton.addEventListener('click', removeEventHandler, false);

  // 要素オブジェクトのonプロパティとして設定する方法

    // HTMLファイルのonプロパティのコメントアウトを解除する
    // ボタンをクリックすると、
    // コンソールにClicked!と出力する
    // 結果：ボタンをクリックするとコンソールに'Clicked!'と出力される

      // const e = document.getElementById('button');
      // e.onclick = () => {
      //   console.log('Clicked!');
      // }

    // Windowオブジェクトの、
    // loadイベントが発生したタイミングで、
    // コンソールにload event!と出力する
    // 結果：リロードしてページの読み込みが完了した時点でloadイベントが発生してコンソールにload event!が出力される

      // window.onload = () => {
      //   console.log('load event!');
      // }

  // イベントの種類

    // changeイベント

      // HTMLファイルのchangeイベントのコメントアウトを解除する
      // 「すべてチェック」にチェックを入れると各チェックボックスにもチェックが入る
      // 「すべてチェック」のチェックを外すと各チェックボックスのチェックも外れる
        // function handleChange() {
        //   const checkAll = document.getElementById('checkAll');
        //   const checkBoxes = document.getElementsByName('language');
        //   // name属性がlanguageのチェックボックスの要素をループ処理
        //   for(let i = 0; i < checkBoxes.length; i++) {
        //     // 各チェックボックスのチェック状態を、「すべてチェック」の状態に合わせる
        //     checkBoxes[i].checked = checkAll.checked;
        //   }
        // }

        // // checkAllチェックボックスのchangeイベントのイベントハンドラを登録
        // const ca = document.getElementById('checkAll');
        // ca.addEventListener('change', handleChange, false);

    // DOMContentLoadedイベント
    // loadイベント
      // HTMLファイルのDOMContentLoadedイベントとloadイベントのコメントアウトを解除する
      // Webページ読み込み開始時に、「Now Loading...」を表示をする
      // DOMContentLoadedイベントが発生したら、alertダイアログを表示する
      // 画像を表示する
      // loadイベントが発生したら、「Now Loading...」を非表示にする
      // Googleデベロッパーツールで疑似的に遅い通信速度を再現して確認する

        // document.addEventListener('DOMContentLoaded', function() {
        //   alert('DOMContentLoaded!');
        // }, false);

        // window.onload = function() {
        //   const nowLoading = document.getElementById('nowLoading');
        //   nowLoading.style.display = 'none';
        // }

    // イベント処理関連のプログラム

      // 数取器（カウンター）のプログラム
        // HTMLファイルの数取器（カウンター）のプログラムのコメントアウトを解除する
        // 「+1」ボタンを押すとプラス1される
        // 「Reset」ボタンを押すとリセットされる

          // let num = 0;

          // function updateCounter(num) {
          //   const counter = document.getElementById('counter');
          //   counter.textContent = num;
          // }

          // function countUp() {
          //   num++;
          //   updateCounter(num);
          // }

          // function reset() {
          //   num = 0;
          //   updateCounter(num);
          // }

          // const countUpBtn = document.getElementById('countUpButton');
          // countUpBtn.addEventListener('click', countUp, false);

          // const resetBtn = document.getElementById('resetButton');
          // resetBtn.addEventListener('click', reset, false);

      // 文字数カウンターのプログラム
        // HTMLファイルの文字数カウンターのプログラムのコメントアウトを解除する
        // 入力された文字数をカウントする
        // 改行はカウントしない
        // 文字数超過すると赤文字になる

          // function keyUp(e) {
          //   // 入力された値を取得
          //   let str = inputText.value;
          //   // 第一引数を第二引数に置き換える⇒改行をカウントしない
          //   str = str.replace(/\r?\n/g, '');
          //   // 残りの文字数
          //   let num = 10 - str.length;
          //   console.log(num);
          //   // 文字数表示部分の要素を取得
          //   const characterCount = document.getElementById('characterCount');
          //   // 残りの文字数をセットして表示
          //   characterCount.textContent = num;
          //   // 残り文字数表示部分のp要素を取得
          //   const characterCountWrap = document.getElementById('characterCountWrap');
          //   // 文字色の設定
          //   if(num >= 0) {
          //     characterCountWrap.style.color = 'black';
          //   } else {
          //     characterCountWrap.style.color = 'red';
          //   }
          // }

          // const inputText = document.getElementById('inputText');
          // inputText.addEventListener('keyup', keyUp, false);

// Javascriptのプログラム

  // フォトギャラリー
    // JavaScript_フォトギャラリー.htmlファイルを開く

      // const images = [
      //   {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/C0zDWAPFT9A.jpg', description: '猫の画像1'},
      //   {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/fEK4jvgnApg.jpg', description: '猫の画像2'},
      //   {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/egfS7HzgKcc.jpg', description: '猫の画像3'},
      //   {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/e-S23SJzFqs.jpg', description: '猫の画像4'},
      //   {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/Hnwm8ktAd6E.jpg', description: '猫の画像5'}
      // ];

      // // メイン画像の初期値を設定
      // let image = document.createElement('img'); // image要素を生成する
      // image.setAttribute('src', images[0].src); // 生成したimage要素のsrc属性を設定する
      // image.setAttribute('alt', images[0].description); // 生成したimage要素のalt属性を設定する

      // // 説明の初期値を設定
      // let description = document.createElement('p'); // p要素を生成する
      // description.textContent = image.alt; // 生成したp要素に説明文をセットする

      // // 作成した要素を表示する
      // let mainImage = document.getElementById('main_image');
      // mainImage.insertBefore(image, null);
      // mainImage.insertBefore(description, null);

      // // サムネイル画像の表示
      // let thumbnails = document.getElementById('thumbnails');
      // for(let i = 0; i < images.length; i++) {
      //   let thumbnailImage = document.createElement('img');
      //   thumbnailImage.setAttribute('src', images[i].src);
      //   thumbnailImage.setAttribute('alt', images[i].description);
      //   thumbnails.insertBefore(thumbnailImage, null);
      // }

      // // クリックしたサムネイル画像をメイン画像に設定する
      // thumbnails.addEventListener('click', function(e) {
      // // クリックしたターゲットがsrc属性に値を持っている要素であれば処理を実行する
      // // src属性に値を持っているimage要素の場合だけ処理を実行する
      // // サムネイル画像をクリックしたときだけ処理を実行する
      //   if(e.target.src) {
      //     // メイン画像とその説明文がクリックしたサムネイル画像とその説明文に切り替わる
      //     image.src = e.target.src;
      //     description.textContent = e.target.alt;
      //   }
      // }, false);
