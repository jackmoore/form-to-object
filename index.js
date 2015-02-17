
/* jshint -W093 */

var closest = require('component-closest')

var slice = [].slice

module.exports = function (form) {
  var body = Object.create(null)

  slice.call(form.querySelectorAll('input, textarea, select'))
  .forEach(function (el) {
    // if an element has no name, it wouldn't be sent to the server
    if (!el.name) return
    // if an element is read only, then it doesn't make sense to send client
    if (el.readOnly) return
    // if the element is disabled or any ancestor is disabled,
    // then it shouldn't be sent to the server
    if (closest(el, '[disabled]', true)) return

    switch (el.tagName.toLowerCase()) {
      case 'textarea': return body[el.name] = el.value
      case 'select':
        if (el.options.length) body[el.name] = el.options[el.selectedIndex].value
        return
      case 'input': break
      default: return
    }

    switch (el.type) {
      // not supported types
      case 'file':
      case 'reset':
      case 'submit':
      case 'button':
        return
      case 'checkbox': return body[el.name] = !!el.checked
      case 'radio':
        if (el.selected) body[el.name] = el.value
        return
    }

    // otherwise we assume it's text
    body[el.name] = el.value
  })

  return body
}
