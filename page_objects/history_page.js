var history_page = function() {

    var EC = protractor.ExpectedConditions;
	
	this.openHistoryPopup = function() {
		element(by.xpath('//*[@id="body"]/ui-view/div[2]/ng-transclude/div/csn-header/header/div/div/ul[2]/li[1]/a')).click();
	};
	
	this.clickHistoryItem = function() {
		element(by.xpath('//*[@id="body"]/ui-view/div[2]/ng-transclude/div/csn-header/header/div/div/ul[2]/li[1]/csn-header-history/div/rs-recent-history/div/a')).click();
	};
	
	this.waitForWkButton = function() {
		browser.driver.wait(EC.visibilityOf(element(by.className('wk-button-group-left'))), 15000);
	};
		
	this.clickMyHistoryItem = function(value) {
		element(by.linkText(value)).click();
		return require ('./results_page.js');
	};
	
	
};

module.exports = new history_page();