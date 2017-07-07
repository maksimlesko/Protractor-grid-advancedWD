var home_page = function() {

    var EC = protractor.ExpectedConditions;

	this.getHomePageTitle = function() {
		return browser.driver.getTitle();
};

	this.enterSearchTerm = function(value){
		element(by.model('query')).sendKeys(value);
	};

	this.runMainSearch = function(){
        element(by.model('query')).sendKeys(protractor.Key.ENTER);
		return require('./results_page.js');
	};

	this.findFederal = function () {
        browser.driver.wait(EC.visibilityOf(element(by.linkText('Federal Tax Topics')), 10000)).then(function () {
            element(by.linkText('Federal Tax Topics')).click();
        });
        return require('./tlp.js');
    };
};

module.exports = new home_page();