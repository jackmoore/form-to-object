/* jshint -W093 */

var matches = require('matches-selector')

module.exports = function (form) {
  var body = Object.create(null)

  Array.prototype.slice.call(form.querySelectorAll('input, textarea, select'))
  .forEach(function (el) {
    // if an element has no name, it wouldn't be sent to the server
    if (!el.name) return
    // if an element is read only, then it doesn't make sense to send client
    if (el.readOnly) return
    // if the element is disabled then it wouldn't be sent to the server
    if (matches(el, ':disabled')) return

    if (el.type.indexOf(['file', 'reset', 'submit', 'button']) !== -1) return

    if (body[el.name] === undefined) {
      body[el.name] = el.value;
    } else if (Object.prototype.toString.call(body[el.name]) === '[object Array]') {
      body[el.name].push(el.value);
    } else {
      body[el.name] = [body[el.name], el.value];
    }
  })

  return body
}