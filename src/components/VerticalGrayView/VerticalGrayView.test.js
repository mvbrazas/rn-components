import 'react-native';
import React from 'react';
import VerticalGrayView from './VerticalGrayView';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<VerticalGrayView />);
});