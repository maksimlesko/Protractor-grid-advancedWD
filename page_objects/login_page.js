var login_page = function() {
	var loginField = element(by.id('username'));
	var passField = element(by.id('password'));
	
	this.getLoginPageTitle = function() {
		return browser.driver.getTitle();
	};
	
	this.enterUserNameValue = function(value) {
        loginField.sendKeys(value);
	};
	
	this.enterUserPasswordValue = function(value) {
		passField.sendKeys(value);
	};
	
	this.clickLogin = function() {
		element(by.className('wk-button-primary wk-button-full')).click();
		return require('./home_page.js');
	};
	
};
module.exports = new login_page();