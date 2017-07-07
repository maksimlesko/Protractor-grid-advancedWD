var tlp = function() {

    var EC = protractor.ExpectedConditions;
    var title = element(by.linkText('Key Primary Sources'));

    this.findFederal = function() {
        return element(by.linkText('Federal Tax Topics')).click();
    };

    this.waitForTlp = function() {
        return browser.driver.wait(EC.visibilityOf(element(by.linkText('Accounting Methods and Changes in Accounting Methods')), 5000));
    };

    this.openSubTopic = function() {
        return browser.driver.wait(EC.visibilityOf(element(by.linkText('Cash Method of Accounting')), 7000))
            .then(function () {
            element(by.linkText('Cash Method of Accounting')).click()
                .then(function(){
                    browser.driver.sleep(3000);
                });
        });
    };

    this.waitForSidebar = function() {
        return browser.driver.wait(EC.visibilityOf(element(by.linkText('Key Primary Sources')), 5000));
    };

    this.doubleClickKeySources = function() {
        return browser.driver.actions().doubleClick(title).perform()
            .then(function () {
                browser.driver.sleep(2000)
            });
    };

    this.scrollUp = function() {
        browser.driver.executeScript('window.scrollTo(0,0)')
            .then(function () {
                browser.driver.sleep(3000);
            });

    };

    this.moveMouseLink = function(value){
        return browser.driver.actions().mouseMove(element(by.linkText(value))).perform().
            then (function(){
                browser.driver.sleep(3000);
        });
    };

    this.moveMouseButton = function(){
        browser.driver.actions().mouseMove(element(by.className('wk-button taa-scroll-to-top-button'))).perform()
            .then(function(){
                browser.driver.sleep(3000);
            });
    };

    this.clickAction = function(){
        return browser.driver.actions().click().perform()
            .then(function(){
                browser.driver.sleep(3000);
            });
    };

    this.scrollDown = function(){
        return browser.driver.executeScript('window.scrollTo(0, document.body.scrollHeight)')
            .then(function(){
                browser.driver.sleep(3000);
        })
    };

};

module.exports = new tlp();