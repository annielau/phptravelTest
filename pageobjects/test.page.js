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
	//grettingMessage: {get: function(){return browser.element('div  h3*=Hi,')}},
 	//grettingMessage: {get: function(){return browser.element('div > h3 > RTL')}},
 	//grettingMessage: {get: function(){return browser.element('div.container div.row div.row div.col-md-6.go-right.RTL h3.RTL')}},
 	//grettingMessage: {get: function(){return browser.element('#text')}},
 	grettingMEssage: {get: function(){return browser.getText('h3.RTL')}},

});

module.exports = testPage;

