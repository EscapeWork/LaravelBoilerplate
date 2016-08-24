const gulp       = require('gulp'),
      elixir     = require('laravel-elixir')
      gutil      = require('gulp-util'),
      uglify     = require('gulp-uglify'),
      favicons   = require('gulp-favicons'),
      imagemin   = require('gulp-imagemin');

require('laravel-elixir-vue');
require('laravel-elixir-spritesmith');

elixir.config.sourcemaps = false;

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('main.scss')
       //.sass('sections/home.scss', 'public/assets/css/sections/home.scss')
       .webpack('app/main.js', 'public/assets/js/app/main.js');
});

gulp.task('imagemin', function() {
    gulp.src('public/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/assets/images'));
});

gulp.task('sprites', function() {
    elixir(mix => {
        // spritesmith
        mix.spritesmith('public/assets/images/sprites/default', {
            imgOutput: 'public/assets/images/sprites',
            imgPath: '/assets/images/sprites/sprite.png',
            cssName: '_sprite.scss',
            cssOutput: 'resources/assets/sass/components'
        });
    });
});
