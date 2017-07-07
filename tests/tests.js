var webDriver = require('selenium-webdriver');
var driver = new webDriver.Builder()
    .usingServer('http://localhost:4444/wd/hub')
    .withCapabilities(webDriver.Capabilities.chrome())
    .build();

describe('test AC application', function() {

    var login_page = require('../page_objects/login_page.js');
    var home_page = require('../page_objects/home_page.js');
    var results_page = require('../page_objects/results_page.js');
    var history_page = require('../page_objects/history_page.js');
    var tlp = require('../page_objects/tlp.js');

    it('to login to AC app', function () {
        browser.driver.get('http://www.answerconnect.stg.cch.com/?forcestandardlogin#/home');
        var getLoginPageTitle = login_page.getLoginPageTitle();

        expect(getLoginPageTitle).toBe('CCH AnswerConnect');
        expect(element(by.id('username')).isDisplayed()).toBe(true);
        expect(element(by.id('password')).isDisplayed()).toBe(true);

        login_page.enterUserNameValue('ac2cl.all108@cch.com');
        login_page.enterUserPasswordValue('password');
        var home_page = login_page.clickLogin();
        var getHomePageTitle = home_page.getHomePageTitle();

        expect(getHomePageTitle).toBe('CCH AnswerConnect');
        expect(element(by.className('beta-search-box-title')).isDisplayed()).toBe(true);
    });
    it('to execute the main search', function () {
        home_page.enterSearchTerm('Minsk');
        var results_page = home_page.runMainSearch();

        expect(element(by.className('wk-search-input')).isDisplayed()).toBe(true);
    });
    it('to check history elements', function () {
        var history_page = results_page.waitForIcon();
        history_page.openHistoryPopup();
        history_page.clickHistoryItem();
        history_page.waitForWkButton();
        history_page.clickMyHistoryItem('Minsk');
        results_page.waitForIcon();
    });
    it('to return to the homepage using browser navigation button', function () {
        results_page.backBrowser();
        history_page.waitForWkButton();
        results_page.clickHomeBreadcrumb();
        expect(element(by.className('wk-navbar-container')).isDisplayed()).toBe(true);
    });
    it('to open tlp docView and check back to top button behavior', function () {
        var tlp = home_page.findFederal();
        var backToTop = element(by.className('wk-button taa-scroll-to-top-button')).isDisplayed();

        expect(element(by.css('.browse-all-topics .page-title ')).isDisplayed()).toBe(true);

        tlp.waitForTlp();
        tlp.openSubTopic();
        expect(element(by.css('.topic-page .subpage-header h1')).isDisplayed()).toBe(true);

        tlp.waitForSidebar();
        tlp.doubleClickKeySources();

        tlp.scrollUp();
        expect(backToTop).toBe(false);

        tlp.scrollDown();
        tlp.moveMouseButton();
        tlp.clickAction();
        tlp.moveMouseLink('Recommended Topics');
        tlp.clickAction();
        tlp.moveMouseButton();
        tlp.clickAction();
    });

});