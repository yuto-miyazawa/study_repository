# ドキュメント
// background-sizeについて
https://haniwaman.com/background/

# ナレッジ
## ディレクトリ構造例
base・・・リセットCSSや要素の基本となるCSSを格納
mixin・・・アニメーションやmixinや関数を格納
module・・・使い回しできるモジュール的なCSSを格納
page・・・ページごとに必要なCSSを格納
setting・・・変数を格納
style.scss・・・上記のフォルダ群をまとめるファイル

## よく使う技
ネスト
import
extend
mixin

## minを出力されない設定
    "easysass.formats": [
        {
          "format": "expanded",
          "extension": ".css"
        }
      ]


## 全自動コンパイル
コマンドパレットで
Compail all ~ をうつ


# コード
## mediaクエリ
// レイアウト幅
$layout-width-inner: 1180px;

// ブレークポイント
$breakpoints: (
  "sp": "screen and (max-width: 767px)",
  "tab": "screen and (max-width: #{$layout-width-inner - 1px})",
  "pc": "screen and (min-width: #{$layout-width-inner})",
);


// メディアクエリー
@mixin mq($breakpoint: sp) {

  @media #{map-get($breakpoints, $breakpoint)} {

    @content;
  }
}

@include mq('tab') {
    width: calc(33.33333333% - 20px);
    margin-right: 30px;
    margin-bottom: 30px;
  }