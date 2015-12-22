(function (require) {
    'use strict';

    var gulp = require('gulp');
    var ts = require('gulp-typescript');
    var watch = require('gulp-watch');
    var karma = require('karma');
    var path = require('path');

    gulp.task('build', function () {
        return gulp.src([
            'app/src/js/**/*.module.ts',
            'app/src/js/**/*.ts',
            '!app/src/js/**/*.spec.ts'
        ])
            .pipe(ts({
                noImplicitAny: true,
                out: 'application.js'
            }))
            .pipe(gulp.dest('app/dist'));
    });

    gulp.task('build-w', ['build'], function () {
        return watch('app/src/js/**/*.ts', function () {
            gulp.start('build');
        });
    });

    gulp.task('test', function (done) {
        var server = new karma.Server({
            configFile: path.resolve('./app/karma.conf.js')
        }, function () {
            done();
        });
        server.start();
    });

})(require);