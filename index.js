
/* jshint -W093 */

var slice = [].slice

module.exports = function (form) {
  var body = Object.create(null)

  slice.call(form.querySelectorAll('input, textarea, select'))
  .forEach(function (el) {
    // if an element has no name, it wouldn't be sent to the server
    if (!el.name) return
    // if an element is read only, then it doesn't make sense to send client
    if (el.readOnly) return
    // if the element is disabled then it wouldn't be sent to the server
    if (el.disabled) return

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
      case 'checkbox': 
      case 'radio':
        if (el.checked) body[el.name] = el.value
        return
    }

    // otherwise we assume it's text
    body[el.name] = el.value
  })

  return body
}
