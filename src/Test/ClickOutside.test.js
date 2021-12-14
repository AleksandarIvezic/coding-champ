const ClickOutside = require('../Components/ClickOutside');
// @ponicode
describe('componentDidMount', () => {
  let inst;

  beforeEach(() => {
    // eslint-disable-next-line new-cap
    inst = new ClickOutside.default();
  });

  test('0', () => {
    const result = inst.componentDidMount();
    expect(result).toMatchSnapshot();
  });
});
