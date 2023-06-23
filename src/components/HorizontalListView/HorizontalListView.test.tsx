import 'react-native';
import React from 'react';
import HorizontalListView from './HorizontalListView';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const type = "Detail";
    const title = "LATEST PODCAST EPISODES";
    const episdoeSample = [
        {
            summary: "Dateline Philippines is ANC’s longest running newscast and it focuses on news from the country's more\nthan 7,000 islands gathered by ABS-CBN's 18 regional stations, the most extensive news gathering group \nnationwide. It tackles the major stories of the day from politics, business, sports and entertainment.", 
            source: "https://newsapp.abs-cbnnews.com/podcasts/images/dateline-low.jpg", 
            title: "June 22, 2023", 
            date: "Thu, 22 Jun 2023 05:21:19 GMT", 
            id: "1"
        },
        {
            summary: "Magandang Buhay, mga momshies! I'm Jolina, Melai, and Regine! Welcome to Magandang Buhay: The Podcast! Ang paboritong mong kasama tuwing umaga ay isang podcast na! Makakasama mo na kami anytime, anywhere! Halika na sa isang Magandang Buhay!", 
            source: "https://newsapp.abs-cbnnews.com/podcasts/images/maganda-buhay-low.jpg", 
            title: "Heart-to-heart conversation with Andrea Brillantes", 
            date: "Thu, 22 Jun 2023 00:59:13 GMT", 
            id: "2"
        },
        {
            summary: "TeleRadyo Balita is TeleRadyo's leading morning newscast. Anchored by veteran broadcast journalist Noli de Castro and Teleradyo reporter Joyce Balancio, it carries news from overnight coverage and stories that are shaping up for the day.", 
            source: "https://newsapp.abs-cbnnews.com/podcasts/images/teleradyo-balita-small.jpg", 
            title: "June 22, 2023", 
            date: "Thu, 22 Jun 2023 00:29:32 GMT", 
            id: "3"
        }
    ];
    renderer.create(<HorizontalListView type={type} title={title} items={episdoeSample} />);
});