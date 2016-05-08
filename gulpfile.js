var gulp       = require('gulp'),
    notify     = require('gulp-notify'),
    livereload = require('gulp-livereload')
    gutil      = require('gulp-util'),
    compass    = require('gulp-compass'),
    uglify     = require('gulp-uglify'),
    concat     = require('gulp-concat'),
    rename     = require('gulp-rename'),
    source     = require('vinyl-source-stream'),
    browserify = require('gulp-browserify'),
    favicons   = require('gulp-favicons');

var paths = {
    scss: 'resources/assets/scss',
    css: 'public/assets/css',
    views: 'resources/views',
    js: {
        source: 'resources/assets/javascript',
        dest: 'public/assets/js'
    }
};

gulp.task('sass', function() {
    gulp.src(paths.scss + '/**/*.scss')
        .pipe(compass({
            config_file: 'config.rb',
            style: 'compressed',
            css: paths.css,
            sass: paths.scss,
            relative: false,
            http_path: 'assets/images',
            generated_images_path: 'public/assets/images/'
        }))
        .on('error', gutil.log)
        .pipe(gulp.dest(paths.css))
        .pipe(livereload());
});

gulp.task('uglify:vendor', function() {
    gulp.src([
            'resources/assets/components/jquery/dist/jquery.js',
            'resources/assets/components/bootstrap-sass/assets/javascripts/bootstrap/modal.js'
        ])
        .pipe(uglify())
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('public/assets/vendor'));
});

gulp.task('scripts:app', function() {
    gulp.src([paths.js.source + '/**/*.js', '!' + paths.js.source + '/modules/**'])
        .pipe(browserify())
        .on('error', gutil.log)
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('public/assets/js'))
        .pipe(livereload());
});

// watching the files
gulp.task('watch', function() {
    livereload.listen();

    gulp.watch(paths.scss      + '/**/*.scss', ['sass']);
    gulp.watch(paths.js.source + '/**/*.js', ['scripts:app']);
    gulp.watch(paths.views     + '/**/*.php', ['reload']);
});

gulp.task('reload', function() {
    gulp.src('gulpfile.js')
        .pipe(livereload());
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

gulp.task('default', function() {
    gulp.start('sass', 'scripts:app', 'watch');
});
