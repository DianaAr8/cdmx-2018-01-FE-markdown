const { checkRoute, url, idLinks } = require('../index.js');

describe('checkRoute', () => {
  test('Debería checkRoute ser una función', () => {
    expect(typeof checkRoute).toEqual('function');
  });
  test('Debería url ser una función', () => {
    expect(typeof url).toEqual('function');
  });
});


