const { mix } = require('laravel-mix');

mix
  .js('app/js/app.js', './public/')
  .sass('app/styles/style.scss', './public/');
