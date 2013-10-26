module.exports = function (grunt) {
    grunt.initConfig({
        karma: {
            default: {
                options: {
                    autoWatch: false,
                    singleRun: true,
                    frameworks: ['jasmine'],
                    reporters: ['progress', 'coverage'],
                    port: 9876,
                    colors: true,
                    browsers: ['PhantomJS'],
                    captureTimeout: 10000,
                    reportSlowerThan: 300,
                    files: [
                        'components/**/*',
                        'vendor/*'
                    ],
                    preprocessors: {
                        'components/**/source/**/*.js': 'coverage',
                        'components/**/tests/**/*.html': 'html2js'
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
        }
    });
    grunt.loadNpmTasks('grunt-karma');
};
