const updateArr = require('../helpers/updateArr');
// @ponicode
describe('updateArr.default', () => {
  test('0', () => {
    const param1 = [{ text: 'Home', path: 'home' }, { text: 'Categories', path: 'categories' }];
    const result = updateArr.default(param1, ['icon1', 'icon2']);
    const object = [{ text: 'Home', path: 'home', icon: 'icon1' }, { text: 'Categories', path: 'categories', icon: 'icon2' }];
    expect(result).toEqual(object);
  });
});
