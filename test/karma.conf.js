module.exports = function (karma) {
    karma.configure({
        basePath: '..',
        frameworks: ['jasmine'],
        // list of files / patterns to load in the browser
        files: [
            'my_module.js',
            'http://underscorejs.org/underscore-min.js',
            'test/*.spec.js'
        ],
        // list of files to exclude
        exclude: [],
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: LOG_INFO,
        browsers: ['Chrome', 'PhantomJS', 'IE'],
        captureTimeout: 60000,
        singleRun: true,
        preprocessors = {
            'my_fixture.html': 'html2js'
        },
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-ie-launcher',
            'karma-html2js-preprocessor'
        ]
    });
};
