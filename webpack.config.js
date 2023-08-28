const path = require('path');
module.exports = {
  entry: './js/main.js', // Arquivo de entrada principal
  output: {
    filename: 'app.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'js'), // Diretório de saída
  },
};