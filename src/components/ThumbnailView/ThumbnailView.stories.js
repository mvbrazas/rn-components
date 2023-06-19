import React from 'react';
import ThumbnailView from "./ThumbnailView";

export default {
    title: 'components/ThumbnailView',
    component: ThumbnailView,
};

export const Basic = args => <ThumbnailView {...args} />;

Basic.args = {
    isPriority: true,
    title: "Dear  MOR",
    thumbnail: "https://newsapp.abs-cbnnews.com/podcasts/images/dear-mor-v2-low.jpg",
};
