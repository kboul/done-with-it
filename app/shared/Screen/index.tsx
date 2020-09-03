import React from 'react';
import { SafeAreaView } from 'react-native';

import Props from './model';
import styles from './styles';

const Screen = ({ children, style }: Props) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    );
};

export default Screen;
