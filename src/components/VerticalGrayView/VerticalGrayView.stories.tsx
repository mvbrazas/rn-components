import VerticalGrayView from "./VerticalGrayView";

export default {
    title: 'components/common/VerticalGrayView',
    component: VerticalGrayView,
    parameters: {
        docs: {
            description: {
                component: "VerticalGrayView is a component that displays a thumbnail image with a title and date inside its own view.",
            }
        }
    },
    argTypes: {
        sourceHeight: {
            control: "select",
            options: [
                130, 
                150, 
                180
            ],
            description: "Height of the thumbnail",
            defaultValue: { summary: "double" }
        },
        sourcewidth: {
            control: "select",
            options: [
                200, 
                230, 
                300
            ],
            description: "Width of the thumbnail",
            defaultValue: { summary: "double" }
        },
        textViewHeight: {
            control: "select",
            options: [
                50, 
                80, 
                100
            ],
            description: "Height of the thumbnail",
            defaultValue: { summary: "double" }
        },
        textViewWidth: {
            control: "select",
            options: [
                210, 
                230, 
                250
            ],
            description: "Width of the thumbnail",
            defaultValue: { summary: "double" }
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
        textColor: {
            control: {
                type: "color",
                presetColors: ["#000", "#1f1c95", "orange"],
            },
            description: "Text color of the title and date",
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
        title: {
            control: "select",
            options: [
                "China says Biden equating Xi with 'dictators' is 'ridiculous'", 
                "Gigi de Lana loses funds for mom's medical bills after falling victim to scammers", 
                "Legendary 'Coach Pop' to oversee Wembanyama's NBA start"
            ],
            description: "Title of the item",
            defaultValue: { summary: "string" }
        },
        date: {
            control: "select",
            options: [
                "Wed, 21 Jun 2023 07:55:31 GMT", 
                "Wed, 21 Jun 2022 07:52:27 GMT", 
                "Wed, 21 Jun 2021 07:50:08 GMT"
            ],
            description: "Date of the item",
            defaultValue: { summary: "string" }
        },
        source: {
            control: "select",
            options: [
                "https://sa.kapamilya.com/absnews/abscbnnews/media/2022/life/11/14/us-president-joe-biden-and-china-s-president-xi-jinping-afp.jpg", 
                "https://sa.kapamilya.com/absnews/abscbnnews/media/2022/entertainment/09/21/gigi-de-lana-9212022.jpg", 
                "https://sa.kapamilya.com/absnews/abscbnnews/media/2023/tvpatrol/06/21/gregg-popovich.jpg"
            ],
            description: "Image source",
            defaultValue: { summary: "string" }
        },
    }
};

const Basic = {
    args: {
        sourcewidth: 230,
        sourceHeight: 150,
        textViewWidth: 230,
        textViewHeight: 80,
        textSize: 13,
        textColor: "#000",
        backgroundColor: "#c3c3c3",
        title: "China says Biden equating Xi with 'dictators' is 'ridiculous'",
        date: "Wed, 21 Jun 2023 07:55:31 GMT",
        source: "https://sa.kapamilya.com/absnews/abscbnnews/media/2022/life/11/14/us-president-joe-biden-and-china-s-president-xi-jinping-afp.jpg",
    }
};

export { Basic };