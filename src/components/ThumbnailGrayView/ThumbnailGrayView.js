import React from 'react';
import moment from 'moment';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HybridImage from '../HybridImage';

const ThumbnailGrayView = (props) => {
    const {
        defaultSource,
        source,
        backgroundColor,
        sourceSize,
        textColor,
        textSize,
        height,
        width,
        summary,
        title,
        date,
        onPress
    } = props;
    const sinceDate = moment(new Date(date)).fromNow();
    return (
        <TouchableOpacity onPress={onPress}>
            <View 
                style={[
                    styles.view,
                    backgroundColor && {backgroundColor: backgroundColor},
                    height && {height: height},
                    width && {width: width}
                ]}>
                <HybridImage 
                    style={[
                        styles.thumbnail,
                        sourceSize && {height: sourceSize, width: sourceSize}
                    ]}
                    defaultSource={defaultSource}
                    source={source} />
                <View style={styles.textView}>
                    <Text
                        style={[
                            styles.title,
                            textColor && {color: textColor},
                            textSize && {fontSize: textSize}
                        ]}
                        numberOfLines={2}>
                            {title}
                    </Text>
                    <Text 
                        style={[
                            styles.description,
                            textColor && {color: textColor},
                            textSize && {fontSize: textSize-1}
                        ]} 
                        numberOfLines={3}>
                            {summary}
                    </Text>
                    <Text 
                        style={[
                            styles.date,
                            textColor && {color: textColor},
                            textSize && {fontSize: textSize-2}
                        ]} 
                        numberOfLines={1}>
                            {sinceDate}
                    </Text>
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