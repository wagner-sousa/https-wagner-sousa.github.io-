const path = require('path');
module.exports = {
  mode: 'production',
  entry: './js/_mixins.js', // Arquivo de entrada principal
  output: {
    filename: 'app.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'public/assets'), // Diretório de saída
  },
};