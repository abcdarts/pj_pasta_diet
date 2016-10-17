var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('init', function() {
    browserSync.init({
        server: {
            baseDir: "../htdocs/"
        }
    });
});