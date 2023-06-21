import React from 'react';
import moment from 'moment';
import { StyleSheet, TouchableOpacity, Text, Dimensions, View } from 'react-native';
import HybridImage from "../HybridImage";

const ThumbnailView = (item) => {
    const { 
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
    } = item;
    const isDateVisible = date != undefined;
    const width = isDateVisible ? Dimensions.get('window').width/2.113 : 150;
    const sinceDate = () => {
        if (isDateVisible) {
            const dateStyle = [
                styles.title, {fontSize: 11}, 
                (isDateVisible && {alignContent: 'flex-start'}),
                textColor && {color: textColor},
                textSize && {fontSize: textSize}
            ];
            const momentDate = moment(new Date(date)).fromNow();
            return <Text numberOfLines={1} style={dateStyle}>{momentDate}</Text>;
        }
        return null;
    }
    const getFeature = (isPriority) => {
        if (isPriority) {
            return (
                <View 
                    style={[
                        styles.viewFeatured,
                        featuredBackgroundColor && {backgroundColor: featuredBackgroundColor}
                    ]}>
                    <Text style={[
                        styles.titleFeatured,
                        featuredTextColor && {color: featuredTextColor}
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
                    textColor && {color: textColor},
                    textSize && {fontSize: textSize}
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