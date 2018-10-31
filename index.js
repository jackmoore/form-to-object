(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['module', 'exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, mod.exports);
		global.formToObject = mod.exports;
	}
})(this, function (module, exports) {
	'use strict';

	exports.default = function (form) {
		var obj = Object.create(null);

		function assign(name, value) {
			if (obj[name] === undefined) {
				obj[name] = value;
			} else if (Array.isArray(obj[name])) {
				obj[name].push(value);
			} else {
				obj[name] = [obj[name], value];
			}
		}

		Array.prototype.slice.call(form.elements).forEach(function (field) {
			if (field.name && !field.disabled && (['file', 'reset', 'button'].indexOf(field.type) === -1)) {
				if (field.type === 'select-multiple') {
					Array.prototype.slice.call(field.options).forEach(function (option) {
						if (option.selected) {
							assign(field.name, option.value);
						}
					})
				} else if (field.type === 'checkbox' || field.type === 'radio') {
					if (field.checked) {
						assign(field.name, field.value);
					}
				} else {
					assign(field.name, field.value);
				}
			}
		})

		return obj;
	};

	module.exports = exports['default'];
});