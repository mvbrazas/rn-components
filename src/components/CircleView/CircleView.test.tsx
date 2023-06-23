/**
 * @format
 */

import 'react-native';
import React from 'react';
import CircleView from './CircleView';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const source = "https://newsapp.abs-cbnnews.com/DZMMAssets/dzmmBanner.png";
  const text = "TeleRadyo";
  renderer.create(<CircleView source={source} text={text} />);
});