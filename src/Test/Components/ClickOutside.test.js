import React from 'react';
import renderer from 'react-test-renderer';
import ClickOutside from '../../Components/ClickOutside';

it('renders correctly', () => {
  const tree = renderer
    .create(<ClickOutside />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
