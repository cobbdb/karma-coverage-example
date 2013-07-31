// gruntfile.js
module.exports = function (grunt) {
    grunt.initConfig({
        karma: {
            default: {
                configFile: 'test/karma.conf.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', [
        'karma'
    ]);
};
