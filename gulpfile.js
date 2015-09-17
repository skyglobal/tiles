var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./src/*.scss')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths
    }).on('error', sass.logError))
    .pipe(gulp.dest('./demo/styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/*.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'demo',
    livereload: true
  });
});

gulp.task('default', [
  'connect',
  'sass',
  'sass:watch'
]);
