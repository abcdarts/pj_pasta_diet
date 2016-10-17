var gulp = require('gulp');
var browserSync = require('browser-sync');

require('./gulp/init.js');
require('./gulp/sass.js');
require('./gulp/ejs.js');
require('./gulp/babel.js');
require('./gulp/copy.js');

gulp.task('watch', function() {
    gulp.watch('./_src/css/**/*.scss',['sass']);
    gulp.watch('./ejs/**/*.ejs',['ejs']);
    gulp.watch('./_src/js/**/*.js',['babel']);
    gulp.watch('./_src/images/**',['copy']);
});

gulp.task('default', ['init','watch','sass','ejs','babel','copy']);