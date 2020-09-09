import React from 'react';
import { SafeAreaView } from 'react-native';

import ScreenProps from './model';
import styles from './styles';

export default function Screen({ children, style }: ScreenProps) {
    return (
        <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    );
}
