import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import HybridImage from '../HybridImage';

const CircleView = (props) => {
    const {
        defaultSource,
        textColor,
        onPress,
        source,
        text,
        size
    } = props;
    return (
        <TouchableOpacity style={[
                styles.view,
                size && {width: size}
            ]}
            onPress={onPress}>
            <HybridImage 
                style={[
                    styles.cirlcleImage,
                    size && {height: size}
                ]} 
                defaultSource={defaultSource}
                source={source} />
            <Text 
                style={[
                    styles.title, 
                    textColor && {color: textColor}
                ]} 
                numberOfLines={1}>
                    {text}
            </Text>
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