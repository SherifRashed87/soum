import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import {LandingPage} from "../Pages/LandingPage";
const landingPageSteps = new LandingPage();

Given(/^Navigate to web site$/, function () {
  landingPageSteps.navigateSite();
});

When(/^Select element (.+?)$/,function (elementName) {
  landingPageSteps.selectElement(elementName);
});

And(/^Click on add element$/, function () {
  landingPageSteps.clickAddElement();
});

When(/^Click on delete element$/, function () {
  landingPageSteps.clickDeleteElement();
});

Then(/^Element is added$/, function () {
landingPageSteps.isElementAdded();
});

Then(/^Element is deleted$/, function () {
  landingPageSteps.isElementDeleted();
});

Then(/^Fill user name (.+?)$/, function (userName) {
  landingPageSteps.fillUserName(userName);
});

Then(/^Fill password (.+?)$/, function (password) {
  landingPageSteps.fillPassword(password);
});

And(/^Click login$/, function () {
  landingPageSteps.clickLogin();
});

Then(/^Authentication is succeeded$/, function () {
  landingPageSteps.verifyAuthentication();
});

Then(/^Clear session$/, function () {
  cy.window().then((win) => {
    win.sessionStorage.clear()
  });
});

Then(/^Move slider to (.+?)$/, function (value) {
  landingPageSteps.moveSlider(value);
});

Then(/^Slider moved to (.+?)$/, function (value) {
  landingPageSteps.checkSliderRange(value);
});

Then(/^Click for js alert$/, function () {
  landingPageSteps.clickForJsAlert();
});

Then(/^Confirm result (.+?)$/, function (text) {
  landingPageSteps.checkJsTextResult(text);
});

Then(/^Click for js confirm$/, function () {
  landingPageSteps.clickForJsConfirm();
});

Then(/^Click (.+?) window confirm$/, function (action) {
  landingPageSteps.actionForJs(action);
});

Then(/^Click and enter text in prompt js (.+?)$/, function (text) {
  landingPageSteps.enterTextInPrompt(text);
});

Then(/^Select (.+?) from drop down$/, function (option) {
  landingPageSteps.selectFromDropdown(option);
});



