var gulp = require('gulp');
var ejs = require('gulp-ejs');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

var data = {};

var settings = {
    ext: '.html'
};
gulp.task('ejs', function() {
    gulp.src(['./ejs/**/*.ejs', '!./ejs/**/_*.ejs'])
        .pipe(ejs(data, settings))
        .pipe(gulp.dest('../htdocs'))
        .pipe(browserSync.stream());
});