var colors = require('./colors.js');

function random(options) {
    var color;
    if (options.format === 'hex') {
        color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    } else if (options.format === 'name') {
        color = colors[Math.floor(Math.random() * colors.length)]['name'];
    } else if (options.format === 'rgb') {
        color = [
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256)
        ];
    }

    return color;
}

module.exports = random;