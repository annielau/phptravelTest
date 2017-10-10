var assert = require ('assert');
var expect = require('chai').expect;
var testPage = require ('../pageobjects/test.page');

describe ('it should validate when credentials are wrong', function(){

		it ('should open the rigth page', function(){
		browser.url('/');
		var title= browser.getTitle();
		assert.equal(title, 'PHPTRAVELS | Travel Technology Partner');
	});

	it ('should show an error message when password is wrong', function(){
		browser.url('/login');
		testPage.loginField.setValue('user@phptravels.com');
		testPage.passwordField.setValue('aaa');
		testPage.loginButton.click();
		expect (testPage.wrongUserPasswordMessage.getText()).to.have.string('Invalid Email or Password');
	});

})


describe ('it should correctly login', function(){
	
	it ('should open the rigth page', function(){
		browser.url('/');
		var title= browser.getTitle();
		assert.equal(title, 'PHPTRAVELS | Travel Technology Partner');
	});

	it ('should login with valid credentials', function(){
		browser.url('/login');
		testPage.loginField.setValue('user@phptravels.com');
		testPage.passwordField.setValue('demouser');
		testPage.loginButton.click();
		testPage.waitForPageLoad('My Account');
		testPage.waitForElementVisible('h3*=Hi,');
	    testPage.verifyGreetingMessage();
	
	});


});



