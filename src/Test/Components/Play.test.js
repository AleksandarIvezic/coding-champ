import React from 'react';
import renderer from 'react-test-renderer';
import Play from '../../Components/Play';

it('renders correctly', () => {
  const tree = renderer
    .create(<Play />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
