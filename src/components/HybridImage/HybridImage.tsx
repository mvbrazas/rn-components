import React from 'react';
import { Image, ImageBackground, Platform } from 'react-native';

export interface HybridImageProps {
    defaultSource?: any;
    source: string;
    style?: any;
}

const HybridImage = ({
        defaultSource, 
        source,
        style, 
    }: HybridImageProps) => {
    if (Platform.OS === 'ios') {
        return (
            <Image 
                style={style} 
                source={{uri: source}} 
                defaultSource={defaultSource}
            />);
    }
    return (
        <ImageBackground 
            imageStyle={style} 
            source={defaultSource}>
            <Image style={style} source={{uri: source}}/>
        </ImageBackground>
    );
}

export default HybridImage;