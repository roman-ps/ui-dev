'use strict';

const gulp = require('gulp'),
  server = require('browser-sync').create(),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  minify = require('gulp-csso'),
  rename = require('gulp-rename'),
  autoprefixer = require('gulp-autoprefixer'),
  del = require('del');

gulp.task('styles', function() { // стили, префиксер, минификация
  return gulp.src('source/sass/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(autoprefixer({ overrideBrowserslist: ('last 4 versions') }))
  .pipe(minify())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('source/css'))
  .pipe(server.stream());
});

gulp.task('server', function() {  // запуск live-сервера
  server.init({
    server: {
      baseDir: 'source/'
    },
    notify: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("styles"));
  gulp.watch("source/*.html", gulp.series("refresh"));
  gulp.watch("source/js/*.js", gulp.series("refresh"));
  gulp.watch("source/img", gulp.series("refresh"));
});

// Сборка проекта

gulp.task('css', function() {
  return gulp.src('source/css/style.min.css')
  .pipe(gulp.dest('build/css'))
});

gulp.task('html', function() {
  return gulp.src('source/*.html')
  .pipe(gulp.dest('build'));
});

gulp.task('fonts', function() {
  return gulp.src('source/fonts/*')
  .pipe(gulp.dest('build/fonts'));
});

gulp.task('js', function() {
  return gulp.src('source/js/*.js')
  .pipe(gulp.dest('build/js'));
});

gulp.task('clean', function() {
  return del('build');
});

gulp.task('refresh', function (done) {
  server.reload();
  done();
});

gulp.task('build', gulp.series('clean', 'html', 'css', 'js', 'fonts')) // запуск всех задач сборки
gulp.task('watch', gulp.series('server')) // отслеживание изменения в файлах и перезагрузка
