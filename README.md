# currency-resolver [![Build Status](https://travis-ci.org/icodeforlove/currency-resolver.png?branch=master)](https://travis-ci.org/icodeforlove/currency-resolver)

provides a way to lookup currency codes via symbol or look up symbols via currency code

## install

```
npm install currency-resolver
```

or

```
bower install currency-resolver
```

## examples

```javascript
var CurrencyResolver = require('currency-resolver');

CurrencyResolver.getSymbol('USD'); // $
CurrencyResolver.getCode('$'); // USD

CurrencyResolver.getSymbol('GBP'); // £
CurrencyResolver.getCode('£'); // GBP
```