/**
 * {{prettify}} by Jon Schlinkert
 * http://github.com/jonschlinkert
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */

var _ = require('lodash');

module.exports.register = function(Handlebars, options) {

  var prettify = require('js-beautify').html;


  /**
   * Prettify HTML output
   *
   * @example:
   *   {{#prettify indent="2"}}
   *     {{> body }}
   *   {{/prettify}}
   */
  Handlebars.registerHelper('prettify', function (options) {
    var hash = options.hash;
    defaults = _.extend(hash, defaults);

    return prettifyHTML(options.fn(this)
      .replace(/(\n|\r){2,}/g, '\n') // reduce multiple newlines to a single newline
      .replace(/(\s+<!--)/g, '\n$1'), defaults); // add a newline above each comment
  });


  /**
   * Default options passed to js-beautify.
   * @param {hash arguments} [Options received as hash arguments will override defaults.]
   * @param {task options}   [Options defined in the task/target override hash arguments.]
   */
  var defaults = {
    condense: true,
    indent_size: 2,
    indent_char: " ",
    indent_inner_html: true,
    indent_scripts: "normal",
    brace_style: "expand",
    preserve_newline: false,
    max_preserve_newline: 0,
    unformatted: ['code', 'pre']
  };
  defaults = _.extend(defaults, options.prettify);
  defaults.indent_size = defaults.indent;


  /**
   * Format HTML with js-beautify, pass in options.
   * @param   {String} source     [The un-prettified HTML.]
   * @param   {Object} options   [Object of options passed to js-beautify.]
   * @returns {String}            [Stunning HTML.]
   */
  var prettifyHTML = function(source, options) {
    try {
      return prettify(source, options);
    } catch (e) {
      console.error(e);
      console.warn('HTML beautification failed.');
    }
  };
};
