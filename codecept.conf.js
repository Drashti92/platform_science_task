const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://localhost:8080/v1',
      defaultHeaders: {
        "Content-Type": "application/json",
      },
    },
    JSONResponse: {}
  },
  mocha: {
    reporterOptions: {
      mochaFile : "output/result.xml",
      reportDir : "output"
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'platform_coding_task'
}