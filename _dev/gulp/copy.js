var gulp = require('gulp');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');

gulp.task('copy', function() {
    gulp.src(['./_src/images/**'])
	    .pipe(gulp.dest('../htdocs/assets/images'))
	    .pipe(browserSync.stream())
});