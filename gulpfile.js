let gulp = require('gulp');
let sass = require('gulp-sass');
let useref = require('gulp-useref');
let pug = require('gulp-pug');
let browserSync = require('browser-sync').create();
let uglify = require('gulp-uglify');
let gulpIf = require('gulp-if');
let cssNano = require('gulp-cssnano');

gulp.task('sass', function() {
  return gulp.src('styles/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('styles/css'))
    .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('pug', function(){
  return gulp.src('./*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('useref', function() {
  return gulp.src('./*.pug')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('./'))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {

    },
  })
});

gulp.task('cssNano', function() {
  return gulp.src('styles/css/*.css')
    .pipe(cssNano())
    .pipe(gulp.dest('./build/css'))
});

gulp.task('watch', ['browserSync', 'sass', 'pug'], function() {
  gulp.watch('styles/**/*.sass', ['sass']);
  gulp.watch('*.pug', ['pug']);
  gulp.watch('js/*.js', browserSync.reload);

});
