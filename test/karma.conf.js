// Karma configuration
// Generated on Tue May 28 2013 09:41:57 GMT-0700 (Pacific Daylight Time)


// base path, that will be used to resolve files and exclude
basePath = '..';


// frameworks to use
frameworks = ['jasmine'];


// list of files / patterns to load in the browser
files = [
  'colorizer.js',
  'http://underscorejs.org/underscore-min.js',
  'http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
  'test/*.spec.js',
  '*.html'
];


// list of files to exclude
exclude = [
  
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS', ''];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = true;

preprocessors = {
  '*.html': 'html2js'
};


// plugins to load
plugins = [
  'karma-jasmine',
  'karma-phantomjs-launcher',
  'karma-html2js-preprocessor'
];
