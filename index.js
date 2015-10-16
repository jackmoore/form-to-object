/* jshint -W093 */

module.exports = function (form) {
  var body = Object.create(null)

  Array.prototype.slice.call(form.querySelectorAll('input:not(:disabled), textarea:not(:disabled), select:not(:disabled)')).forEach(function (el) {
    var key = el.name;

    // if an element has no name, it wouldn't be sent to the server
    if (!key) return

    if (['file', 'reset', 'submit', 'button'].indexOf(el.type) > -1) return

    if (['checkbox', 'radio'].indexOf(el.type) > -1 && !el.checked) return

    if (/\[\]$/.test(key)) {
      key = key.slice(0,-2);

      // if using array notation, go ahead and put the first value into an array.
      if (body[key] === undefined) {
        body[key] = [];
      }
    }
    
    if (body[key] === undefined) {
      body[key] = el.value;
    } else if (Object.prototype.toString.call(body[key]) === '[object Array]') {
      body[key].push(el.value);
    } else {
      body[key] = [body[key], el.value];
    }
  })

  return body
}
