import ThumbnailGrayView from "./ThumbnailGrayView";

export default {
    title: 'components/common/ThumbnailGrayView',
    component: ThumbnailGrayView,
    parameters: {
        docs: {
            description: {
                component: "ThumbnailGrayView is a component that displays a thumbnail image with a title, summary and date.",
            }
        }
    },
    argTypes: {
        height: {
            control: "select",
            options: [
                100, 
                130, 
                150
            ],
            description: "Height of the view",
            defaultValue: { summary: "int" }
        },
        width: {
            control: "select",
            options: [
                200, 
                250, 
                300
            ],
            description: "Width of the view",
            defaultValue: { summary: "int" }
        },
        textSize: {
            control: "select",
            options: [
                10, 
                13, 
                18
            ],
            description: "Text size of the title, summary and date",
            defaultValue: { summary: "int" }
        },
        sourceSize: {
            control: "select",
            options: [
                50, 
                70, 
                100
            ],
            description: "Source size of the image",
            defaultValue: { summary: "int" }
        },
        textColor: {
            control: {
                type: "color",
                presetColors: ["#000", "#1f1c95", "orange"],
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
        title: {
            control: "select",
            options: [
                "June 21, 2023", 
                "June 20, 2023", 
                "ANCalerts - June 20, 2023"
            ],
            description: "Title of the item",
            defaultValue: { summary: "string" }
        },
        summary: {
            control: "select",
            options: [
                "TeleRadyo Balita is TeleRadyo's leading morning newscast. Anchored by veteran broadcast journalist Noli de Castro and Teleradyo reporter Joyce Balancio, it carries news from overnight coverage and stories that are shaping up for the day.", 
                "TV Patrol is the flagship national network news broadcast of ABS-CBN in the Philippines. It can be heard simultaneously on ANC and TeleRadyo.", 
                "This is the #ANCPodcast. ANC, the ABS-CBN News Channel is your gateway to the Philippines. ANC has firmly established its reputation as an accurate and unbiased source of information, and the go-to station for breaking news, wall-to-wall live news coverage and analyses with context."
            ],
            description: "Summary of the item",
            defaultValue: { summary: "string" }
        },
        date: {
            control: "select",
            options: [
                "Wed, 21 Jun 2023 00:25:36 GMT", 
                "Tue, 20 Jun 2022 12:44:07 GMT", 
                "Tue, 20 Jun 2021 12:14:13 GMT"
            ],
            description: "Date of the item",
            defaultValue: { summary: "string" }
        },
        source: {
            control: "select",
            options: [
                "https://www.omnycontent.com/d/clips/da9e399a-049b-4e6a-ac26-aeca01379f99/2aa82bbc-df76-4d16-bcd8-af390035b05e/fd1b7587-bf6c-4c2d-87d5-b0280004344d/image.jpg?t=1687307097&size=Large", 
                "https://www.omnycontent.com/d/clips/da9e399a-049b-4e6a-ac26-aeca01379f99/17430488-1d6a-410d-a163-af3900344f07/d1a978dd-ce35-4d29-a1bf-b02700cc8ee1/image.jpg?t=1687264930&size=Large", 
                "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/11005111/11005111-1687263230919-401d15094d276.jpg"
            ],
            description: "Image source",
            defaultValue: { summary: "string" }
        },
    }
};

const Basic = {
    args: {
        height: 130,
        width: 250,
        textSize: 13,
        sourceSize: 70,
        textColor: "#000",
        backgroundColor: "#c3c3c3",
        title: "June 21, 2023",
        summary: "TeleRadyo Balita is TeleRadyo's leading morning newscast. Anchored by veteran broadcast journalist Noli de Castro and Teleradyo reporter Joyce Balancio, it carries news from overnight coverage and stories that are shaping up for the day.",
        date: "Wed, 21 Jun 2023 00:25:36 GMT",
        source: "https://www.omnycontent.com/d/clips/da9e399a-049b-4e6a-ac26-aeca01379f99/2aa82bbc-df76-4d16-bcd8-af390035b05e/fd1b7587-bf6c-4c2d-87d5-b0280004344d/image.jpg?t=1687307097&size=Large",
    },
    parameters: {
        docs: {
            description: {
                story: "TeleRadyo Balita variant of ThumbnailGrayView"
            }
        }
    }
};

const TVPatrol = {
    args: {
        height: 130,
        width: 250,
        textSize: 13,
        sourceSize: 70,
        textColor: "#000",
        backgroundColor: "#c3c3c3",
        title: "June 20, 2023",
        summary: "TV Patrol is the flagship national network news broadcast of ABS-CBN in the Philippines. It can be heard simultaneously on ANC and TeleRadyo.",
        date: "Tue, 20 Jun 2023 12:44:07 GMT",
        source: "https://www.omnycontent.com/d/clips/da9e399a-049b-4e6a-ac26-aeca01379f99/17430488-1d6a-410d-a163-af3900344f07/d1a978dd-ce35-4d29-a1bf-b02700cc8ee1/image.jpg?t=1687264930&size=Large",
    },
    parameters: {
        docs: {
            description: {
                story: "TV Patrol variant of ThumbnailGrayView"
            }
        }
    }
};

const ANCAlerts = {
    args: {
        height: 130,
        width: 250,
        textSize: 13,
        sourceSize: 70,
        textColor: "#000",
        backgroundColor: "#c3c3c3",
        title: "ANCalerts - June 20, 2023",
        summary: "This is the #ANCPodcast. ANC, the ABS-CBN News Channel is your gateway to the Philippines. ANC has firmly established its reputation as an accurate and unbiased source of information, and the go-to station for breaking news, wall-to-wall live news coverage and analyses with context.",
        date: "Tue, 20 Jun 2023 12:14:13 GMT",
        source: "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_episode/11005111/11005111-1687263230919-401d15094d276.jpg",
    },
    parameters: {
        docs: {
            description: {
                story: "ANC Alerts variant of ThumbnailGrayView"
            }
        }
    }
};

export { Basic, TVPatrol, ANCAlerts };
