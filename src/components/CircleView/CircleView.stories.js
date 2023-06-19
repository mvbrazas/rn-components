import React from 'react';
import CircleView from "./CircleView";

export default {
    title: 'components/CircleView',
    component: CircleView,
};

export const Basic = args => <CircleView {...args} />;

Basic.args = {
    title: 'TeleRadyo',
    thumbnail: 'https://newsapp.abs-cbnnews.com/DZMMAssets/dzmmBanner.png',
};
