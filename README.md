# next-try-set
> Try to set value then return the value.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-try-set
```

## usage
```js
import '@jswork/next-try-set';

const obj = { name: 'fei', email: '1290657123@qq.com' };
const res1 = nx.trySet(obj, 'name', 'feizheng');
const res2 = nx.trySet(obj, 'github', 'afeiship');

// results:

// afei
// afeiship
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-try-set/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-try-set
[version-url]: https://npmjs.org/package/@jswork/next-try-set

[license-image]: https://img.shields.io/npm/l/@jswork/next-try-set
[license-url]: https://github.com/afeiship/next-try-set/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-try-set
[size-url]: https://github.com/afeiship/next-try-set/blob/master/dist/next-try-set.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-try-set
[download-url]: https://www.npmjs.com/package/@jswork/next-try-set
