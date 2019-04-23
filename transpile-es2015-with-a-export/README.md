# A simple webpack demo with no loader to distinguish webpack packaging behaviour with different js type input.

`src/index` and `src/index2` are two entries that have different js grammar inside:

## Input

- index: has `import` ES grammar and `exports` commonjs grammar
- index2: only commonjs grammar

## Ouput

- index:

```js
/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {...}
```

- index2:

```js
/***/ "./src/index2.js":
/*!***********************!*\
  !*** ./src/index2.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {...})
```

## Conclusion

- In the ouput of `index.js`, it said `no exports provided` which means webpack doesn't recoginze the `exports` and then it will bring an error the `exports is not defined`. But the `index2.js` is fine as webapck has recoginzed the `exports` and provided a 'exports' params.
