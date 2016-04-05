var path = require('path');

module.exports = function(config) {
  config.set({
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // list of files / patterns to load in the browser
    files: [
      'src/**/*.js',
      'test/**/*.js'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // coverage reporter generates the coverage
    reporters: ['coverage', 'spec'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/**/*.js': ['coverage']
    },

    // optionally, configure the reporter
    coverageReporter: {
      reporters: [
        { type: 'html', dir: 'coverage', subdir: '.' },
        { type: 'text-summary' }
      ]
    }

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    // reporters: ['spec'],

    // specReporter: {
      // maxLogLines: 1,         // limit number of lines logged per test
      // suppressPassed: true,  // do not print information about passed tests
    // },
  })
}
