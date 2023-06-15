import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import HybridImage from '../HybridImage';

const CircleView = ({thumbnail, defaultSource, title}) => {
    return (
        <TouchableOpacity style={styles.view}>
            <HybridImage style={styles.cirlcleImage} source={thumbnail} defaultSource={defaultSource} />
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
        </TouchableOpacity>
    );
}

export default CircleView;

const styles = StyleSheet.create({
    view: {
        width: 80,
        marginLeft: 10,
    },
    cirlcleImage: {
        height: 80,
        borderRadius: 50
    },
    title: {
        marginVertical: 5,
        alignSelf: 'center',
        color: '#000000'
    }
});