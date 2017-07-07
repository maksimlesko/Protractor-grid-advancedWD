var results_page = function() {
	
	this.waitForIcon = function() {
		browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.css('.single-action .document-action'))), 30000);
		return require ('./history_page.js');
	};
	
	this.getEnteredQuery = function() {
		return element(by.model('query')).getText();
	};
	
	this.backBrowser = function() {
		browser.driver.navigate().back();
	};
	
	this.clickHomeBreadcrumb = function() {
		
		element(by.xpath('//*[@id="body"]/ui-view/div[2]/ng-transclude/div/csn-header/csn-sub-header/div/div[1]/div/nav/ol/li/a/span')).click();
		return require ('./home_page.js');
	};
	
};

module.exports = new results_page();