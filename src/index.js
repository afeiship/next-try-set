(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.trySetGet = function (inTarget, inPath, inValue) {
    var value = nx.get(inTarget, inPath);
    value === undefined && nx.set(inTarget, inPath, inValue);
    return nx.get(inTarget, inPath);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.trySetGet;
  }
})();
