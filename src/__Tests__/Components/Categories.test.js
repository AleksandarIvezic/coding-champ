import React from 'react';
import renderer from 'react-test-renderer';
import Categories from '../../Components/Categories';

it('renders correctly', () => {
  const tree = renderer
    .create(<Categories />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
