
const locators = {
    addElement: '#content > div > button',
    deleteElement: '#elements > button',
    userName: '#username',
    password: '#password',
    loginButton: '#login > button',
    logoutButton: '#content > div > a',
    slider:'#content > div > div > input[type=range]',
    sliderRange: '#range',
    jsAlert: 'Click for JS Alert',
    windowAlert: 'window:alert',
    windowConfirm: 'window:confirm',
    resultJS: '#result',
    jsConfirm: 'Click for JS Confirm',
    jsPrompt: 'Click for JS Prompt',
    dropDown: '#dropdown',
    selectOption: '#dropdown > option:nth-child(1)',
    optionOne: '#dropdown > option:nth-child(2)',
    optionTwo: '#dropdown > option:nth-child(3)',
    defaultOption: 'Please select an option'

};
export class LandingPage{

    navigateSite() {
       cy.visit('/');
    }

    selectElement(elementName) {
    cy.get('a[href*="'+elementName+'"]').should('be.visible').click();
    }

    clickAddElement() {
        cy.get(locators.addElement).should('be.visible').click();
    }

    clickDeleteElement() {
        cy.get(locators.deleteElement).should('be.visible').click();
    }

    isElementAdded() {
        expect(locators.deleteElement).to.exist
    }

    isElementDeleted() {
        !expect(locators.deleteElement).to.exist
    }

    fillUserName(userName) {
        cy.get(locators.userName).should('be.visible').type(userName, { force: true })
    }

    fillPassword(password) {
        cy.get(locators.password).type(password, { force: true })
    }

    clickLogin() {
        cy.get(locators.loginButton).click();
    }

    verifyAuthentication() {
        expect(locators.logoutButton).to.exist
    }

    moveSlider(value) {
        cy.get(locators.slider)
            .invoke("val", value)
            .trigger("change")
            .click({ force: true })
    }

    checkSliderRange(value) {
        cy.get(locators.sliderRange).should('have.text', value);
    }

    clickForJsAlert() {
        cy.contains(locators.jsAlert).click()
        cy.on(locators.windowAlert, (str) => {
            expect(str).to.equal('I am a JS Alert')
        })

    }

    clickForJsConfirm() {
        cy.contains(locators.jsConfirm).click()
        cy.on(locators.windowConfirm, (str) => {
            expect(str).to.equal(`I am a JS Confirm`)
        })
    }

    actionForJs(action) {
        cy.on(locators.windowConfirm, () => false)
    }

    checkJsTextResult(text) {
        cy.get(locators.resultJS).should('have.text', text)
    }


    enterTextInPrompt(text) {
        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns(text)
            cy.contains(locators.jsPrompt).click()
        })
    }

    selectFromDropdown(option) {
        cy.get('select'+locators.dropDown+' option:selected').should('have.text', locators.defaultOption)
        cy.get(locators.dropDown).should('be.visible').select(option)
        cy.get('select'+locators.dropDown+' option:selected').should('have.text', option)
    }


}