// gruntfile.js
module.exports = function (grunt) {
    grunt.initConfig({
        karma: {
            once: {
                options: {
                    autoWatch: false,
                    singleRun: true
                }
            },
            options: {
                frameworks: ['jasmine'],
                reporters: ['progress', 'coverage'],
                port: 9876,
                colors: true,
                browsers: ['PhantomJS'],
                captureTimeout: 10000,
                reportSlowerThan: 300,
                files: [
                    '**/components/**/*',
                    '**/vendor/**/*'
                ],
                preprocessors: {
                    '**/components/**/tests/**/*.html': 'html2js',
                    '**/components/**/source/**/*.js': 'coverage'
                },
                plugins: [
                    'karma-jasmine',
                    'karma-phantomjs-launcher',
                    'karma-html2js-preprocessor',
                    'karma-coverage'
                ],
                coverageReporter: {
                    type: 'text-summary',
                    dir: 'coverage'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-karma');
};
