import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Play from '../../Components/Play';

it('renders correctly', () => {
  const tree = renderer
    .create(<Router><Play /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
