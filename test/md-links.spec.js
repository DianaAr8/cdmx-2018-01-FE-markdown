const { checkRoute,searchLinks} = require('../index.js');

describe('checkRoute', () => {
  test('Debería checkRoute ser una función', () => {
    expect(typeof checkRoute).toEqual('function');
  });
  test('Debería searchLinks ser una función', () => {
    expect(typeof searchLinks).toEqual('function');
  });
});