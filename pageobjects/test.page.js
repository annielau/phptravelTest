var Page= require('./page')
var expect = require ('chai').expect;

var testPage = Object.create(Page, {

	flightButton: {get: function(){return browser.element('span.hidden-xs')}},
	hotelField: {get: function(){return browser.element('.select2-drop > div > input')}},
	originField: {get: function(){return browser.element('input.select2-input')}},
	myAccountLink: {get: function(){return browser.element('.dropdown-toggle.go-text-right')}},
	loginLink: {get: function(){return browser.element('a.go-text-right')}},
	loginField: {get: function(){return browser.element('input[name=username')}},
	passwordField: {get: function(){return browser.element('input[name=password]')}},
	loginButton: {get: function(){return browser.element('button[type="submit"]')}},
    //greetingMessage: {get: function(){return browser.element('h3*=Hi,')}},
    wrongUserPasswordMessage: {get: function(){return browser.element('div.alert-danger')}},


 	verifyGreetingMessage: {
		value: function () {
			//var greeting = this.greetingMessage.getText();
			var greetingMessage= browser.getText('h3.RTL');
			expect (greetingMessage).to.have.string('Hi, Johny Smith');

		},
	},

	waitForPageLoad: {
		value: function (pageName) {
			browser.waitUntil(function () {
       		return browser.getTitle() === pageName}, 99999, 'expected different page');

		},
	},

	waitForElementVisible: {
		value: function (message) {
			
       		browser.waitForVisible(message,9999);

		},
	},


});

module.exports = testPage;

