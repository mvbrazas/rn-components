import 'react-native';
import React from 'react';
import ThumbnailGrayView from './ThumbnailGrayView';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<ThumbnailGrayView />);
});