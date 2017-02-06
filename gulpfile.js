const gulp        = require('gulp'),
      elixir      = require('laravel-elixir')
      gutil       = require('gulp-util'),
      uglify      = require('gulp-uglify'),
      favicons    = require('gulp-favicons'),
      imagemin    = require('gulp-imagemin'),
      spritesmith = require('gulp.spritesmith');

require('laravel-elixir-vue');
require('laravel-elixir-livereload');

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
    mix.sass('main.scss', 'public/assets/css/main.css')
       //.sass('sections/home.scss', 'public/assets/css/sections/home.scss')
       .webpack('app/main.js', 'public/assets/js/app/main.min.js');

    mix.livereload();
});

gulp.task('imagemin', function() {
    gulp.src('public/assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/assets/images'));
});

gulp.task('favicons', function() {
    gulp.src('public/assets/images/icons/favicon.png')
        .pipe(favicons({
            background: '#fff',
            path: '/assets/images/icons',
            html: 'resources/views/app/inc/favicons.blade.php',
            replace: true
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest('public/assets/images/icons'));
});

gulp.task('sprites', function() {
    gulp.src('public/assets/images/sprites/default/*.png')
        .pipe(spritesmith({
            imgOutput: 'public/assets/images/sprites',
            imgPath: '/assets/images/sprites/sprite.png',
            cssName: '../../../../resources/assets/sass/components/_sprite.scss',
        }))
        .pipe(gulp.dest('public/assets/images/sprites'));
});
