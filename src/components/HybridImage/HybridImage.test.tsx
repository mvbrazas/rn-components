import 'react-native';
import React from 'react';
import HybridImage from './HybridImage';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const source = "https://sa.kapamilya.com/absnews/abscbnnews/media/2023/life/06/21/20230621-harry-potter.jpg";
  renderer.create(<HybridImage source={source} />);
});