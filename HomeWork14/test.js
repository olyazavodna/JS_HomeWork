const assert = require('assert');
const { Builder, Key, By, until } = require('selenium-webdriver');

// Task 1

describe('Test dropdown', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });
    it('Test dropdown elements availability', async function () {
        await driver.get('http://the-internet.herokuapp.com/dropdown');
        let options = await driver.findElement(By.id('dropdown')).findElements(By.css('option'));
        let isFirstEnabled = await options[0].isEnabled();
        let isSecondEnabled = await options[1].isEnabled()
        assert(isFirstEnabled == false && isSecondEnabled == true)
    });
    after(() => driver && driver.quit());
});

// Task 2

describe('Hover over element', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });
    it('Test text is appearing while hovering over avatar', async function () {
        await driver.get('http://the-internet.herokuapp.com/hovers');

        const figure = await driver.findElement(By.className('example')).findElement(By.className('figure'));
        const actions = driver.actions({ async: true });
        await actions.move({ origin: figure }).perform();
        const isFigcaptionDisplayed = await figure.findElement(By.className('figcaption')).isDisplayed();
        assert(isFigcaptionDisplayed == true)
    });
    after(() => driver && driver.quit());
});

// Task 3

describe('Submit form', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });
    it('Test successful text is shown after form submission', async function () {
        await driver.get('http://formy-project.herokuapp.com/form');

        await driver.findElement(By.id('first-name')).sendKeys('Peter');
        await driver.findElement(By.id('last-name')).sendKeys('Peterson');
        await driver.findElement(By.id('job-title')).sendKeys('tester');
        await driver.findElement(By.id('radio-button-1')).click();
        await driver.findElement(By.id('checkbox-1')).click();
        const options = await driver.findElement(By.id('select-menu')).findElements(By.css('option'));
        await options[2].click();
        await driver.findElement(By.id('datepicker')).sendKeys('12/12/2020');
        await driver.findElement(By.className('btn btn-lg btn-primary')).click();
        const alertElem = await driver.wait(until.elementLocated(By.className('alert alert-success')), 5000);
        const resultText = await alertElem.getText();
        assert(resultText == 'The form was successfully submitted!')
    });
    after(() => driver && driver.quit());
});

// Task 4

describe('Sort table', function () {
    let driver;
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });
    it('Test Due column is sorted ascending', async function () {
        await driver.get('http://the-internet.herokuapp.com/tables');

        const table2 = await driver.findElement(By.id('table2'));
        driver.executeScript('arguments[0].scrollIntoView();', table2);
        await table2.findElement(By.className('dues')).click();

        const dues = await table2.findElement(By.css('tbody')).findElements(By.className('dues'))
        let dueNumbers = []
        for (item of dues) {
            dueNumbers.push(await item.getText().then(text => Number(text.replace('$', ''))))
        }
        let sortedDueNumbers = [...dueNumbers]
        sortedDueNumbers.sort((a, b) => a - b)
        assert(JSON.stringify(sortedDueNumbers) === JSON.stringify(dueNumbers))
    });
    after(() => driver && driver.quit());
});

