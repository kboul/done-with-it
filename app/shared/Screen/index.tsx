import React from 'react';
import { SafeAreaView, View } from 'react-native';

import ScreenProps from './model';
import styles from './styles';

export default function Screen({ children, style }: ScreenProps) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    );
}
