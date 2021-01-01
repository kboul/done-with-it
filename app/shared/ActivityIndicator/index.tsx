import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';

interface ActivityIndicatorProps {
    visible: boolean;
}

export default function ActivityIndicator({ visible }: ActivityIndicatorProps) {
    if (!visible) return null;

    return (
        <View style={styles.overlay}>
            <LottieView autoPlay loop source={require('./loader.json')} />
        </View>
    );
}
