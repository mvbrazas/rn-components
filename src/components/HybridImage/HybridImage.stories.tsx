import HybridImage from "./HybridImage";

export default {
    title: 'components/common/HybridImage',
    component: HybridImage,
    parameters: {
        docs: {
            description: {
                component: "HybridImage is a component that uses React Native's Image and ImageBackground components to display an image. It uses ImageBackground & Image for Android. Since Image's defaultSource is not working properly on Android. Because of this issue. For Android devices, it uses ImageBackground to display the defaultSource and Image to display the source. For iOS devices, it uses Image to display the defaultSource and source.",
            }
        }
    },
    argTypes: {
        style: {
            description: "Stylesheet used for the image.",
            defaultValue: { summary: "stylesheet" }
        },
        source: {
            control: "select",
            options: [
                "https://sa.kapamilya.com/absnews/abscbnnews/media/2023/life/06/21/20230621-harry-potter.jpg",
                "https://sa.kapamilya.com/absnews/abscbnnews/media/2023/news/06/21/20220902-dbm-facade-jc-3.jpg",
                "https://sa.kapamilya.com/absnews/abscbnnews/media/2023/tfc/06/21/pid-wrap-thumbs13.jpg"
            ],
            description: "Image source",
            defaultValue: { summary: "string" }
        },
        defaultSource: {
            control: "select",
            options: [
                "{uri: \"image url\"}",
                "require(\"image path\")"
            ],
            description: "Can use either image url or path. This is the image that will be displayed while the source is loading.",
            defaultValue: { summary: "object" }
        },
    }
};

const Basic = {
    args: {
        style: {
            borderRadius: 10,
            height: 150,
            width: 230,
            marginHorizontal: 5,
            marginTop: 10
        },
        source: 'https://sa.kapamilya.com/absnews/abscbnnews/media/2021/news/10/26/gas-pump.jpg',
    }
}

export { Basic }
