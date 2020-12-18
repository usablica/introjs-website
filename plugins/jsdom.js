module.exports = function (context, options) {

  const JSDOM = require('jsdom').JSDOM;

  const { window } = new JSDOM('<!doctype html><html><body></body></html>');

  if (!this.document) {
    this.document = window.document;
  }
};