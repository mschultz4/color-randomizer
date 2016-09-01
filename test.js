var test = require("tape");
var randomColor = require("./index.js");


test("returns color name when specified", function(t){
    var options = {format: "name"},
          color = randomColor(options),
          regex = /^\w+$/;
    t.ok(regex.test(color));
    t.equals(typeof color, "string");
    t.end();
});

test("returns color name when no options included", function(t){
    var   color = randomColor(),
          regex = /^\w+$/;
    t.ok(regex.test(color));
    t.equals(typeof color, "string");
    t.end();
});

test("returns rgb color", function(t){
    var options = {format: "rgb"},
          color = randomColor(options),
          regex = /^rgb\(\w{1,3},\w{1,3},\w{1,3}\)$/;

    t.ok(regex.test(color));
    t.equals(typeof color, "string");
    t.end();
});

test("returns hex color", function(t){
    var options = {format: "hex"},
          color = randomColor(options),
          regex = /^#\w{6}$/;

    t.ok(regex.test(color));
    t.equals(typeof color, "string");
    t.end();
});

test("throws TypeError", function(t){
    var options = "some string";

    t.throws(function(){
        randomColor(options);
    }, TypeError);
    t.end();
});