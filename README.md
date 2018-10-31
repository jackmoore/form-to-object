# form-to-object

Convert form input values to an object.

### Install via NPM
```bash
npm install form-to-object
```

### Browser compatibility

Chrome | Firefox | IE | Safari | iOS Safari 
------ | --------|----|--------|------------
yes    | yes     | 9  | yes    | yes        

### Syntax

```js
formToObject(HTMLFormElement)
```

Parameters: `HTMLFormElement`

Return value: `Object`

### Example 

##### Input:

```html
<form>
  <input type="text" name="first-name" value="Hello"/>
  <input type="text" name="last-name" value=""/>
  <select name="colors">
    <option></option>
    <option value="red">red</option>
    <option value="blue" selected>blue</option>
    <option value="green">green</option>
  </select>
  <input type='checkbox' name='foods' value='pizza'/>
  <input type='checkbox' name='foods' value='tacos' checked/>
  <input type='checkbox' name='foods' value='beers' checked/>
  <input type='checkbox' name='foods' value='burgers'/>
</form>
<script>
  var form = document.querySelector('form');
  var object = formToObject(form);

  console.log(JSON.stringify(object));
</script>
```

##### Output:

```text
{
  "first-name": "Hello",
  "last-name": "",
  "colors": "blue",
  "foods": [
    "tacos",
    "beers"
  ]
}
```