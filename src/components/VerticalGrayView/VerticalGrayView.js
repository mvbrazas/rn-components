import React from "react";
import moment from 'moment';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HybridImage from "../HybridImage";

const VerticalGrayView = (props) => {
    const {
        sourcewidth,
        sourceHeight,
        textViewWidth,
        textViewHeight,
        defaultSource,
        source,
        backgroundColor,
        textColor,
        textSize,
        title,
        date
    } = props;
    const sinceDate = moment(new Date(date)).fromNow();
    return (
        <TouchableOpacity>
            <HybridImage 
                style={[
                    styles.thumbnail,
                    sourcewidth && {width: sourcewidth},
                    sourceHeight && {height: sourceHeight},
                ]} 
                defaultSource={defaultSource} 
                source={source} />
            <View 
                style={[
                    styles.textView,
                    textViewWidth && {width: textViewWidth},
                    textViewHeight && {height: textViewHeight},
                    backgroundColor && {backgroundColor: backgroundColor},
                ]}>
                <Text 
                    style={[
                        styles.title,
                        textSize && {fontSize: textSize},
                        textColor && {color: textColor},
                    ]} 
                    numberOfLines={2}>{title}</Text>
                <Text 
                    style={[
                        styles.date,
                        textSize && {fontSize: textSize-2},
                        textColor && {color: textColor},
                    ]} 
                    numberOfLines={1}>{sinceDate}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default VerticalGrayView;

const styles = StyleSheet.create({
    thumbnail: {
        borderRadius: 10,
        height: 150,
        width: 230,
        marginHorizontal: 5,
        marginTop: 10
    },
    textView: {
        backgroundColor: '#c3c3c3',
        flexDirection: 'column',
        borderRadius: 10,
        padding: 10,
        height: 80,
        width: 230,
        margin: 5
    },
    title: {
        marginBottom: 5,
        fontSize: 13,
        color: '#000000'
    },
    date: {
        fontSize: 11,
        color: '#000000'
    }
});