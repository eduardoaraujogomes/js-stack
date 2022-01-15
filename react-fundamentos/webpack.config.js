const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//path - modulo nativo do node para lidar com caminho de arquivos
//evita problemas de barras, etc

// HtmlWebPackPlugin - plugin para o webpack para gerar um arquivo html já com o bundle js
// CleanWebpackPlugin - plugin para o webpack para limpar o diretório build antes de criar um novo

//__dirname - retorna o caminho absoluto do diretorio atual
//a hash é para evitar cache pois o navegador não vai entender que o arquivo foi alterado
//a hash só muda quando o arquivo é alterado


module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};