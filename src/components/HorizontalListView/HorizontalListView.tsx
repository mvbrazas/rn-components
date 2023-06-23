import React from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ThumbnailGrayView from "../ThumbnailGrayView";
import VerticalGrayView from "../VerticalGrayView";
import ThumbnailView from "../ThumbnailView";
import CircleView from "../CircleView";

export interface HorizontalListView {
    onPress?: (item: any) => void;
    defaultSource?: any;
    backgroundColor?: string;
    isPriority?: boolean;
    sourceSize?: number;
    titleColor?: string;
    titleSize?: number;
    textColor?: string;
    textSize?: number;
    itemHeight?: number;
    itemWidth?: number;
    title: string;
    items: any[];
    type: string;
}

const HorizontalListView = ({
        defaultSource,
        backgroundColor,
        isPriority,
        sourceSize,
        titleColor,
        titleSize,
        textColor,
        textSize,
        itemHeight,
        itemWidth,
        onPress, 
        title, 
        items, 
        type, 
    }: HorizontalListView) => {
    const itemPress = (item: any) => {
        if (onPress != null && onPress != undefined) {
            onPress(item);
        }
    };
    return (
        <>
            <View style={styles.titleView}>
                <Text style={[
                        styles.title,
                        titleColor != undefined && {color: titleColor},
                        titleSize != undefined && {fontSize: titleSize},
                    ]}>
                        {title}
                </Text>
                {isPriority && <View style={styles.featuredView}>
                    <Text style={styles.featuredTitle}>FEATURED</Text>
                </View>}
            </View>
            <FlatList
                horizontal
                data={items}
                style={styles.list}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    const { summary, source, title, date, id } = item;
                    if (type == "Detail") {
                        return (
                            <ThumbnailGrayView 
                                backgroundColor={backgroundColor}
                                defaultSource={defaultSource}
                                sourceSize={sourceSize}
                                textColor={textColor}
                                textSize={textSize}
                                height={itemHeight}
                                width={itemWidth}
                                summary={summary} 
                                source={source}
                                title={title} 
                                date={date}
                                key={id} 
                                onPress={() => itemPress(item)}
                            />
                        );
                    } else if (type == "Circle") {
                        return (
                            <CircleView 
                                defaultSource={defaultSource} 
                                textColor={textColor}
                                size={itemHeight}
                                source={source} 
                                text={title}
                                key={id}
                                onPress={() => itemPress(item)} />
                        );
                    } else if (type == "Thumbnail") {
                        return (
                            <ThumbnailView
                                isPriority={false}
                                defaultSource={defaultSource}
                                textColor={textColor}
                                textSize={textSize}
                                source={source}
                                text={title} 
                                key={id} 
                                onPress={() => itemPress(item)}
                            />
                        );
                    } else if (type == "ThumbnailDetail") {
                        return (
                            <VerticalGrayView
                                sourceHeight={itemHeight}
                                sourcewidth={itemWidth}
                                defaultSource={defaultSource} 
                                backgroundColor={backgroundColor}
                                textColor={textColor}
                                textSize={textSize}
                                source={source} 
                                title={title} 
                                date={date} 
                                key={id} 
                                onPress={() => itemPress(item)}
                            />
                        );
                    }
                    return <Text>Invalid Type</Text>;
                }}
            />
        </>
    );
}

export default HorizontalListView;

const styles = StyleSheet.create({
    titleView: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 5,
        color: '#FF6232',
        fontWeight: 'bold'
    },
    list: {
        marginTop: 5,
    },
    featuredView: {
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 10,
        paddingVertical: 0,
        paddingHorizontal: 7.5,
        backgroundColor: '#FF6232',
        alignSelf: 'center'
    },
    featuredTitle: {
        margin: 0,
        padding: 0,
        color: '#FFFFFF'
    }
});