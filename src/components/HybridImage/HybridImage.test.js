import 'react-native';
import React from 'react';
import HybridImage from './HybridImage';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<HybridImage />);
});