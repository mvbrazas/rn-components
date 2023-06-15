import React from "react";
import moment from 'moment';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HybridImage from "../HybridImage";

const VerticalGrayView = ({thumbnail, defaultSource, title, date}) => {
    const sinceDate = moment(new Date(date)).fromNow();
    return (
        <TouchableOpacity>
            <HybridImage style={styles.thumbnail} source={thumbnail} defaultSource={defaultSource} />
            <View style={styles.textView}>
                <Text numberOfLines={2} style={styles.title}>{title}</Text>
                <Text numberOfLines={1} style={styles.date}>{sinceDate}</Text>
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
    description: {
        marginBottom: 5,
        fontSize: 12,
        color: '#000000'
    },
    date: {
        fontSize: 11,
        color: '#000000'
    }
});