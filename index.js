"use strict";

/**
 * Return a random color
 * @param {object} options - can select return type: rgb, hex, or name
 * can also select color palettes.
 */
var colors = require('./colors.js');

function random(options) {
    var color;
    if (options && options.format === 'name') {
        // return color name
        color = colors[Math.floor(Math.random() * colors.length)]['name'];
    } else if (options && options.format === 'rgb') {
        // return array of rgb - need to determine return type
        color = [
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256)
        ];
    } else {
        // return hex
        color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    return color;
}

module.exports = random;