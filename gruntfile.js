module.exports = function (grunt) {
    grunt.initConfig({
        karma: {
            default: {
                configFile: 'test/karma.conf.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-karma-0.9.1');
    grunt.registerTask('default', [
        'karma'
    ]);
};
