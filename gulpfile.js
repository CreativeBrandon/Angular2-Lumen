
var gulp = require('gulp'),
    connect = require('gulp-connect-php'),
    browserSync = require('browser-sync');

var reload  = browserSync.reload();

gulp.task('connect-sync', function() {
    connect.server({
        base: 'server/api/public', port: 8000, keepalive: true
    }, function() {
        browserSync({
            proxy: '127.0.0.1:8000',
            port: 8000,
            open: true,
            notify: false
        });
    });
});

gulp.task('watch', ['connect-sync'], function () {
    gulp.watch(['**/*.php'], [reload]);
});

gulp.task('default', ['connect-sync']);
