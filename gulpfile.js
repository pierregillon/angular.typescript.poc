(function (require) {
    'use strict';

    var gulp = require('gulp');
    var ts = require('gulp-typescript');

    gulp.task('build', function () {
        return gulp.src([
            'app/src/js/**/*.module.ts',
            'app/src/js/**/*.ts'
        ])
            .pipe(ts({
                noImplicitAny: true,
                out: 'application.js'
            }))
            .pipe(gulp.dest('app/dist'));
    });


})(require);