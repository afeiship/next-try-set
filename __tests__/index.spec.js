(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.trySetGet basic', function () {
      const obj = { name: 'fei', email: '1290657123@qq.com' };
      var res1 = nx.trySetGet(obj, 'name', 'feizheng');
      var res2 = nx.trySetGet(obj, 'github', 'afeiship');

      expect(res1).toBe('fei');
      expect(res2).toBe('afeiship');
    });
  });
})();
