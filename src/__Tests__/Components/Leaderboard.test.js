import React from 'react';
import renderer from 'react-test-renderer';
import Leaderboard from '../../Components/Leaderboard';

it('renders correctly', () => {
  const tree = renderer
    .create(<Leaderboard />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
