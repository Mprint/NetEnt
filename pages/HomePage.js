const { I } = inject();

module.exports = {
  result: {
    noWin: "No Win, try again.",
    smallWin: "Small win, try again to win more.",
    bigWin: "Big win, congratulation.",
  },
  selector: {
    body: "body",
    spin: ".spin",
    statusField: "#status",
    result: "#result",
    startBtn: "#start",
    resultFirst: "#result > div:nth-child(1)",
    resultSecond: "#result > div:nth-child(2)",
    resultThird: "#result > div:nth-child(3)"
  },
  imageName: {
    wild: 'url("http://127.0.0.1:8000/Symbol_0.png")',
    startBtn: 'url("http://127.0.0.1:8000/button.png")',
  },

  goto() {
    I.amOnPage("/");
    I.waitForVisible("#status");
    I.seeTextEquals("Welcome", "#status");
  },

  seeBackroundImagesLink() {
    I.wait(2);
    I.seeCssPropertiesOnElements(this.selector.startBtn, {
      "background-image": this.imageName.startBtn
    });
    I.seeCssPropertiesOnElements(this.selector.resultFirst, {
      "background-image": this.imageName.wild
    });
    I.seeCssPropertiesOnElements(this.selector.resultSecond, {
      "background-image": this.imageName.wild
    });
    I.seeCssPropertiesOnElements(this.selector.resultThird, {
      "background-image": this.imageName.wild
    });
  },

  seeVisibleElements() {
    I.seeElement(this.selector.statusField);
    I.seeElement(this.selector.result);
    I.seeElement(this.selector.startBtn);
    I.seeElement(this.selector.resultFirst);
    I.seeElement(this.selector.resultSecond);
    I.seeElement(this.selector.resultThird);
  },

  clickStartBtn() {
    I.click(this.selector.startBtn);
  },

};
