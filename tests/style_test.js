Feature("check CSS styles on the Welcome page");

Before(async homePage => {
  homePage.goto();
});

Scenario("See background images link on the Welcome page", async homePage => {
  homePage.seeBackroundImagesLink();
});

Scenario("See visible elements on the Welcome page", async homePage => {
  homePage.seeVisibleElements();
});

Scenario("Check spin class after click on the start", async (I, homePage) => {
  I.dontSeeElement(homePage.selector.spin);
  homePage.clickStartBtn();
  I.seeElement(homePage.selector.spin);
  I.wait(2);
  I.dontSeeElement(homePage.selector.spin);
});

Scenario("Check change status text after start", async (I, homePage) => {
  homePage.clickStartBtn();
  I.dontSee("Welcome", "#status");
});

Scenario("Check alternative start - Enter key ", async (I, homePage) => {
  I.pressKey("Enter");
  I.waitForElement(homePage.selector.spin); // optional, 1 sec by default
});

// Scenario("Check pulse class when some result similar", async (I, homePage) => {
// });
