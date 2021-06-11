const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './js/main.js',  // 파일을 읽어들이기 시작하는 진입점 설정
  
  // 결과물(번들)을 반환하는 설정
  output: { 
    // path: path.resolve(__dirname, 'public'),  
    // filename: 'main.js', // entry이랑 동일한 파일
    clean: true  // 새롭게 build했을때 기존에있던 필요 없는 파일들을 지워준다
  },

  module: {
    rules: [
      {
        test: /\.s?css$/, // .css 라고 끝나는 것을 찾는 정규 표현식
        use: [
          'style-loader', // style-loader 부터 작성 해야된다.
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],
  
  devServer: {
    host: 'localhost'
  }
}