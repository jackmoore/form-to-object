# form-to-object

Convert form input values to an object.

```html
<form>
  <input type="text" name="name" value="jon"></input>
</form>
```

```js
var toObject = require('form-to-object')
var form = document.querySelector('form')
var object = toObject(form);

// object.name === 'jon'
```