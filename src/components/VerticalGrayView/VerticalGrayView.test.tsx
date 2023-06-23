import 'react-native';
import React from 'react';
import VerticalGrayView from './VerticalGrayView';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const title = "China says Biden equating Xi with 'dictators' is 'ridiculous'";
  const date = "Wed, 21 Jun 2023 07:55:31 GMT";
  const source = "https://sa.kapamilya.com/absnews/abscbnnews/media/2022/life/11/14/us-president-joe-biden-and-china-s-president-xi-jinping-afp.jpg";
  renderer.create(<VerticalGrayView title={title} date={date} source={source} />);
});