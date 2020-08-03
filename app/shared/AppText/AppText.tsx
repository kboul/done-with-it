import React from 'react';
import { Text } from 'react-native';
import IAppText from './model';
import styles from './styles';

const AppText = ({ children }: IAppText) => {
    return <Text style={styles.text}>{children}</Text>;
};

export default AppText;
