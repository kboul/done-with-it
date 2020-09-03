import React from 'react';
import { SafeAreaView } from 'react-native';

import Props from './model';
import styles from './styles';

const Screen = ({ children }: Props) => {
    return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

export default Screen;
