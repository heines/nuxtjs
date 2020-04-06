# nuxtjs

> template

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 導入手順
+ 本リポジトリをpull後`npm i`を実行してください。
+ `npm run dev`にて開発モードで実行されます。
  - ※`npm start`はnuxt.jsの設定上プロダクションモードに割り当てられています。
### 環境変数（.envファイル）
- 本環境ではdotenvを使用して環境変数を管理します。`.env.sample`ファイルをコピーし、`.env`ファイルを各自作成してください。
### 特記事項
- headの記載は、`nuxt.config.js`に初期値が設定できます。ページ毎に変更したい場合、各vueファイルのscript > headにて指定してください。
