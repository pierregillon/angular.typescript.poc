// Karma configuration
// Generated on Tue Dec 22 2015 16:44:32 GMT+0100 (Paris, Madrid)

module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine', 'sinon-chai'],
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-mocks/angular-mocks.js',

            'src/js/**/*.module.ts',
            'src/js/**/*.controller.ts',
            'src/js/**/*.repository.ts',
            'src/js/**/*.model.ts',

            'src/js/**/*.spec.ts'
        ],
        exclude: [],
        preprocessors: {
            'src/js/**/*.ts': ['typescript']
        },
        typescriptPreprocessor: {
            // options passed to the typescript compiler
            options: {
                sourceMap: false, // (optional) Generates corresponding .map file.
                target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
                module: 'amd', // (optional) Specify module code generation: 'commonjs' or 'amd'
                noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
                noResolve: false, // (optional) Skip resolution and preprocessing.
                removeComments: true, // (optional) Do not emit comments to output.
                concatenateOutput: true // (optional) Concatenate and emit output to single file. By default true if module option is omited, otherwise false.
            },
            typings: [
                'app/typings/tsd.d.ts'
            ]
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DISABLE,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    })
};
