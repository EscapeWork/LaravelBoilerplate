var gulp     = require('gulp'),
    concat   = require('gulp-concat'),
    uglify   = require('gulp-uglify')
    compass  = require('gulp-compass'),
    jshint   = require('gulp-jshint'),
    rename   = require('gulp-rename'),
    cssmin   = require('gulp-cssmin')
    sequence = require('run-sequence');

var paths = {
    css: 'public/assets/css',
    scss: 'resources/assets/scss',
    js: 'public/assets/js',
    images: 'public/assets/images',
    vendor: 'public/assets/vendor',
    fonts: 'public/assets/css/fonts'
};

gulp.task('default', function() {
    gulp.start('publish', 'compass', 'jshint', 'uglify', 'watch');
});

gulp.task('publish', function() {
    gulp.src('resources/assets/components/modernizr/modernizr.js')
        .pipe(gulp.dest(paths.vendor));

    gulp.src([
            'resources/assets/components/jquery/dist/jquery.min.js'
        ])
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest(paths.vendor));
});

gulp.task('compass', function() {
    gulp.src('resources/assets/scss/**/*.scss')
        .pipe(compass({
            css: paths.css,
            sass: paths.scss,
            image: paths.images
        }));
});

gulp.task('jshint', function() {
    return gulp.src('resources/assets/javascript/**/*.js')
               .pipe(jshint())
               .pipe(jshint.reporter('default'));
});

gulp.task('uglify', function() {
    return gulp.src('resources/assets/javascript/**/*.js')
               .pipe(uglify())
               .pipe(rename({suffix: '.min'}))
               .pipe(gulp.dest(paths.js));
});

gulp.task('watch', function() {
    gulp.watch('resources/assets/scss/**/*.scss', ['compass']);
    gulp.watch('resources/assets/javascript/**/*.js', ['jshint', 'uglify']);
});

gulp.task('fontgen', function() {
    var fontgen = require('gulp-fontgen');

    gulp.src([
        paths.fonts + '/*.otf',
        paths.fonts + '/*.ttf'
    ])
        .pipe(fontgen({
            dest: paths.fonts
        }))
});
