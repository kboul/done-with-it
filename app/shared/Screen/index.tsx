import React from 'react';
import { SafeAreaView } from 'react-native';

import ScreenProps from './model';
import styles from './styles';

const Screen = ({ children, style }: ScreenProps) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    );
};

export default Screen;
