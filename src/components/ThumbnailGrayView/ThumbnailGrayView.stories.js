import React from 'react';
import ThumbnailGrayView from "./ThumbnailGrayView";

export default {
    title: 'components/ThumbnailGrayView',
    component: ThumbnailGrayView,
};

export const Basic = args => <ThumbnailGrayView {...args} />;

Basic.args = {
    title: "Gasoline, kerosene, diesel rollback set for June 20",
    summary: "Petroleum firms said on Monday they would implement a price rollback on gasoline, kerosene and diesel.",
    date: "2023-06-19T03:36:45+00:00",
    thumbnail: "https://sa.kapamilya.com/absnews/abscbnnews/media/2021/news/10/26/gas-pump_medium.jpg",
};
