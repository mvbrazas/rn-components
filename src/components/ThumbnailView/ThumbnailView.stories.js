import ThumbnailView from "./ThumbnailView";

export default {
    title: 'components/common/ThumbnailView',
    component: ThumbnailView,
    parameters: {
        docs: {
            description: {
                component: "ThumbnailView is a component that displays a thumbnail image with a title and date.",
            }
        }
    },
    argTypes: {
        isPriority: {
            description: "Is item featured?",
            defaultValue: { summary: "bool" }
        },
        featuredTextColor: {
            control: {
                type: "color",
                presetColors: ["#fff", "#000", "#1f1c95"],
            },
            description: "Featured text color",
            defaultValue: { summary: "color" }
        },
        featuredBackgroundColor: {
            control: {
                type: "color",
                presetColors: ["#FF6232", "#c3c3c3", "#1f1c95"],
            },
            description: "Featured background color",
            defaultValue: { summary: "color" }
        },
        textColor: {
            control: {
                type: "color",
                presetColors: ["#000", "#1f1c95", "orange"],
            },
            description: "Text color of the title and date",
            defaultValue: { summary: "color" }
        },
        text: {
            control: "select",
            options: [
                "Post-Game", 
                "ANC Market Edge", 
                "ABS-CBN News Flash"
            ],
            description: "Text to be displayed below the image",
            defaultValue: { summary: "string" }
        },
        textSize: {
            control: "select",
            options: [
                10, 
                13, 
                18
            ],
            description: "Text size of the title and date",
            defaultValue: { summary: "int" }
        },
        source: {
            control: "select",
            options: [
                "https://newsapp.abs-cbnnews.com/podcasts/images/postgame-low.jpg", 
                "https://newsapp.abs-cbnnews.com/podcasts/images/market-edge-low.jpg", 
                "https://newsapp.abs-cbnnews.com/podcasts/images/flash-low.jpg"
            ],
            description: "Image source",
            defaultValue: { summary: "string" }
        },
    }
};

const Basic = {
    args: {
        isPriority: false,
        featuredTextColor: "#fff",
        featuredBackgroundColor: "#FF6232",
        textColor: "#000",
        text: "Post-Game",
        textSize: 13,
        source: "https://newsapp.abs-cbnnews.com/podcasts/images/postgame-low.jpg",
    },
    parameters: {
        docs: {
            description: {
                story: "Post-Game variant of CircleView."
            }
        }
    }
};

const HalfScreen = {
    args: {
        isPriority: true,
        featuredTextColor: "#fff",
        featuredBackgroundColor: "#FF6232",
        textColor: "#000",
        text: "Dear  MOR",
        textSize: 13,
        date: "Mon, 19 Jun 2023 04:30:43 GMT",
        source: "https://newsapp.abs-cbnnews.com/podcasts/images/dear-mor-v2-low.jpg",
    },
    parameters: {
        docs: {
            description: {
                story: "Dear MOR variant of CircleView. When date is present, the image is half the screen."
            }
        }
    }
};

export { Basic, HalfScreen };