import React from 'react';
import moment from 'moment';
import { StyleSheet, TouchableOpacity, Text, Dimensions, View } from 'react-native';
import HybridImage from "../HybridImage";

export interface ThumbnailViewProps {
    onPress?: () => void;
    isPriority: boolean;
    featuredTextColor?: string;
    featuredBackgroundColor?: string;
    defaultSource?: any;
    source: string;
    textColor?: string; 
    textSize?: number;
    text: string;
    date?: string
}

const ThumbnailView = ({ 
        isPriority, 
        featuredTextColor,
        featuredBackgroundColor,
        defaultSource, 
        source, 
        textColor, 
        textSize,
        text, 
        date, 
        onPress 
    }: ThumbnailViewProps) => {
    const isDateVisible = date != undefined;
    const width = isDateVisible ? Dimensions.get('window').width/2.113 : 150;
    const sinceDate = () => {
        if (isDateVisible) {
            const momentDate = moment(new Date(date)).fromNow();
            return <Text numberOfLines={1} style={[
                styles.title, 
                {fontSize: 11},
                (isDateVisible && {alignContent: 'flex-start'}),
                textColor != undefined && {color: textColor},
                textSize != undefined && {fontSize: textSize}
            ]}>{momentDate}</Text>;
        }
        return null;
    }
    const getFeature = (isPriority: boolean) => {
        if (isPriority) {
            return (
                <View 
                    style={[
                        styles.viewFeatured,
                        featuredBackgroundColor != undefined && {backgroundColor: featuredBackgroundColor}
                    ]}>
                    <Text style={[
                        styles.titleFeatured,
                        featuredTextColor != undefined && {color: featuredTextColor}
                        ]}>
                            Featured
                    </Text>
                </View>
            );
        }
    };
    return (
        <TouchableOpacity style={[styles.view, {width: width}]} onPress={onPress}>
            <View>
                <HybridImage style={[styles.thumbnail, {height: width, width: width}]} source={source} defaultSource={defaultSource} />
                {getFeature(isPriority)} 
            </View>
            <Text 
                style={[
                    styles.title, 
                    (isDateVisible && {alignContent: 'flex-start'}),
                    textColor != undefined && {color: textColor},
                    textSize != undefined && {fontSize: textSize}
                ]}
                numberOfLines={1}>
                    {text}
            </Text>
            {sinceDate()}
        </TouchableOpacity>
    );
} 

export default ThumbnailView;

const styles = StyleSheet.create({
    view: {
        margin: 5,
    },
    thumbnail: {
        borderRadius: 10,
    },
    title: {
        alignContent: 'center',
        marginTop: 3,
        fontSize: 13,
        color: '#000000'
    },
    viewFeatured: {
        opacity: 0.7,
        marginTop: 10,
        marginLeft: 5,
        borderRadius: 10,
        paddingVertical: 0,
        paddingHorizontal: 7.5,
        backgroundColor: '#FF6232',
        position: 'absolute',
    },
    titleFeatured: {
        margin: 0,
        padding: 0,
        color: '#FFFFFF'
    }
});