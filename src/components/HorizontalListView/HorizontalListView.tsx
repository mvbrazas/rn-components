import React from "react";
import { FlatList, StyleSheet, Text } from 'react-native';
import ThumbnailGrayView from "../ThumbnailGrayView";
import ThumbnailView from "../ThumbnailView";
import CircleView from "../CircleView";

export interface HorizontalListView {
    onPress?: (item: any) => void;
    defaultSource?: any;
    backgroundColor?: string;
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
            <Text 
                style={[
                    styles.title,
                    titleColor != undefined && {color: titleColor},
                    titleSize != undefined && {fontSize: titleSize},
                ]}>
                    {title}
            </Text>
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
                    }
                    return <Text>Invalid Type</Text>;
                }}
            />
        </>
    );
}

export default HorizontalListView;

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 5,
        color: '#FF6232',
        fontWeight: 'bold'
    },
    list: {
        marginTop: 5,
    }
});