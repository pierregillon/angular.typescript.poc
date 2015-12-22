(function (require) {
    'use strict';

    var gulp = require('gulp');
    var ts = require('gulp-typescript');
    var watch = require('gulp-watch');

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

    gulp.task('build-w', ['build'], function(){
        return watch('app/src/js/**/*.ts', function(){
            gulp.start('build');
        });
    });

})(require);