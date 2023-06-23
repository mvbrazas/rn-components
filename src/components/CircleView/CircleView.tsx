import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import HybridImage from '../HybridImage';

export interface CircleViewProps {
    onPress?: () => void;
    defaultSource?: any;
    textColor?: string;
    source: string;
    text: string;
    size?: number;
}

const CircleView = ({
        defaultSource,
        textColor,
        onPress,
        source,
        text,
        size
    }: CircleViewProps) => {
    return (
        <TouchableOpacity style={[
                styles.view,
                size != undefined && {width: size}
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
                    textColor != undefined && {color: textColor}
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