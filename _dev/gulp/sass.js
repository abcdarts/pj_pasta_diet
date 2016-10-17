var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

var options = {
    outputStyle: 'expanded',
    sourceMap: true,
    sourceComments: false
};
var autoprefixerOptions = {
    browsers: ['last 3 version', 'ie >= 9', 'Android 4.0']
};
gulp.task('sass', function() {
    gulp.src('./_src/css/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass(options))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('../htdocs/assets/css'))
    .pipe(browserSync.stream());
});
