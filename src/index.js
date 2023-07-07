import nx from '@jswork/next';

nx.trySetGet = function (inTarget, inPath, inValue) {
  var value = nx.get(inTarget, inPath);
  value === undefined && nx.set(inTarget, inPath, inValue);
  return nx.get(inTarget, inPath);
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.trySet;
}

export default nx.trySet;
