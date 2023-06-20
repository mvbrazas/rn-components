import 'react-native';
import React from 'react';
import ThumbnailView from './ThumbnailView';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<ThumbnailView />);
});