var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var ghPages = require('gulp-gh-pages');

gulp.task('sass', function () {
  gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./demo/styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/*.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'demo'
  });
});

gulp.task('gh-pages', function() {
  gulp.src('./demo/**/*')
    .pipe(ghPages());
});

gulp.task('deploy', [
  'sass',
  'gh-pages'
]);

gulp.task('default', [
  'sass',
  'connect',
  'sass:watch'
]);
