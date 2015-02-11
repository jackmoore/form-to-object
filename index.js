
/* jshint -W093 */

var slice = [].slice

module.exports = function (form) {
  var body = Object.create(null)

  slice.call(form.querySelectorAll('input, textarea, select'))
  .forEach(function (el) {
    if (el.disabled || !el.name) return

    switch (el.tagName.toLowerCase()) {
      case 'textarea': return body[el.name] = el.value
      case 'select': return body[el.name] = el.options[el.selectedIndex].value
      case 'input': break
      default: return
    }

    switch (el.type) {
      // not supported types
      case 'file':
      case 'reset':
      case 'submit':
        return
      case 'checkbox': return body[el.name] = !!el.checked
      case 'radio':
        if (el.selected) body[el.name] = true
        return
    }

    // otherwise we assume it's text
    body[el.name] = el.value
  })

  return body
}
