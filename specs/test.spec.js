var assert = require ('assert');
var expect = require('chai').expect;
var testPage = require ('../pageobjects/test.page');

describe ('it should open flight page', function(){
	it ('should open the rigth page', function(){
		browser.url('/');
		var title= browser.getTitle();
		assert.equal(title, 'PHPTRAVELS | Travel Technology Partner');
	});
	it ('should search a flight', function(){
		browser.url('/');
		//testPage.hotelField.setValue('tria');
		//testPage.flightButton.click();
		//browser.waitUntil (function(){
			//return browser.getText('label.go-right')},5000,'expected text different');
		
		//testPage.originField.click();
		//testPage.originField.setValue('buenos aires');
	});

	it ('should login with valid credentials', function(){
		browser.url('/login');
		testPage.loginField.setValue('user@phptravels.com');
		testPage.passwordField.setValue('demouser');
		testPage.loginButton.click();
		browser.waitUntil(function () {
      			return browser.getTitle() === 'My Account'}, 99999, 
      			'expected different page');
	
	    browser.waitForVisible('h3*=Hi,',9999);
	    var greetingMessage= browser.getText('h3.RTL');
		expect (greetingMessage).to.have.string('Hi, Johny Smith');
	
	});


});


