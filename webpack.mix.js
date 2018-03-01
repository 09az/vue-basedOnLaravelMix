let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
//生成的产品目录
let productPath = 'playlist';

mix.setPublicPath(productPath);

mix.js('src/js/app.js', 'js/')
        .sass('src/sass/app.scss', 'css/')
        .copy('src/index.html', productPath + '/')
        .copy('src/data/*', productPath + '/data/');

