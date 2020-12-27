import React from 'react';
import LottieView from 'lottie-react-native';

interface ActivityIndicatorProps {
    visible: boolean;
}

export default function ActivityIndicator({ visible }: ActivityIndicatorProps) {
    if (!visible) return null;

    return <LottieView autoPlay loop source={require('./loader.json')} />;
}
