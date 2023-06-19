import React from 'react';
import VerticalGrayView from "./VerticalGrayView";

export default {
    title: 'components/VerticalGrayView',
    component: VerticalGrayView,
};

export const Basic = args => <VerticalGrayView {...args} />;

Basic.args = {
    title: "Gasoline, kerosene, diesel rollback set for June 20",
    summary: "Petroleum firms said on Monday they would implement a price rollback on gasoline, kerosene and diesel.",
    date: "2023-06-19T03:36:45+00:00",
    thumbnail: "https://sa.kapamilya.com/absnews/abscbnnews/media/2021/news/10/26/gas-pump_medium.jpg",
};
