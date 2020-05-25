/*!
 * name: @feizheng/next-try-set-get
 * description: Try to set value then return the value.
 * homepage: https://github.com/afeiship/next-try-set-get
 * version: 1.0.0
 * date: 2020-05-25T11:05:34.800Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');

  nx.trySetGet = function (inTarget, inPath, inValue) {
    var value = nx.get(inTarget, inPath);
    (value === undefined) && nx.set(inTarget, inPath, inValue)
    return nx.get(inTarget, inPath);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.trySetGet;
  }
})();

//# sourceMappingURL=next-try-set-get.js.map
