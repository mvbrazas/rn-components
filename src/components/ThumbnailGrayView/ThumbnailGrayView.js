import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HybridImage from '../HybridImage';

const ThumbnailGrayView = (props) => {
    const {thumbnail, defaultSource, title, summary, date, onPress} = props;
    const sinceDate = moment(new Date(date)).fromNow();
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.view}>
                <HybridImage style={styles.thumbnail} source={thumbnail} defaultSource={defaultSource} />
                <View style={styles.textView}>
                    <Text numberOfLines={2} style={styles.title}>{title}</Text>
                    <Text numberOfLines={3} style={styles.description}>{summary}</Text>
                    <Text numberOfLines={1} style={styles.date}>{sinceDate}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ThumbnailGrayView;

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#c3c3c3',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
        height: 130,
        width: 250,
        margin: 5
    },
    thumbnail: {
      borderRadius: 10,
      height: 70,
      width: 70
    },
    textView: {
        marginHorizontal: 10,
        flex: 1
    },
    title: {
        fontWeight: 'bold',
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