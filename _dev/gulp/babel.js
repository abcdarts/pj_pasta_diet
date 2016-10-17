var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

gulp.task('babel', function() {
    gulp.src('./_src/js/**/*.js')
    	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	    .pipe(babel({
	        presets: ['es2015']
	    }))
	    .pipe(uglify())
	    .pipe(gulp.dest('../htdocs/assets/js'))
	    .pipe(browserSync.stream());
});
