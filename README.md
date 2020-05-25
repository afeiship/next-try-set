# next-try-set-get
> Try to set value then return the value.

## installation
```bash
npm install -S @feizheng/next-try-set-get
```

## usage
```js
import '@feizheng/next-try-set-get';

const obj = { name: 'fei', email: '1290657123@qq.com' };
const res1 = nx.trySetGet(obj, 'name', 'feizheng');
const res2 = nx.trySetGet(obj, 'github', 'afeiship');

// results:
// afei
// afeiship
```
