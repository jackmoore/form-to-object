
# form-to-object

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

Convert a form to JSON.

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

[gitter-image]: https://badges.gitter.im/jonathanong/form-to-object.png
[gitter-url]: https://gitter.im/jonathanong/form-to-object
[npm-image]: https://img.shields.io/npm/v/form-to-object.svg?style=flat-square
[npm-url]: https://npmjs.org/package/form-to-object
[github-tag]: http://img.shields.io/github/tag/jonathanong/form-to-object.svg?style=flat-square
[github-url]: https://github.com/jonathanong/form-to-object/tags
[travis-image]: https://img.shields.io/travis/jonathanong/form-to-object.svg?style=flat-square
[travis-url]: https://travis-ci.org/jonathanong/form-to-object
[coveralls-image]: https://img.shields.io/coveralls/jonathanong/form-to-object.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/jonathanong/form-to-object
[david-image]: http://img.shields.io/david/jonathanong/form-to-object.svg?style=flat-square
[david-url]: https://david-dm.org/jonathanong/form-to-object
[license-image]: http://img.shields.io/npm/l/form-to-object.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/form-to-object.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/form-to-object
[gittip-image]: https://img.shields.io/gratipay/jonathanong.svg?style=flat-square
[gittip-url]: https://gratipay.com/jonathanong/
