import 'react-native';
import React from 'react';
import ThumbnailView from './ThumbnailView';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const source = "https://newsapp.abs-cbnnews.com/podcasts/images/postgame-low.jpg";
  const isPriority = true;
  const text = "Post-Game";
  renderer.create(<ThumbnailView isPriority={isPriority} source={source} text={text} />);
});