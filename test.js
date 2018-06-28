var validate = require('sourcemap-validator')
  , fs = require('fs')
  , assert = require('assert')
  , min = fs.readFileSync('dist/main.css', 'utf-8')
  , map = fs.readFileSync('dist/main.css.map', 'utf-8');

assert.doesNotThrow(function () {
  validate(min, map);
}, 'The sourcemap is not valid');
