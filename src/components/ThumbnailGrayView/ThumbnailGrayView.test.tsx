import 'react-native';
import React from 'react';
import ThumbnailGrayView from './ThumbnailGrayView';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const title = "June 21, 2023";
  const summary = "TeleRadyo Balita is TeleRadyo's leading morning newscast. Anchored by veteran broadcast journalist Noli de Castro and Teleradyo reporter Joyce Balancio, it carries news from overnight coverage and stories that are shaping up for the day.";
  const date = "Wed, 21 Jun 2023 00:25:36 GMT";
  const source = "https://www.omnycontent.com/d/clips/da9e399a-049b-4e6a-ac26-aeca01379f99/2aa82bbc-df76-4d16-bcd8-af390035b05e/fd1b7587-bf6c-4c2d-87d5-b0280004344d/image.jpg?t=1687307097&size=Large";
  renderer.create(<ThumbnailGrayView title={title} summary={summary} date={date} source={source} />);
});