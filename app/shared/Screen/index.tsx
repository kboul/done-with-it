import React from 'react';
import { SafeAreaView } from 'react-native';

import IScreen from './model';
import styles from './styles';

const Screen = ({ children }: IScreen) => {
    return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default Screen;
