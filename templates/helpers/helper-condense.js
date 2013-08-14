/**
 * Collapse multiple new lines into one.
 *
 * @param {none}
 * @example:
 *   {{#condense}}
 *     {{> body }}
 *   {{/condense}}
 */

module.exports.register = function(Handlebars, options) {
  Handlebars.registerHelper('condense', function(context) {
    return context.fn(this).replace(/(\n|\r){2,}/g, '\n').replace(/(\s*<!--)/g, '\n$1');
  });
};