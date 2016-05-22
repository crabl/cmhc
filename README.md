# cmhc-calculator
> Calculates the CMHC premium required for a given down payment percentage

## Installation

```sh
$ npm install --save cmhc-calculator
```

## Usage

```js
var cmhc = require('cmhc-calculator');

cmhc(0.2); // => 0.0125

// if down payment percent is greater than 20%, CMHC is optional
// this is dictated by the cap_at_twenty_percent flag which says,
// if that flag is true, that we will not purchase CMHC when the
// down payment amount exceeds 20%

cmhc(0.2, true); // => 0
```

# Sources

[CMHC Insurance Cost Table](http://www.cmhc-schl.gc.ca/en/co/moloin/moloin_005.cfm)

## License

MIT © [Chris Rabl]()
