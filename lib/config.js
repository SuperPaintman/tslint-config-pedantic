'use strict';
const { join } = require('path');

module.exports = function config(name) {
  return {
    extends: [
      'tslint-eslint-rules',
      join(__dirname, '../configs', `${name}.yml`)
    ]
  };
};
