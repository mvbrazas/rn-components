import HorizontalListView from "./HorizontalListView";

const livestreamSample = [
    {
        source: "https://newsapp.abs-cbnnews.com/DZMMAssets/dzmmBanner.png",
        title: "TeleRadyo",
        id: "1",
    },
    {
        source: "https://newsapp.abs-cbnnews.com/assets/morBanner.png",
        title: "MORE",
        id: "2",
    },
    {
        source: "https://newsapp.abs-cbnnews.com/assets/myxBanner.png",
        title: "Myx Radio",
        id: "3",
    }
];

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

const showSample = [
    {
        source: episdoeSample[0].source, 
        id: episdoeSample[0].id,
        title: "Dateline Philippines"
    },
    {
        source: episdoeSample[1].source, 
        id: episdoeSample[1].id,
        title: "Magandang Buhay: The Podcast"
    },
    {
        source: episdoeSample[2].source, 
        id: episdoeSample[2].id,
        title: "TeleRadyo Balita"
    }
]

const pushSample = [
    {
        source: "https://ent-image-api.abs-cbn.com/Prod/20230623090624/5b8faac5fb4311b564feb91ded7f40a6ad592a023b0cb97cc1bde71d36415d46.jpg", 
        title: "Did you know? Kris Aquino once tried to bring Taylor Swift concert to PH",
        date: "Fri, 23 Jun 2023 08:49:40 GMT",
        id: "1",
    },
    {
        source: "https://ent-image-api.abs-cbn.com/Prod/20230623060624/eda1ade60ee69b5f4b4f8e81ed9dec53113343ba386a59e3db6b0c14de59b758.jpg", 
        title: "Lie Detector Challenge with Majoy Apostol and Jomari Angeles | PUSH TV",
        date: "",
        id: "",
    },
    {
        source: "https://ent-image-api.abs-cbn.com/Prod/20230623030612/d3a7ef61a6ae8246e265d6a481cff537e595833ce9ed7c95c95c01e5306bca64.jpg", 
        title: "Super Junior invites Filipino fans to their upcoming fan party this July",
        date: "Fri, 23 Jun 2023 05:34:36 GMT",
        id: "Fri, 23 Jun 2023 02:16:51 GMT",
    }
]

export default {
    title: "components/HorizontalListView",
    component: HorizontalListView,
    parameters: {
        docs: {
            description: {
                component: "HorizontalListView is a component that displays a list of items horizontally. It can be used to display a list of thumbnails, a list of circles, or a list of details depending to its type.",
            }
        }
    },
    argTypes: {
        isPriority: {
            description: "Is item featured?",
            defaultValue: { summary: "bool" }
        },
        title: {
            control: "select",
            options: ["LIVE!", "LATEST PODCAST EPISODES", "LATEST PODCAST SHOWS"],
            description: "Title of the list",
            defaultValue: { summary: "string" }
        },
        type: {
            control: "select",
            options: ["Circle", "Detail", "Thumbnail", "ThumbnailDetail"],
            description: "Type of the list",
            defaultValue: { summary: "string" }
        },
        textColor: {
            control: {
                type: "color",
                presetColors: ["#000", "#fff", "#333"],
            },
            description: "Text color of the title, summary and date",
            defaultValue: { summary: "color" }
        },
        titleColor: {
            control: {
                type: "color",
                presetColors: ["#FF6232", "#000", "#333"],
            },
            description: "Text color of the title, summary and date",
            defaultValue: { summary: "color" }
        },
        backgroundColor: {
            control: {
                type: "color",
                presetColors: ["#c3c3c3", "#e1e", "#333"],
            },
            description: "Background color of the view",
            defaultValue: { summary: "color" }
        },
        textSize: {
            control: "select",
            options: [
                10, 
                13, 
                18
            ],
            description: "Text size of items",
            defaultValue: { summary: "int" }
        },
        titleSize: {
            control: "select",
            options: [
                13, 
                16, 
                20
            ],
            description: "Title size of the view",
            defaultValue: { summary: "int" }
        },
        sourceSize: {
            control: "select",
            options: [
                50, 
                70, 
                100
            ],
            description: "Source size of items",
            defaultValue: { summary: "int" }
        },
        itemHeight: {
            control: "select",
            options: [
                80, 
                130, 
                150
            ],
            description: "Height of items",
            defaultValue: { summary: "double" }
        },
        itemWidth: {
            control: "select",
            options: [
                200, 
                250, 
                300
            ],
            description: "Width of items",
            defaultValue: { summary: "double" }
        },
    },
};

const Basic = {
    args: {
        textSize: 13,
        titleSize: 16,
        sourceSize: 70,
        itemWidth: 250,
        itemHeight: 130,
        type: "Detail",
        textColor: "#000",
        titleColor: "#FF6232",
        backgroundColor: "#c3c3c3",
        title: "LATEST PODCAST EPISODES",
        isPriority: false,
        items: episdoeSample,
    },
    parameters: {
        docs: {
            description: {
                story: "Detail type displays a list of items with a thumbnail, title, and summary."
            }
        }
    }
};

const Circle = {
    args: {
        type: "Circle",
        itemHeight: 80,
        textColor: "#000",
        titleColor: "#FF6232",
        title: "LIVE!",
        isPriority: false,
        items: livestreamSample,
    },
    parameters: {
        docs: {
            description: {
                story: "Circle type displays a list of items with a circle image and a title."
            }
        }
    }
};

const Thumbnail = {
    args: {
        type: "Thumbnail",
        textSize: 13,
        textColor: "#000",
        titleColor: "#FF6232",
        title: "LATEST PODCAST SHOWS",
        isPriority: false,
        items: showSample,
    },
    parameters: {
        docs: {
            description: {
                story: "Thumbnail type displays a list of items with a thumbnail and a title"
            }
        }
    }
};

const ThumbnailDetail = {
    args: {
        type: "ThumbnailDetail",
        textSize: 13,
        textColor: "#000",
        titleColor: "#FF6232",
        title: "PUSH",
        isPriority: true,
        items: pushSample,
    },
    parameters: {
        docs: {
            description: {
                story: "ThumbnailDetail type displays a list of items with a thumbnail, title, and date."
            }
        }
    }
};

export { Basic, Circle, Thumbnail, ThumbnailDetail };