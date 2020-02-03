const expect = require("chai").expect;
const { I, homePage } = inject();

Feature("GET tests");

Scenario("Verify a successful call", async () => {
  const res = await I.sendGetRequest("/");
  expect(res.status).to.eql(200);
});

Scenario("Verify a not found call", async () => {
  const res = await I.sendGetRequest("/api/users/266");
  expect(res.status).to.eql(404);
});

Scenario("Verify a successful outcome file", async () => {
  const res = await I.sendGetRequest("/outcome.json");
  expect(res.status).to.eql(200);
});

Scenario("Verify a successful call to images", async () => {
  const res = await I.sendGetRequest("/Symbol_0.png");
  expect(res.status).to.eql(200);
});

Scenario("Verify a successful call to images", async () => {
  const res = await I.sendGetRequest("/Symbol_1.png");
  expect(res.status).to.eql(200);
});

Scenario("Verify no Win result", async () => {
  userData = {
    value: [0, 1, 2]
  };

  const res = await I.sendGetRequest("/outcome.json", userData);
  expect(res.status).to.eql(200);

  homePage.goto();
  I.seeInField(homePage.selector.result, homePage.result.smallWin);
});

Scenario("Verify small Win result", async () => {
  userData = {
    value: [2, 3, 3]
  };

  const res = await I.sendGetRequest("/outcome.json", userData);
  expect(res.status).to.eql(200);

  homePage.goto();
  I.seeInField(homePage.selector.result, homePage.result.smallWin);
});

Scenario("Verify big Win result", async () => {
  userData = {
    value: [3, 3, 3]
  };

  const res = await I.sendGetRequest("/outcome.json", userData);
  expect(res.status).to.eql(200);

  homePage.goto();
  I.seeInField(homePage.selector.result, homePage.result.smallWin);
});
