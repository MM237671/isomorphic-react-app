require('babel-register')({
  presets: ['stage-0', 'es2015', 'react']
});
require('babel-polyfill');
require('./app.js');