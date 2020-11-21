# next-try-set-get
> Try to set value then return the value.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-try-set-get
```

## usage
```js
import '@jswork/next-try-set-get';

const obj = { name: 'fei', email: '1290657123@qq.com' };
const res1 = nx.trySetGet(obj, 'name', 'feizheng');
const res2 = nx.trySetGet(obj, 'github', 'afeiship');

// results:

// afei
// afeiship
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-try-set-get/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-try-set-get
[version-url]: https://npmjs.org/package/@jswork/next-try-set-get

[license-image]: https://img.shields.io/npm/l/@jswork/next-try-set-get
[license-url]: https://github.com/afeiship/next-try-set-get/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-try-set-get
[size-url]: https://github.com/afeiship/next-try-set-get/blob/master/dist/next-try-set-get.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-try-set-get
[download-url]: https://www.npmjs.com/package/@jswork/next-try-set-get
