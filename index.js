"use strict";

/**
 * Return a random color
 * @param {object} options The options object 
 * @returns {string} the color in format requested in options 
 */
var colors = require("./colors.js");

function randomColor(options) {
    var color;

    // Assign default option
    if (options === undefined) {
        options = {
            format: "name"
        };
    }

    // Type check options
    if (Object.prototype.toString.call(options) !== "[object Object]") {
        throw TypeError("Expected object, but received: " + Object.prototype.toString.call(options));
    }

    // handle color format
    switch (options.format) {

        // calculate random RGB color
        case "rgb":
            color = "rgb(" + Math.floor(Math.random() * 256) +
                "," + Math.floor(Math.random() * 256) +
                "," + Math.floor(Math.random() * 256) + ")";
            break;

            // calculate a random Hex value 
        case "hex":
            color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            break;

            //  default calculate random color Name
        default:
            color = colors[Math.floor(Math.random() * colors.length)]["name"];
            break;
    }

    return color;
}

module.exports = randomColor;