var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');

gulp.task('sass', function () {
    gulp.src('./_src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public_html/css'));
});

gulp.task('default', function() {
  gulp.watch('_src/sass/*.scss', ['sass']);
});


