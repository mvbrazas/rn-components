import React from 'react';
import HybridImage from "./HybridImage";

export default {
    title: 'components/HybridImage',
    component: HybridImage,
};

export const Basic = args => <HybridImage {...args} />;

Basic.args = {
    style: {
        borderRadius: 10,
        height: 150,
        width: 230,
        marginHorizontal: 5,
        marginTop: 10
    },
    source: 'https://sa.kapamilya.com/absnews/abscbnnews/media/2021/news/10/26/gas-pump.jpg',
};
