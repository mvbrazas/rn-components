import CircleView from "./CircleView";

const myxImage = "https://newsapp.abs-cbnnews.com/assets/myxBanner.png";
const moreImage = "https://newsapp.abs-cbnnews.com/assets/morBanner.png";
const teleradyoImage = "https://newsapp.abs-cbnnews.com/DZMMAssets/dzmmBanner.png";

export default {
    title: "components/common/CircleView",
    component: CircleView,
    parameters: {
        docs: {
            description: {
                component: "CircleView is a component that displays a circle image with a title.",
            }
        }
    },
    argTypes: {
        textColor: {
            control: {
                type: "color",
                presetColors: ["#000", "#1f1c95", "#333"],
            },
            description: "Text color of the title",
            defaultValue: { summary: "color" }
        },
        text: {
            control: "select",
            options: ["TeleRadyo", "MORE", "Myx Radio"],
            description: "Text to be displayed below the image",
            defaultValue: { summary: "string" }
        },
        source: {
            control: "select",
            options: [
                teleradyoImage, 
                moreImage, 
                myxImage
            ],
            description: "Image source",
            defaultValue: { summary: "string" }
        },
        size: {
            control: "select",
            options: [
                50, 
                80, 
                100
            ],
            description: "Size of the image and the view",
            defaultValue: { summary: "int" }
        }
    }
};

const Basic = {
    args: {
        text: "TeleRadyo",
        source: teleradyoImage,
        textColor: "#000",
        size: 80
    },
    parameters: {
        docs: {
            description: {
                story: "TeleRadyo variant of CircleView"
            }
        }
    }
};

const MORE = {
    args: {
        text: "MORE",
        source: moreImage,
        textColor: "#000",
    },
    parameters: {
        docs: {
            description: {
                story: "MOR Entertainment variant of CircleView"
            }
        }
    }
};

const MyxRadio = {
    args: {
        text: "Myx Radio",
        source: myxImage,
        textColor: "#000",
    },
    parameters: {
        docs: {
            description: {
                story: "MYX Radio variant of CircleView"
            }
        }
    }
};

export { Basic, MORE, MyxRadio };