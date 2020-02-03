exports.config = {
  tests: "./tests/*_test.js",
  output: "./output",
  helpers: {
    WebDriver: {
      url: "http://127.0.0.1:8000",
      browser: "chrome",
      desiredCapabilities: {
        chromeOptions: {
          args: [
            "--headless",
            "--disable-extensions",
            "--disable-gpu",
            "--no-sandbox",
          ]
        }
      },
      windowSize: "1440x700",
      smartWait: 5000,
      timeouts: {
        script: 60000,
        "page load": 10000
      }
    },
    REST: {
      endpoint: "http://127.0.0.1:8000",
      defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
      },

    }
  },
  include: {
    I: "./steps_file.js",
    homePage: "./pages/HomePage.js"
  },


  bootstrap: null,
  mocha: {},
  name: "tests",
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ["selenium-standalone"]
    }
  }
};
