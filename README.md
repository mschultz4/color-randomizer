# :rainbow: :rainbow::rainbow: color-randomizer :rainbow: :rainbow: :rainbow: 

Generate random colors

## Install
```
npm install color-randomizer
```

## Use
Param {object} options Options object

For example
```
var options = {
    format: 'hex' // returns hex
}

```
more examples
```
randomColor(); // default to name
randomColor({format: 'hex'}); // returns hex
randomColor({format: 'name'}); // returns name
randomColor({format: 'rgb'}); // returns rgb
```
